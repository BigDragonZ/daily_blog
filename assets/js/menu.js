/**
 * 站点导航（三级）：一级在顶部，二/三级在左侧。
 * - 一级/二级节点点击时默认进入其第一个叶子页面。
 * - 新增章节时只需在 MENU 中追加节点。
 * link 统一相对站点根目录书写，渲染时按 basePath 补前缀。
 */
const MENU = [
  {
    title: '经济学',
    children: [
      {
        title: '经济学原理',
        children: [
          { title: '01 导论', link: 'pages/economics/principles-of-economics/01-introduction.html' },
        ],
      },
    ],
  },
];

/** 找到节点的第一个叶子页面 link */
function firstLeafLink(node) {
  let n = node;
  while (n.children && n.children.length) n = n.children[0];
  return n.link;
}

/** 判断 node 子树是否包含指定 link */
function nodeContains(node, link) {
  if (node.link === link) return true;
  return (node.children || []).some((c) => nodeContains(c, link));
}

/**
 * 渲染站点导航。
 * @param {Object} opts
 *   - topEl: 顶部一级导航挂载点（可选）
 *   - sideEl: 左侧二/三级导航挂载点（可选）
 *   - basePath: 回到站点根目录的相对前缀（如 '../../../'），首页传 ''
 *   - activeLink: 当前页面 link（相对根目录），用于高亮
 */
function renderNav(opts) {
  const { topEl, sideEl, basePath = '', activeLink = '' } = opts || {};

  // 顶部：一级导航
  if (topEl) {
    MENU.forEach((l1) => {
      const a = document.createElement('a');
      a.textContent = l1.title;
      a.href = basePath + firstLeafLink(l1);
      if (nodeContains(l1, activeLink)) a.className = 'active';
      topEl.appendChild(a);
    });
  }

  // 左侧：当前一级节点下的二/三级导航
  if (sideEl) {
    const active1 = MENU.find((l1) => nodeContains(l1, activeLink)) || MENU[0];
    const ul = document.createElement('ul');
    ul.className = 'menu';

    (active1.children || []).forEach((l2) => {
      const li2 = document.createElement('li');
      li2.className = 'menu-l2';
      const a2 = document.createElement('a');
      a2.textContent = l2.title;
      a2.href = basePath + firstLeafLink(l2);
      li2.appendChild(a2);

      const ul3 = document.createElement('ul');
      (l2.children || []).forEach((l3) => {
        const li3 = document.createElement('li');
        li3.className = 'menu-l3';
        const a3 = document.createElement('a');
        a3.textContent = l3.title;
        a3.href = basePath + l3.link;
        if (l3.link === activeLink) a3.className = 'active';
        li3.appendChild(a3);
        ul3.appendChild(li3);
      });
      li2.appendChild(ul3);
      ul.appendChild(li2);
    });

    sideEl.appendChild(ul);
  }
}

/**
 * 渲染当前页面的右侧目录（TOC），基于 main 内的 h2/h3 生成锚点跳转。
 * @param {HTMLElement} tocEl  TOC 挂载点
 * @param {HTMLElement} mainEl 正文容器
 */
function renderToc(tocEl, mainEl) {
  const heads = Array.from(mainEl.querySelectorAll('h2, h3'));
  if (!heads.length) return;

  const title = document.createElement('div');
  title.className = 'toc-title';
  title.textContent = '本页目录';
  tocEl.appendChild(title);

  const ul = document.createElement('ul');
  ul.className = 'toc';
  let currentSub = null;

  heads.forEach((h, i) => {
    if (!h.id) h.id = 'sec-' + (i + 1);
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = h.textContent;
    a.href = '#' + h.id;
    a.dataset.target = h.id;
    li.appendChild(a);

    if (h.tagName === 'H2') {
      li.className = 'toc-l2';
      ul.appendChild(li);
      currentSub = document.createElement('ul');
      li.appendChild(currentSub);
    } else {
      li.className = 'toc-l3';
      if (currentSub) currentSub.appendChild(li);
      else ul.appendChild(li);
    }
  });
  tocEl.appendChild(ul);

  // 滚动高亮当前小节
  const links = Array.from(tocEl.querySelectorAll('a'));
  function onScroll() {
    let current = heads[0];
    heads.forEach((h) => {
      if (h.getBoundingClientRect().top <= 80) current = h;
    });
    links.forEach((a) => a.classList.toggle('active', a.dataset.target === current.id));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

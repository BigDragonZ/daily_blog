/**
 * 站点菜单（三级）：经济学 -> 经济学原理 -> 章节
 * 新增章节时只需在 MENU 中追加节点，首页与章节页侧边栏会自动更新。
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

/**
 * 渲染菜单树。
 * @param {HTMLElement} container 挂载点
 * @param {Object} opts
 *   - basePath: 回到站点根目录的相对前缀（如 '../../../'），首页传 ''
 *   - activeLink: 当前页面 link（相对根目录），用于高亮
 */
function renderMenu(container, opts) {
  const { basePath = '', activeLink = '' } = opts || {};
  const ul = document.createElement('ul');
  ul.className = 'menu';

  MENU.forEach((l1) => {
    const li1 = document.createElement('li');
    li1.className = 'menu-l1';
    const s1 = document.createElement('span');
    s1.textContent = l1.title;
    li1.appendChild(s1);

    const ul2 = document.createElement('ul');
    (l1.children || []).forEach((l2) => {
      const li2 = document.createElement('li');
      li2.className = 'menu-l2';
      const s2 = document.createElement('span');
      s2.textContent = l2.title;
      li2.appendChild(s2);

      const ul3 = document.createElement('ul');
      (l2.children || []).forEach((l3) => {
        const li3 = document.createElement('li');
        li3.className = 'menu-l3';
        const a = document.createElement('a');
        a.textContent = l3.title;
        a.href = basePath + l3.link;
        if (l3.link === activeLink) a.className = 'active';
        li3.appendChild(a);
        ul3.appendChild(li3);
      });
      li2.appendChild(ul3);
      ul2.appendChild(li2);
    });
    li1.appendChild(ul2);
    ul.appendChild(li1);
  });

  container.appendChild(ul);
}

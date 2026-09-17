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
          { title: '02 市场如何运行', link: 'pages/economics/principles-of-economics/02-how-markets-work.html' },
          { title: '03 市场和福利', link: 'pages/economics/principles-of-economics/03-markets-and-welfare.html' },
          { title: '04 市场失灵', link: 'pages/economics/principles-of-economics/04-market-failures.html' },
          { title: '05 企业行为与产业组织', link: 'pages/economics/principles-of-economics/05-firms-and-industry.html' },
          { title: '06 生产要素市场', link: 'pages/economics/principles-of-economics/06-factor-markets.html' },
          { title: '07 宏观经济指标', link: 'pages/economics/principles-of-economics/07-macro-indicators.html' },
          { title: '08 长期经济', link: 'pages/economics/principles-of-economics/08-long-run-economy.html' },
          { title: '09 货币与物价', link: 'pages/economics/principles-of-economics/09-money-and-prices.html' },
          { title: '10 短期经济', link: 'pages/economics/principles-of-economics/10-short-run-economy.html' },
        ],
      },
      {
        title: 'MIT微观经济学原理',
        children: [
          { title: '01 导论：稀缺、权衡与供求模型', link: 'pages/economics/mit-micro/01-introduction.html' },
          { title: '02 消费者选择 I：偏好、效用与预算约束', link: 'pages/economics/mit-micro/02-consumer-choice-1.html' },
          { title: '03 消费者选择 II：需求推导、弹性与收入/替代效应', link: 'pages/economics/mit-micro/03-consumer-choice-2.html' },
          { title: '04 生产理论：从生产函数到规模报酬', link: 'pages/economics/mit-micro/04-production-theory.html' },
          { title: '05 成本：短期、长期与沉没成本之外的决策', link: 'pages/economics/mit-micro/05-costs.html' },
          { title: '06 完全竞争：利润最大化、停产与长期均衡', link: 'pages/economics/mit-micro/06-competition.html' },
          { title: '07 福利经济学：剩余、第一定理与政府干预的代价', link: 'pages/economics/mit-micro/07-welfare-economics.html' },
          { title: '08 垄断 I：定价、无谓损失与价格歧视', link: 'pages/economics/mit-micro/08-monopoly-1.html' },
          { title: '09 垄断 II：来源、规制与可竞争市场', link: 'pages/economics/mit-micro/09-monopoly-2.html' },
          { title: '10 寡头与博弈论：纳什均衡、古诺与伯特兰', link: 'pages/economics/mit-micro/10-oligopoly.html' },
          { title: '11 要素市场：劳动与资本', link: 'pages/economics/mit-micro/11-input-markets.html' },
          { title: '12 跨期选择：现值、复利与人力资本', link: 'pages/economics/mit-micro/12-intertemporal-choice.html' },
          { title: '13 国际贸易：比较优势、福利与贸易政策', link: 'pages/economics/mit-micro/13-international-trade.html' },
          { title: '14 不确定性：预期效用、风险与保险', link: 'pages/economics/mit-micro/14-uncertainty.html' },
          { title: '15 公平、效率与政府再分配', link: 'pages/economics/mit-micro/15-equity-redistribution.html' },
          { title: '16 市场失灵专题：外部性、信息不对称与医疗', link: 'pages/economics/mit-micro/16-market-failures.html' },
        ],
      },
      {
        title: 'MIT宏观经济学原理',
        children: [
          { title: '01 宏观经济学导论与基本概念', link: 'pages/economics/mit-macro/01-introduction.html' },
          { title: '02 商品市场与乘数：凯恩斯交叉', link: 'pages/economics/mit-macro/02-goods-market.html' },
          { title: '03 金融市场与中央银行', link: 'pages/economics/mit-macro/03-financial-market.html' },
          { title: '04 IS-LM 模型：构建与政策分析', link: 'pages/economics/mit-macro/04-is-lm.html' },
          { title: '05 扩展的 IS-LM：实际利率与风险溢价', link: 'pages/economics/mit-macro/05-extended-is-lm.html' },
          { title: '06 劳动力市场与菲利普斯曲线', link: 'pages/economics/mit-macro/06-labor-market-phillips.html' },
          { title: '07 IS-LM-PC 模型：短期到中期', link: 'pages/economics/mit-macro/07-is-lm-pc.html' },
          { title: '08 增长事实与索洛模型：资本积累', link: 'pages/economics/mit-macro/08-growth-solow.html' },
          { title: '09 技术进步、趋同与跨国差异', link: 'pages/economics/mit-macro/09-tech-progress-convergence.html' },
          { title: '10 开放经济：商品市场与贸易差额', link: 'pages/economics/mit-macro/10-open-economy-goods.html' },
          { title: '11 蒙代尔-弗莱明模型与汇率制度', link: 'pages/economics/mit-macro/11-mundell-fleming.html' },
          { title: '12 预期、资产定价与政策可信度', link: 'pages/economics/mit-macro/12-expectations-asset-pricing.html' },
        ],
      },
    ],
  },
  {
    title: '会计学',
    children: [
      {
        title: '财务会计基础',
        children: [
          { title: '01 为什么学会计：三大报表全景', link: 'pages/accounting/accounting-101/01-why-accounting.html' },
        ],
      },
      {
        title: '财务会计',
        children: [
          { title: '01 会计基础与四大报表', link: 'pages/accounting/financial-accounting/01-basics-and-statements.html' },
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

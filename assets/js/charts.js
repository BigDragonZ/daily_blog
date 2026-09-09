/**
 * charts.js — 可复用 SVG 图表库（无第三方依赖）
 *
 * Charts.ppf(container, opts)          生产可能性边界图
 * Charts.circularFlow(container, opts) 循环流量图
 *
 * 所有图表统一输出：SVG + 图例(.legend) + 可选标题，挂载到给定容器。
 */
window.Charts = (function () {
  const SVG_NS = 'http://www.w3.org/2000/svg';

  function el(name, attrs, parent) {
    const node = document.createElementNS(SVG_NS, name);
    if (attrs) {
      Object.keys(attrs).forEach((k) => node.setAttribute(k, attrs[k]));
    }
    if (parent) parent.appendChild(node);
    return node;
  }

  function text(parent, x, y, content, attrs) {
    const t = el('text', Object.assign({ x, y, 'font-size': 13, fill: '#374151' }, attrs || {}), parent);
    t.textContent = content;
    return t;
  }

  /** Catmull-Rom 样条，平滑穿过所有给定点，返回 path d */
  function splinePath(pts) {
    const p = pts.map((pt) => pt.map((v) => +v.toFixed(2)));
    let d = `M ${p[0][0]} ${p[0][1]}`;
    for (let i = 0; i < p.length - 1; i++) {
      const p0 = p[Math.max(0, i - 1)];
      const p1 = p[i];
      const p2 = p[i + 1];
      const p3 = p[Math.min(p.length - 1, i + 2)];
      const c1x = p1[0] + (p2[0] - p0[0]) / 6;
      const c1y = p1[1] + (p2[1] - p0[1]) / 6;
      const c2x = p2[0] - (p3[0] - p1[0]) / 6;
      const c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2[0]} ${p2[1]}`;
    }
    return d;
  }

  /** 生成 [0..max] 的刻度数组 */
  function ticks(max, step) {
    const arr = [];
    for (let v = 0; v <= max + 1e-9; v += step) arr.push(Math.round(v * 100) / 100);
    return arr;
  }

  /**
   * 生产可能性边界图（PPF）
   * opts:
   *  - xLabel, yLabel        坐标轴名称
   *  - xMax, yMax            坐标轴最大值
   *  - xStep, yStep          刻度间隔
   *  - width, height         画布尺寸（可选，默认 640x460）
   *  - caption               图标题（可选）
   *  - series: [{
   *      points: [[x,y],...],   曲线经过的数据点
   *      type: 'linear'|'spline', linear=直线(线性PPF)，spline=平滑曲线(向外弯曲)
   *      color, label, dash(可选)
   *    }]
   *  - markers: [{
   *      x, y, label, color,
   *      shape: 'circle'|'star'   (默认 circle)
   *      labelDx, labelDy         标签偏移(可选)
   *      lineTo: [x,y]            画一条虚线到该点(可选)
   *    }]
   *  - legend: [{ label, color, style: 'line'|'dashed'|'dot'|'star' }]（可选，默认由 series/markers 自动生成）
   */
  function ppf(container, opts) {
    const W = opts.width || 640;
    const H = opts.height || 460;
    const M = { top: 30, right: 30, bottom: 56, left: 64 };
    const iw = W - M.left - M.right;
    const ih = H - M.top - M.bottom;
    const sx = (x) => M.left + (x / opts.xMax) * iw;
    const sy = (y) => M.top + ih - (y / opts.yMax) * ih;

    const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img' });

    // 坐标轴
    el('line', { x1: M.left, y1: M.top, x2: M.left, y2: M.top + ih, stroke: '#9ca3af', 'stroke-width': 1.5 }, svg);
    el('line', { x1: M.left, y1: M.top + ih, x2: M.left + iw, y2: M.top + ih, stroke: '#9ca3af', 'stroke-width': 1.5 }, svg);

    // 刻度
    ticks(opts.xMax, opts.xStep).forEach((v) => {
      el('line', { x1: sx(v), y1: M.top + ih, x2: sx(v), y2: M.top + ih + 5, stroke: '#9ca3af' }, svg);
      text(svg, sx(v), M.top + ih + 20, v, { 'text-anchor': 'middle', 'font-size': 11, fill: '#6b7280' });
    });
    ticks(opts.yMax, opts.yStep).forEach((v) => {
      el('line', { x1: M.left - 5, y1: sy(v), x2: M.left, y2: sy(v), stroke: '#9ca3af' }, svg);
      text(svg, M.left - 10, sy(v) + 4, v, { 'text-anchor': 'end', 'font-size': 11, fill: '#6b7280' });
    });

    // 轴名称
    text(svg, M.left + iw / 2, H - 10, opts.xLabel, { 'text-anchor': 'middle', 'font-weight': 600 });
    const yl = text(svg, 16, M.top + ih / 2, opts.yLabel, { 'text-anchor': 'middle', 'font-weight': 600 });
    yl.setAttribute('transform', `rotate(-90 16 ${M.top + ih / 2})`);

    // 曲线
    (opts.series || []).forEach((s) => {
      const px = s.points.map((pt) => [sx(pt[0]), sy(pt[1])]);
      const d = s.type === 'spline'
        ? splinePath(px)
        : 'M ' + px.map((pt) => pt.join(' ')).join(' L ');
      el('path', {
        d,
        fill: 'none',
        stroke: s.color,
        'stroke-width': 2.5,
        'stroke-dasharray': s.dash ? '6 4' : null,
      }, svg);
    });

    // 标注点
    (opts.markers || []).forEach((m) => {
      if (m.lineTo) {
        el('line', {
          x1: sx(m.x), y1: sy(m.y), x2: sx(m.lineTo[0]), y2: sy(m.lineTo[1]),
          stroke: m.color, 'stroke-width': 1.5, 'stroke-dasharray': '4 3',
        }, svg);
      }
      if (m.shape === 'star') {
        text(svg, sx(m.x), sy(m.y) + 6, '★', { 'text-anchor': 'middle', 'font-size': 18, fill: m.color });
      } else {
        el('circle', { cx: sx(m.x), cy: sy(m.y), r: 6, fill: m.color, stroke: '#fff', 'stroke-width': 2 }, svg);
      }
      if (m.label) {
        text(svg, sx(m.x) + (m.labelDx != null ? m.labelDx : 10), sy(m.y) + (m.labelDy != null ? m.labelDy : -10),
          m.label, { 'font-size': 12, fill: m.color, 'font-weight': 600 });
      }
    });

    mount(container, svg, opts.caption, opts.legend || autoLegend(opts));
  }

  function autoLegend(opts) {
    const items = [];
    (opts.series || []).forEach((s) => {
      if (s.label) items.push({ label: s.label, color: s.color, style: s.dash ? 'dashed' : 'line' });
    });
    const seen = {};
    (opts.markers || []).forEach((m) => {
      const key = (m.shape || 'circle') + '|' + m.color;
      if (m.legend && !seen[key]) {
        seen[key] = true;
        items.push({ label: m.legend, color: m.color, style: m.shape === 'star' ? 'star' : 'dot' });
      }
    });
    return items;
  }

  /**
   * 循环流量图
   * opts（均可选，默认对应教材标准模型）:
   *  - households, firms            两个参与者名称
   *  - goodsMarket, factorsMarket   两个市场名称
   *  - goodsColor, moneyColor       实物流 / 货币流颜色
   *  - caption                      图标题
   */
  function circularFlow(container, opts) {
    opts = opts || {};
    const goods = opts.goodsColor || '#0f766e';
    const money = opts.moneyColor || '#c2410c';
    const label = Object.assign({
      households: '家庭 (Households)',
      firms: '企业 (Firms)',
      goodsMarket: '产品与服务市场',
      factorsMarket: '生产要素市场',
    }, opts.labels || {});

    const W = 680, H = 470;
    const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img' });

    // 箭头 marker（按颜色各定义一个）
    const defs = el('defs', null, svg);
    [['arrow-goods', goods], ['arrow-money', money]].forEach(([id, color]) => {
      const marker = el('marker', {
        id, markerWidth: 10, markerHeight: 10, refX: 8, refY: 3,
        orient: 'auto', markerUnits: 'strokeWidth',
      }, defs);
      el('path', { d: 'M0,0 L8,3 L0,6 Z', fill: color }, marker);
    });

    // 几何：左=家庭，右=企业，上=产品与服务市场，下=生产要素市场
    const box = (x, y, w, h, txt) => {
      el('rect', { x, y, width: w, height: h, rx: 8, fill: '#eff6ff', stroke: '#1d4ed8', 'stroke-width': 1.5 }, svg);
      text(svg, x + w / 2, y + h / 2 + 5, txt, { 'text-anchor': 'middle', 'font-weight': 700, 'font-size': 15 });
    };
    const market = (cx, cy, txt) => {
      el('ellipse', { cx, cy, rx: 130, ry: 38, fill: '#f0fdf4', stroke: '#15803d', 'stroke-width': 1.5 }, svg);
      text(svg, cx, cy + 5, txt, { 'text-anchor': 'middle', 'font-weight': 700, 'font-size': 15 });
    };

    box(20, 200, 130, 60, label.households);       // 家庭
    box(530, 200, 130, 60, label.firms);           // 企业
    market(340, 80, label.goodsMarket);            // 上市场
    market(340, 390, label.factorsMarket);         // 下市场

    const flow = (d, color, arrowId) => {
      el('path', {
        d, fill: 'none', stroke: color, 'stroke-width': 2.5,
        'marker-end': `url(#${arrowId})`,
      }, svg);
    };
    const A_G = 'arrow-goods', A_M = 'arrow-money';

    // ---- 上半圈：产品与服务 ----
    // 货币(支出)：家庭 -> 市场
    flow('M 130 205 C 180 150, 210 110, 245 92', money, A_M);
    // 物品与服务：市场 -> 家庭
    flow('M 225 68 C 180 90, 150 140, 125 195', goods, A_G);
    // 物品与服务：企业 -> 市场
    flow('M 550 195 C 500 140, 470 100, 438 84', goods, A_G);
    // 货币(收入)：市场 -> 企业
    flow('M 445 96 C 490 120, 520 150, 552 205', money, A_M);

    // ---- 下半圈：生产要素 ----
    // 生产要素：家庭 -> 市场
    flow('M 125 265 C 150 320, 180 360, 222 380', goods, A_G);
    // 货币(收入)：市场 -> 家庭
    flow('M 240 402 C 200 380, 165 330, 132 268', money, A_M);
    // 货币(工资/租金/利润)：企业 -> 市场
    flow('M 552 268 C 520 320, 490 355, 448 378', money, A_M);
    // 生产要素：市场 -> 企业
    flow('M 445 400 C 490 375, 525 320, 550 262', goods, A_G);

    // 流向文字标注
    const note = (x, y, txt, color, anchor) =>
      text(svg, x, y, txt, { 'text-anchor': anchor || 'middle', 'font-size': 12, fill: color, 'font-weight': 600 });

    note(150, 128, '支出(货币)', money);
    note(140, 190, '物品与服务', goods, 'end');
    note(530, 128, '收入(货币)', money);
    note(545, 190, '物品与服务', goods, 'start');
    note(140, 318, '生产要素', goods, 'end');
    note(140, 380, '收入(货币)', money, 'end');
    note(545, 318, '生产要素', goods, 'start');
    note(545, 380, '工资、租金与利润', money, 'start');

    mount(container, svg, opts.caption, [
      { label: '实物流（物品、服务与生产要素）', color: goods, style: 'line' },
      { label: '货币流（支出与收入）', color: money, style: 'line' },
    ]);
  }

  /** 输出 SVG + 图例 + 标题到容器 */
  function mount(container, svg, caption, legend) {
    const wrap = document.createElement('div');
    wrap.className = 'figure';
    wrap.appendChild(svg);

    if (legend && legend.length) {
      const lg = document.createElement('div');
      lg.className = 'legend';
      legend.forEach((item) => {
        const span = document.createElement('span');
        span.className = 'legend-item';
        let mark;
        if (item.style === 'dot') {
          mark = document.createElement('span');
          mark.className = 'legend-dot';
          mark.style.background = item.color;
        } else if (item.style === 'star') {
          mark = document.createElement('span');
          mark.className = 'legend-star';
          mark.style.color = item.color;
          mark.textContent = '★';
        } else {
          mark = document.createElement('span');
          mark.className = 'legend-swatch' + (item.style === 'dashed' ? ' dashed' : '');
          mark.style.borderTopColor = item.color;
        }
        span.appendChild(mark);
        span.appendChild(document.createTextNode(item.label));
        lg.appendChild(span);
      });
      wrap.appendChild(lg);
    }

    if (caption) {
      const cap = document.createElement('div');
      cap.className = 'figure-caption';
      cap.textContent = caption;
      wrap.appendChild(cap);
    }

    container.appendChild(wrap);
  }

  return { ppf, circularFlow };
})();

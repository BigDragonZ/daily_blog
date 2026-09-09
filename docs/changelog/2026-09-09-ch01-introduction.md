# 2026-09-09 经济学原理 01 导论（Ch01-Ch03）

## 本次内容

- 搭建站点骨架：
  - `index.html` 首页（含三级菜单）
  - `assets/css/style.css` 全局样式
  - `assets/js/menu.js` 三级菜单数据与渲染（经济学 → 经济学原理 → 01 导论）
- 新增可复用图表库 `assets/js/charts.js`（纯 SVG，无第三方依赖）：
  - `Charts.ppf()`：PPF 图，支持直线/样条曲线、多系列、圆点/星形标注、虚线连线、自动图例
  - `Charts.circularFlow()`：循环流量图，实物流与货币流双色区分，带图例
- 新增页面 `pages/economics/principles-of-economics/01-introduction.html`：
  - Ch01 十大原理：什么是经济学 + 十大原理分三部分（决策 1-4 / 互相影响 5-7 / 整体运行 8-10）
  - Ch02 经济学家：科学方法、假设与模型；循环流量图（图 1）与 PPF（图 2，标注 A/B/C/D 四点），各附解读与优缺点；实证表述 vs 规范表述及示例
  - Ch03 贸易的好处：零和博弈与绝对优势；农民与牧场主模型（一阶段图 3、二阶段图 4）；比较优势与机会成本；贸易前提（价格区间）；美国与墨西哥案例
  - 所有专业名词附中英文与简写（如 PPF、OC、MB/MC、AA、CA）
- 归档：`input/001经济学原理/01~03` 三个章节源文件移至 `archive/001经济学原理/`
  - 父目录 `input/001经济学原理/` 尚有 19 个章节未学习，暂不删除

## 验证方式

- `node --check` 校验 JS 语法
- Node 最小 DOM 桩冒烟测试 menu/charts 渲染
- Chrome headless 截图人工核对四张图与页面排版

## 后续章节开发约定

1. 新章节页面放入 `pages/economics/principles-of-economics/`，并在 `assets/js/menu.js` 注册
2. 图表一律复用 `assets/js/charts.js`，需要新图型时在库中扩展
3. 完成后在本目录新增一条更新记录
4. 已学章节源文件移入 `archive/001经济学原理/`；该目录全部学完后删除 `input/001经济学原理/`

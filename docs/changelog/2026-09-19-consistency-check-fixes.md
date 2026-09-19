# 2026-09-19 提示词与课程页面一致性核对与批量修补

## 背景

三门会计课程（财务会计基础 6 页、财务会计 12 页、管理会计 15 页）均为批量开发完成，本次按提示词大纲逐页核对一致性与遗漏。

## 核对范围与结论

- 逐页对照 `promot-01/02/03` 的"分页与预算"及各节【配图】【配表】【计算示例表】【对比表】标记：33 页计划项全部落地，无缺表
- 全部 71 个页面内联脚本 `new Function` 语法校验：0 错误；`fig-*` 容器与 `Charts.*` 调用双向一一对应，无孤儿空容器
- `menu.js` 71 个链接全部指向存在的页面，无未注册页面
- 跨页锚链（如 MA P02→FA P12）全部有效；每图均有 caption + "图 N 解读"段落

## 修补内容

1. **删除孤儿目录 `pages/accounting/fa-basics/`**（2 页）：课程目录重命名为 `accounting-101` 前的旧草稿，内容已被新页覆盖、菜单未注册，`git rm` 移除
2. **补 MA P01 缺图**（`managerial-accounting/01-intro-and-cost-classification.html`）：大纲 P01 主题 1 要求【配图：FA→MA 课程章节地图流程条】，原 1.4 节仅有文字。新增 Charts.tree 流程图（FA Ch1–12 → Ch13/14 过渡带 → MA Ch15–25，标注本站页码映射），原成本分类决策树顺延为图 2（caption/解读/注释三处编号同步更新）
3. **术语标注修补 5 处**：
   - acct101 P06：「税后营业利润率」补英文 After-tax Operating Margin；「销售额÷投入资本」改用 term span 统一格式
   - acct101 P04：IPO 标记写反（英文被包进 term、中文无标注），改为「首次公开募股（Initial Public Offering, IPO）」标准格式
   - acct101 P03：「货币换算调整（CTA）」改用 term span 统一格式
   - FA P05：复习引用「借贷记账」补英文 Debits and Credits

## 验证方式

- Chrome headless `--dump-dom`（`logs/dom-check-ma-p01.html`）：P01 计 2 个 SVG，图 1/图 2 caption 正确
- 截图核对（`logs/shot-ma-p01.png`）：新图图例在图上方、箭头停在框外、节点标签 ≤9 字、无标签重叠，导航与 TOC 正常

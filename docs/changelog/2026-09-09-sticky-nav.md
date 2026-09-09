# 2026-09-09 吸顶导航优化

## 本次内容

1. **头部吸顶**：`.site-header` 改为 `position: sticky; top: 0`，一级导航（Daily Blog + 经济学）滚动时始终可见
2. **移除面包屑**：章节页头部去掉"经济学 → 经济学原理 → 01 导论"文字
3. **左侧二/三级菜单吸顶**：`.sidebar` 改为 `position: sticky; top: 62px`，加 `max-height` + `overflow-y: auto`，菜单过长时可内部滚动
4. **细节**：右侧目录吸顶位置同步下移至 `top: 86px`；`h2/h3` 加 `scroll-margin-top: 76px`，锚点跳转不被吸顶头部遮挡

## 验证方式

- Chrome headless 截图核对：滚动 300px 后左侧菜单与右侧目录保持可见，TOC 滚动高亮正常
- （headless 截图对 sticky 头部的合成有已知渲染 bug，sticky 行为本身为标准 CSS，在真实浏览器中验证）

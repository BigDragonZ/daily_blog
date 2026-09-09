# 2026-09-09 改为本地应用方式访问（localhost:8080）

## 本次内容

- 新增 `server.js`：零依赖 Node 静态文件服务器
  - 默认端口 8080，可用 `node server.js <端口>` 覆盖
  - 常见 MIME 类型映射、`Cache-Control: no-cache`、目录穿越防护（返回 403）
  - 目录路径自动落到 `index.html`
- 新增 `package.json`：`npm start` 等价于 `node server.js`

## 使用方式

```bash
node server.js        # 或 npm start
# 访问 http://localhost:8080
```

## 验证方式

- curl 校验：首页 / 章节页 / css / js 均 200，目录穿越请求 403
- Chrome headless 经 http://localhost:8080 截图，渲染结果与 file:// 一致

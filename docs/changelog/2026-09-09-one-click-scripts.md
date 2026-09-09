# 2026-09-09 一键启停脚本

## 本次内容

根目录新增一键管理脚本，支持 start / stop / restart：

- `app.bat`（Windows，可双击或在 cmd 中运行）：按 8080 端口查找/结束进程，日志输出到 `logs/server.log`
- `app.sh`（Git Bash / Linux / macOS）：PID 文件 `.app.pid` 管理进程
- 新增 `.gitignore`：忽略 `logs/` 与 `.app.pid`

## 使用方式

```bat
app.bat start      REM 启动
app.bat stop       REM 停止
app.bat restart    REM 重启
```

```bash
./app.sh start     # 或 bash app.sh start
./app.sh stop
./app.sh restart
```

## 验证方式

- `app.sh`：start → 200，restart → 200，stop → 连接拒绝 ✓
- `app.bat`（经 cmd 运行）：start → 200，restart → 200，stop → 连接拒绝 ✓
- 注意：`app.bat` 内不能写中文（cmd 按 GBK 解析 UTF-8 中文会乱码报错），延时用 `ping -n 2` 而非 `timeout`（会被 Git 的 GNU timeout 抢占）

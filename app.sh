#!/usr/bin/env bash
# app.sh — daily_blog 一键管理脚本（Git Bash / Linux / macOS）
# 用法: ./app.sh start | stop | restart
set -u
PORT=8080
NAME=daily_blog
ROOT="$(cd "$(dirname "$0")" && pwd)"
PID_FILE="$ROOT/.app.pid"
LOG_DIR="$ROOT/logs"

is_running() {
  [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null
}

do_start() {
  if is_running; then
    echo "[$NAME] 已在运行: http://localhost:$PORT (pid $(cat "$PID_FILE"))"
    return 0
  fi
  mkdir -p "$LOG_DIR"
  cd "$ROOT"
  nohup node server.js "$PORT" >> "$LOG_DIR/server.log" 2>&1 &
  echo $! > "$PID_FILE"
  sleep 1
  if is_running; then
    echo "[$NAME] 已启动: http://localhost:$PORT (pid $(cat "$PID_FILE"))"
  else
    echo "[$NAME] 启动失败，请查看 logs/server.log"
    rm -f "$PID_FILE"
    return 1
  fi
}

do_stop() {
  if is_running; then
    kill "$(cat "$PID_FILE")" 2>/dev/null
    echo "[$NAME] 已停止"
  else
    echo "[$NAME] 未在运行"
  fi
  rm -f "$PID_FILE"
}

case "${1:-}" in
  start)   do_start ;;
  stop)    do_stop ;;
  restart) do_stop; do_start ;;
  *) echo "用法: $0 {start|stop|restart}"; exit 1 ;;
esac

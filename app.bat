@echo off
REM app.bat - daily_blog one-click manager (Windows)
REM Usage: app.bat start ^| stop ^| restart
setlocal
set PORT=8080
set NAME=daily_blog
cd /d "%~dp0"

if /i "%~1"=="start" goto start
if /i "%~1"=="stop" goto stop
if /i "%~1"=="restart" goto restart
goto usage

:start
call :running
if %errorlevel%==0 (
  echo [%NAME%] already running: http://localhost:%PORT%
  exit /b 0
)
if not exist logs mkdir logs
start "%NAME%" /min cmd /c "node server.js %PORT% >> logs\server.log 2>&1"
> nul 2>&1 ping -n 2 127.0.0.1
call :running
if %errorlevel%==0 (
  echo [%NAME%] started: http://localhost:%PORT%
) else (
  echo [%NAME%] failed to start, see logs\server.log
  exit /b 1
)
exit /b 0

:stop
call :kill
echo [%NAME%] stopped
exit /b 0

:restart
call :kill
goto start

REM check if PORT is LISTENING (errorlevel 0 = running)
:running
netstat -ano | findstr ":%PORT% " | findstr LISTENING >nul
exit /b %errorlevel%

REM kill process by port
:kill
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":%PORT% " ^| findstr LISTENING') do (
  taskkill /PID %%a /F >nul 2>&1
)
exit /b 0

:usage
echo Usage: %~nx0 {start^|stop^|restart}
exit /b 1

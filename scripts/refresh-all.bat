@echo off
setlocal
set "ROOT=C:\Users\yassi\phlebo"
set "LOCK=%ROOT%\scripts\.refresh.lock"
set "LOG=%ROOT%\scripts\refresh.log"

if exist "%LOCK%" (
  echo %date% %time% SKIP - another refresh is running >> "%LOG%"
  exit /b 0
)

echo %date% %time% REFRESH START >> "%LOG%"
echo %date% %time% > "%LOCK%"
cd /d "%ROOT%"

node scripts\scrape-categories.mjs --refresh --max=6 --delay=700 >> "%LOG%" 2>&1
node scripts\scrape-linkedin-categories.mjs --refresh --max=5 --delay=600 >> "%LOG%" 2>&1
node scripts\backfill-logos.mjs --par=4 >> "%LOG%" 2>&1
npm run build >> "%LOG%" 2>&1

del "%LOCK%" 2>nul
echo %date% %time% REFRESH END >> "%LOG%"
endlocal

@echo off

REM Get our base file path
SET BASE_FILE_PATH=%CD%\%1 >nul 2>&1

REM Clean up our environment
call clean.bat

REM Build our application
call build.bat

REM Run our application
start "" "../build/Ethereal.exe"

exit
@echo off

REM Clean up our environment
call clean.bat

REM Build our application
call build.bat

REM Run our application
start "" "../build/Ethereal.exe"

exit
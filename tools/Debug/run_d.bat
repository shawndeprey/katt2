REM Clean up our environment
call clean_d.bat

REM Build our application
call build_d.bat

REM Run our application
start "" "../../build/Ethereal.exe"

exit
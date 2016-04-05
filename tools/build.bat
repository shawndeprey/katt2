@echo off

REM CD up a directory so that we aren't running from within tools/
cd "../" >nul 2>&1

REM Create folder structure
mkdir "build" >nul 2>&1

REM Copy Node-Webkit dependencies
echo Copying dependencies...
xcopy /s /i /y "nwjs" "build" >nul 2>&1

REM Zip app/ into Ethereal.zip
echo Building application...
CScript tools/zip.vbs "D:\002 - Development\005 - HTML\katt2\app" "D:\002 - Development\005 - HTML\katt2\Ethereal.zip" >nul 2>&1

REM Rename Ethereal.zip to Ethereal.nw
ren Ethereal.zip Ethereal.nw >nul 2>&1

REM Create .exe
echo Moving files...
copy /b "nwjs\nw.exe"+"Ethereal.nw" "build/Ethereal.exe" >nul 2>&1

REM Delete Ethereal.nw
del "Ethereal.nw" >nul 2>&1

REM CD back into the tools directory
cd "tools" >nul 2>&1

echo Build complete!
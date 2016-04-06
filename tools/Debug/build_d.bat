REM CD up a directory so that we aren't running from within tools/
cd "../../"

Pause

REM Create folder structure
mkdir "build"

Pause

REM Copy Node-Webkit dependencies
echo Copying dependencies...
xcopy /s /i /y "nwjs" "build"

Pause

REM Zip app/ into Ethereal.zip
echo Building application...
CScript tools/zip.vbs "%CD%app" "%CD%Ethereal.zip"

Pause

REM Rename Ethereal.zip to Ethereal.nw
ren Ethereal.zip Ethereal.nw

Pause

REM Create .exe
echo Moving files...
copy /b "nwjs\nw.exe"+"Ethereal.nw" "build/Ethereal.exe"

Pause

REM Delete Ethereal.nw
del "Ethereal.nw"

Pause

REM CD back into the tools directory
cd "tools/Debug"

Pause

echo Build complete!

Pause

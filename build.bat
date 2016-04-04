@echo off

REM Create folder structure
mkdir "build"

REM Copy Node-Webkit dependencies
xcopy /s /i /y "nwjs" "build"

REM Zip src/ into Ethereal.nw
powershell.exe -nologo -noprofile -command "& { Add-Type -A 'System.IO.Compression.FileSystem'; [IO.Compression.ZipFile]::CreateFromDirectory('src', 'Ethereal.nw'); }"

REM Create .exe
copy /b "nwjs\nw.exe"+"Ethereal.nw" "build/Ethereal.exe"

REM Delete Ethereal.nw
del "Ethereal.nw"

REM TODO:
REM Check out if we can use Team City for Continuous Integration
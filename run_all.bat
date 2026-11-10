@echo off
setlocal
echo ============================================================
echo   Tanigo - Menjalankan Flask Backend & React Frontend
echo ============================================================

set "PYTHON_EXE=%LOCALAPPDATA%\Python\pythoncore-3.14-64\python.exe"
if not exist "%PYTHON_EXE%" (
    set "PYTHON_EXE=%LOCALAPPDATA%\Python\bin\python.exe"
)
if not exist "%PYTHON_EXE%" (
    set "PYTHON_EXE=python"
)

echo [1/2] Menjalankan Flask Backend (Port 5000)...
start "Flask Backend (kematangan-dan-penyakit)" cmd /k "cd /d "%~dp0..\kematangan-dan-penyakit" && "%PYTHON_EXE%" run.py"

echo [2/2] Menjalankan React Frontend (Port 5173)...
start "React B2B Landing Page" cmd /k "cd /d "%~dp0" && pnpm run dev"

echo ============================================================
echo Kedua layanan berhasil dijalankan!
echo - Flask Backend: http://localhost:5000/api/b2b/commodities
echo - React Frontend: http://localhost:5173
echo ============================================================


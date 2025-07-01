@echo off
echo KG Project Backup Verification
echo ===============================
echo.

echo Checking core files...
if exist "server.js" (echo ✓ server.js) else (echo ✗ server.js MISSING)
if exist "package.json" (echo ✓ package.json) else (echo ✗ package.json MISSING)
if exist "package-lock.json" (echo ✓ package-lock.json) else (echo ✗ package-lock.json MISSING)

echo.
echo Checking directories...
if exist "data\" (echo ✓ data directory) else (echo ✗ data directory MISSING)
if exist "public\" (echo ✓ public directory) else (echo ✗ public directory MISSING)
if exist ".github\" (echo ✓ .github directory) else (echo ✗ .github directory MISSING)

echo.
echo Checking data files...
if exist "data\books.json" (echo ✓ books.json) else (echo ✗ books.json MISSING)
if exist "data\requests.json" (echo ✓ requests.json) else (echo ✗ requests.json MISSING)

echo.
echo Checking frontend files...
if exist "public\index.html" (echo ✓ index.html) else (echo ✗ index.html MISSING)
if exist "public\admin.html" (echo ✓ admin.html) else (echo ✗ admin.html MISSING)

echo.
echo Checking documentation...
if exist "README.md" (echo ✓ README.md) else (echo ✗ README.md MISSING)
if exist "BACKUP_INFO.md" (echo ✓ BACKUP_INFO.md) else (echo ✗ BACKUP_INFO.md MISSING)

echo.
echo Verification complete!
echo.
echo To restore this backup:
echo 1. Copy all files to a new directory
echo 2. Run 'npm install' to install dependencies
echo 3. Configure .env file if needed
echo 4. Run 'npm start' to start the application
echo.
pause

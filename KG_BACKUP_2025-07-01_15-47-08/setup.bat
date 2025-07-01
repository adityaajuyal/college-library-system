@echo off
echo 🚀 Setting up College Library System for Production...

:: Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

:: Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed

:: Install dependencies
echo 📦 Installing dependencies...
npm install

:: Create data directory if it doesn't exist
if not exist "data" (
    echo 📁 Creating data directory...
    mkdir data
)

echo ✅ Setup complete!
echo.
echo 🔧 Next steps:
echo 1. Update email configuration in server.js or use environment variables
echo 2. Change admin credentials in server.js or use environment variables
echo 3. Run 'npm start' to start the server
echo 4. Access your library system at http://localhost:3000
echo.
echo 🌐 For deployment, see DEPLOYMENT.md
pause

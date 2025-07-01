#!/bin/bash

# College Library System - Production Setup Script

echo "🚀 Setting up College Library System for Production..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create data directory if it doesn't exist
if [ ! -d "data" ]; then
    echo "📁 Creating data directory..."
    mkdir data
fi

echo "✅ Setup complete!"
echo ""
echo "🔧 Next steps:"
echo "1. Update email configuration in server.js or use environment variables"
echo "2. Change admin credentials in server.js or use environment variables"
echo "3. Run 'npm start' to start the server"
echo "4. Access your library system at http://localhost:3000"
echo ""
echo "🌐 For deployment, see DEPLOYMENT.md"

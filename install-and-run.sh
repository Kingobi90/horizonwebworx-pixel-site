#!/bin/bash

# HorizonWebWorx - Automated Setup Script
# This script will install Node.js (if needed) and run the project

set -e  # Exit on error

echo "🎮 HorizonWebWorx - Automated Setup"
echo "===================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}✅ Node.js is already installed: ${NODE_VERSION}${NC}"
    
    # Check if version is 18 or higher
    MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$MAJOR_VERSION" -lt 18 ]; then
        echo -e "${YELLOW}⚠️  Warning: Node.js version is below 18. Recommended to upgrade.${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Node.js not found. Installing...${NC}"
    echo ""
    
    # Check if Homebrew is installed
    if command -v brew &> /dev/null; then
        echo "📦 Installing Node.js via Homebrew..."
        brew install node
        echo -e "${GREEN}✅ Node.js installed successfully!${NC}"
    else
        echo -e "${RED}❌ Homebrew not found.${NC}"
        echo ""
        echo "Please install Node.js manually:"
        echo "1. Visit: https://nodejs.org"
        echo "2. Download and install the LTS version"
        echo "3. Run this script again"
        echo ""
        echo "Or install Homebrew first:"
        echo '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
        exit 1
    fi
fi

echo ""
echo "📦 Installing project dependencies..."
npm install

echo ""
echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo "🚀 Starting development server..."
echo "   The site will open at: http://localhost:5173"
echo ""
echo "   Press Ctrl+C to stop the server"
echo ""
sleep 2

npm run dev

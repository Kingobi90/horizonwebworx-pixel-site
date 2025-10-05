.PHONY: install dev build preview clean deploy help

help: ## Show this help message
	@echo "HorizonWebWorx - Arcade Landing Page"
	@echo ""
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

dev: ## Start development server
	npm run dev

build: ## Build for production
	npm run build

preview: ## Preview production build
	npm run preview

clean: ## Clean build artifacts and dependencies
	rm -rf dist node_modules .vite

lint: ## Run ESLint
	npm run lint

deploy: build ## Build and show deployment instructions
	@echo "\n✅ Build complete! Deploy the 'dist' folder to your hosting platform."
	@echo "\nQuick deploy options:"
	@echo "  • Netlify: Drag 'dist' folder to app.netlify.com/drop"
	@echo "  • Vercel: Run 'vercel' command"
	@echo "  • GitHub Pages: Run 'npm run deploy' (after setup)"
	@echo "\nSee DEPLOYMENT_GUIDE.md for detailed instructions.\n"

check: ## Check if Node.js is installed
	@which node > /dev/null && echo "✅ Node.js installed: $$(node --version)" || echo "❌ Node.js not installed. Visit nodejs.org"
	@which npm > /dev/null && echo "✅ npm installed: $$(npm --version)" || echo "❌ npm not installed"

info: ## Show project information
	@echo "Project: HorizonWebWorx Arcade Landing Page"
	@echo "Tech Stack: React + Vite + Three.js + Tailwind CSS"
	@echo "Node Version Required: 18+"
	@echo ""
	@echo "Quick Start:"
	@echo "  1. make install"
	@echo "  2. make dev"
	@echo "  3. Open http://localhost:5173"

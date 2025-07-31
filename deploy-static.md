# GitHub Pages Deployment Guide

## Converting to Static Site for GitHub Pages

### 1. Modify the project for static hosting
- Remove server-side contact form functionality
- Replace with client-side form (EmailJS or Formspree)
- Create static build without Express server

### 2. Create GitHub Pages workflow
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/public
```

### 3. Steps to deploy:
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select "GitHub Actions" as source
4. The workflow will automatically deploy your site

### 4. Alternative: Manual GitHub Pages
1. Run `npm run build` locally
2. Copy contents of `dist/public` to a new branch called `gh-pages`
3. Enable GitHub Pages from `gh-pages` branch
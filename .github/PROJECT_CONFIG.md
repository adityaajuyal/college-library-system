# Repository Configuration - Sangrachna's Kitabghar

## 🎯 Project Status
- **Version**: 2.0.0 (UI Enhanced)
- **Status**: Production Ready
- **Last UI Update**: January 2025
- **Deployment**: Render Platform

## 🎨 UI/UX Standards

### Color Palette
```css
/* Primary Colors */
--color-black: #1a1a1a;
--color-dark-grey: #333333;
--color-white: #ffffff;
--color-light-grey: #f3f4f6;
--color-red: #dc2626;

/* Gradients */
--gradient-primary: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
--gradient-secondary: linear-gradient(135deg, #f3f4f6, #e5e7eb);
--gradient-accent: linear-gradient(135deg, #333333 0%, #dc2626 100%);
```

### Typography
```css
/* Font Family */
font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Font Weights */
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing System
```css
/* Spacing Scale */
--spacing-xs: 0.25rem;  /* 4px */
--spacing-sm: 0.5rem;   /* 8px */
--spacing-md: 1rem;     /* 16px */
--spacing-lg: 1.5rem;   /* 24px */
--spacing-xl: 2rem;     /* 32px */
--spacing-2xl: 3rem;    /* 48px */
```

### Animation Standards
```css
/* Transition Duration */
--transition-fast: 0.15s;
--transition-normal: 0.3s;
--transition-slow: 0.6s;

/* Easing Functions */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0.0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

## 🏗️ Architecture Guidelines

### File Structure
```
├── .github/                 # GitHub configuration
│   ├── workflows/           # CI/CD workflows
│   ├── ISSUE_TEMPLATE/      # Issue templates
│   └── pull_request_template.md
├── public/                  # Frontend files
│   ├── index.html          # User interface
│   └── admin.html          # Admin interface
├── data/                   # Data storage
│   ├── books.json          # Book database
│   └── requests.json       # Request database
├── server.js               # Main application server
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

### Technology Stack
- **Backend**: Node.js + Express.js
- **Frontend**: Vanilla HTML5, CSS3, JavaScript ES6+
- **Database**: JSON files (lightweight)
- **Email**: Nodemailer
- **Deployment**: Render Platform
- **Version Control**: Git + GitHub

## 🔧 Development Configuration

### Required Node.js Version
```json
{
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=8.0.0"
  }
}
```

### Environment Variables
```bash
# Required for production
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password
ADMIN_EMAIL=admin@your-domain.com
EMAIL_PASSWORD=your_app_password
PORT=3000

# Optional
EMAIL_FROM=noreply@your-domain.com
EMAIL_SERVICE=gmail
```

### NPM Scripts
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"No tests specified\" && exit 0",
    "lint": "echo \"No linting configured\" && exit 0"
  }
}
```

## 🚀 Deployment Configuration

### Render Settings
```yaml
# render.yaml (if using)
services:
  - type: web
    name: sangrachna-kitabghar
    env: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
```

### Performance Optimization
- Enable gzip compression
- Minify CSS and JavaScript
- Optimize images
- Use CDN for external resources
- Enable browser caching

## 📊 Quality Standards

### Code Quality
- ESLint configuration for JavaScript
- Prettier for code formatting
- No console.log in production
- Proper error handling
- Security best practices

### UI/UX Quality
- WCAG 2.1 AA compliance
- Mobile-first responsive design
- 60fps animations
- Loading states for all async operations
- Error states with user-friendly messages

### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

## 🔒 Security Configuration

### Best Practices
- Environment variables for sensitive data
- Input validation and sanitization
- Rate limiting for API endpoints
- Secure headers configuration
- Regular dependency updates

### Authentication
- Secure admin authentication
- Session management
- Password hashing (if implementing user accounts)
- CSRF protection

## 📈 Monitoring & Analytics

### Error Tracking
- Server error logging
- Client-side error handling
- Performance monitoring
- User interaction tracking

### Metrics to Track
- Page load times
- User engagement
- Book request conversion rates
- Error rates
- Mobile vs desktop usage

## 🎯 Release Management

### Version Numbering
- Major: Breaking changes
- Minor: New features
- Patch: Bug fixes
- Format: MAJOR.MINOR.PATCH

### Release Process
1. Feature development in branches
2. Code review and testing
3. Merge to main branch
4. Automatic deployment to production
5. Release notes and documentation updates

## 📋 Maintenance Schedule

### Regular Tasks
- **Weekly**: Dependency updates check
- **Monthly**: Performance audit
- **Quarterly**: Security review
- **Annually**: Full system architecture review

### Backup Strategy
- Daily automated backups of data files
- Weekly full system backups
- Monthly backup verification
- Disaster recovery plan testing

---

**Last Updated**: January 2025  
**Maintained By**: Development Team  
**Contact**: [Your Contact Information]

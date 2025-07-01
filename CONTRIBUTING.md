# Contributing to Sangrachna's Kitabghar

Thank you for your interest in contributing to our college library management system! This document provides guidelines and information for contributors.

## 🎯 How to Contribute

### 🐛 Reporting Bugs
1. Check existing [issues](https://github.com/your-username/repo-name/issues) first
2. Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md)
3. Provide clear steps to reproduce the issue
4. Include screenshots for UI-related bugs

### ✨ Suggesting Features
1. Check existing [feature requests](https://github.com/your-username/repo-name/issues?q=is%3Aissue+label%3Aenhancement)
2. Use the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md)
3. Explain the use case and benefits
4. Consider UI/UX impact with our color scheme

### 🔧 Contributing Code

#### Prerequisites
- Node.js 18+ installed
- Git knowledge
- Understanding of Express.js and vanilla JavaScript
- Familiarity with our tech stack

#### Development Setup
```bash
# Clone the repository
git clone https://github.com/your-username/repo-name.git
cd repo-name

# Install dependencies
npm install

# Start development server
npm run dev
```

#### Making Changes
1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Follow** our coding standards (see below)
4. **Test** your changes thoroughly
5. **Commit** with clear messages
6. **Push** to your fork
7. **Create** a Pull Request

## 🎨 Design Guidelines

### Color Scheme
Our application uses a professional color palette:
- **Primary**: Black (#1a1a1a) and Dark Grey (#333333)
- **Secondary**: White (#ffffff) and Light Grey (#f3f4f6)
- **Accent**: Red (#dc2626) for important actions
- **Always** maintain this scheme in new features

### UI Principles
- **Consistency**: Follow existing design patterns
- **Accessibility**: Ensure high contrast ratios (4.5:1 minimum)
- **Responsiveness**: Mobile-first approach
- **Performance**: Smooth 60fps animations
- **Typography**: Use Inter font family

### Component Standards
- **Cards**: 20px border radius, subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean styling with proper validation states
- **Icons**: Font Awesome icons consistently used

## 📝 Coding Standards

### JavaScript
```javascript
// Use modern ES6+ syntax
const bookData = await fetchBooks();

// Clear variable names
const isBookAvailable = book.stock > 0;

// Proper error handling
try {
  const result = await apiCall();
} catch (error) {
  showErrorMessage('Operation failed');
}
```

### CSS
```css
/* Use BEM-like naming */
.book-card__title {
  font-size: 1.3rem;
  font-weight: 700;
}

/* Consistent gradients */
background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);

/* Smooth transitions */
transition: all 0.3s ease;
```

### File Organization
```
public/
├── index.html      # User interface
├── admin.html      # Admin interface
└── assets/         # Images, icons, etc.

data/
├── books.json      # Book database
└── requests.json   # Request database

.github/
├── workflows/      # CI/CD workflows
├── ISSUE_TEMPLATE/ # Issue templates
└── pull_request_template.md
```

## 🧪 Testing Guidelines

### Manual Testing Checklist
- [ ] User can browse and search books
- [ ] Book request flow works correctly
- [ ] Admin authentication functions
- [ ] Admin can manage books and requests
- [ ] Email notifications work (if configured)
- [ ] UI is responsive on mobile devices
- [ ] All animations are smooth
- [ ] Color scheme is consistent

### Browser Testing
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Testing
- Page load time < 3 seconds
- Animations run at 60fps
- No memory leaks
- Efficient asset loading

## 📦 Pull Request Guidelines

### Before Submitting
1. **Test** thoroughly on different browsers
2. **Verify** responsive design works
3. **Check** color scheme consistency
4. **Ensure** no console errors
5. **Run** `npm audit` for security issues

### PR Description
Use our [PR template](.github/pull_request_template.md) and include:
- Clear description of changes
- Screenshots for UI changes
- Testing performed
- Any breaking changes

### Review Process
1. **Automated checks** must pass
2. **Manual review** by maintainers
3. **Testing** on staging environment
4. **Approval** and merge

## 🏷️ Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `ui/ux` - Design related issues
- `priority: high` - High priority items
- `needs-review` - Requires team review

## 📚 Resources

### Documentation
- [README.md](README.md) - Project overview
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [EMAIL_SETUP.md](EMAIL_SETUP.md) - Email configuration

### Design Resources
- [Inter Font](https://fonts.google.com/specimen/Inter)
- [Font Awesome Icons](https://fontawesome.com/)
- [CSS Gradients](https://cssgradient.io/)

### Learning Resources
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Modern CSS](https://web.dev/learn/css/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Community

### Code of Conduct
- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Follow professional communication standards

### Getting Help
- Check existing documentation first
- Search closed issues for solutions
- Create a new issue with detailed information
- Tag relevant maintainers for urgent issues

### Recognition
Contributors will be:
- Listed in our contributors section
- Mentioned in release notes
- Invited to join our team (for significant contributions)

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for helping make Sangrachna's Kitabghar better! 🚀

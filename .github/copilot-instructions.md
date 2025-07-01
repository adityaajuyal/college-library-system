<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Sangrachna's Kitabghar - College Library Management System

This is a modern, professional web-based library management system for colleges with a sophisticated UI and comprehensive features.

## 🎨 **UI Design & Features**
- **Modern Interface**: Professional black, white, grey, and red color scheme
- **Responsive Design**: Mobile-first approach with glassmorphism effects
- **Animations**: Smooth transitions, hover effects, and floating particles
- **Typography**: Inter font family for optimal readability
- **Accessibility**: High contrast ratios and keyboard navigation support

## Architecture
- **Backend**: Node.js with Express.js
- **Frontend**: Vanilla HTML, CSS, and JavaScript with modern styling
- **Data Storage**: JSON files (books.json, requests.json)
- **Email**: Nodemailer for notifications
- **Styling**: Modern CSS with gradients, backdrop filters, and animations

## Key Features
- **User Portal**: Students can browse and request books with visual book covers
- **Admin Panel**: Admins can manage books, approve requests, and add stock with secure login
- **Admin Authentication**: Username/password protection for admin access
- **Book Images**: Visual book covers using image URLs with fallback system
- **Email Notifications**: Admin receives email when students request books
- **Stock Management**: Books go out of stock when issued, back in stock when admin adds inventory
- **Search Functionality**: Real-time book search with modern UI
- **Professional Design**: Corporate-grade appearance suitable for academic institutions

## Important Notes
- Admin credentials are set in server.js (default: admin/admin123)
- Email configuration needs to be updated in server.js with actual credentials
- The system uses Gmail SMTP - update with your preferred email service if needed
- Book images are loaded from URLs - system provides fallback images
- Data is stored in JSON files in the /data directory
- The system automatically initializes with sample books

## File Structure
- `server.js` - Main backend server
- `public/index.html` - User interface
- `public/admin.html` - Admin interface  
- `data/books.json` - Books database
- `data/requests.json` - Book requests database

## Development
- Use `npm run dev` for development with nodemon
- Use `npm start` for production

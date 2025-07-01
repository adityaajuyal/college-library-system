# 📚 Sangrachna's Kitabghar - College Library Management System

> A modern, professional web-based library management system featuring a sophisticated UI with professional black, white, grey, and red color scheme.

## ✨ Beautiful Modern Interface

🎨 **Professional Design**: Corporate-grade appearance with elegant color palette  
🌟 **Modern Animations**: Smooth transitions, hover effects, and floating particles  
📱 **Responsive Design**: Perfect experience across all devices  
♿ **Accessible**: High contrast ratios and keyboard navigation support  

## 🚀 Key Features

### 👥 Student Portal
- **🔍 Smart Search**: Real-time book search with modern UI
- **📖 Visual Browsing**: Browse books with beautiful card designs and covers
- **⚡ Instant Requests**: Streamlined book request process
- **📊 Live Updates**: Real-time stock availability
- **🎯 Professional Interface**: Clean, intuitive user experience

### 🛡️ Admin Panel
- **🔐 Secure Authentication**: Protected admin access
- **📋 Comprehensive Management**: Complete book inventory control
- **✅ Request Handling**: Approve/reject requests with ease
- **📈 Analytics Dashboard**: View system statistics
- **📧 Email Integration**: Automated notifications
- **💾 Data Export**: CSV export functionality
- **🎨 Consistent Design**: Matching modern interface

### 🎯 Advanced Functionality
- **📧 Smart Notifications**: Email alerts for requests and approvals
- **📅 Date Tracking**: Automatic issue and due date management
- **📦 Stock Control**: Intelligent inventory management
- **🔄 Status Tracking**: Complete request lifecycle monitoring
- **🧪 Email Testing**: Built-in configuration testing
- **📱 Mobile Optimized**: Touch-friendly responsive design

## 🎨 UI/UX Highlights

### 🖌️ **Professional Color Scheme**
- **Primary**: Sophisticated black and dark grey gradients
- **Secondary**: Clean whites and light greys  
- **Accent**: Strategic red highlights for calls-to-action
- **Result**: Corporate-grade appearance perfect for academic institutions

### ✨ **Modern Visual Effects**
- **Glassmorphism**: Backdrop blur effects for depth
- **Smooth Animations**: 60fps transitions and hover effects
- **Floating Particles**: Subtle background animation system
- **Gradient Borders**: Dynamic visual feedback on interaction

### 📐 **Enhanced Typography & Layout**
- **Inter Font**: Modern, highly readable typography
- **Visual Hierarchy**: Clear information structure
- **Consistent Spacing**: Professional layout system
- **Icon Integration**: Font Awesome icons throughout

### 🎯 **User Experience Features**
- **Staggered Animations**: Cards appear with elegant timing
- **Hover Feedback**: Immediate visual response to user actions
- **Loading States**: Smooth transitions during data operations
- **Error Handling**: User-friendly error messages and states

## Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd college-library-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure email and admin settings**
   - Open `server.js`
   - Update the configuration:
   ```javascript
   const ADMIN_EMAIL = 'your-admin@email.com';
   const EMAIL_PASSWORD = 'your-app-password';
   const ADMIN_USERNAME = 'admin'; // Change to desired username
   const ADMIN_PASSWORD = 'admin123'; // Change to secure password
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   
   For development with auto-restart:
   ```bash
   npm run dev
   ```

## Usage

1. **Access the application**
   - Student Portal: `http://localhost:3000`
   - Admin Panel: `http://localhost:3000/admin`

2. **For Students**
   - Browse available books
   - Click "Request Book" on any available book
   - Fill in your name and email
   - Submit the request

3. **For Administrators**
   - Access admin panel at `http://localhost:3000/admin`
   - Login with configured username and password (default: admin/admin123)
   - View all books with images and their stock levels
   - Check pending book requests
   - Approve requests to issue books
   - Add new books with image URLs to the inventory
   - Manage stock levels
   - **Generate CSV reports** of issued books from the Reports tab

## Email Setup

To enable email notifications:

1. **For Gmail:**
   - Enable 2-factor authentication
   - Generate an app-specific password
   - Use the app password in the configuration
   - Test the configuration using the admin panel

2. **For other email providers:**
   - Update the transporter configuration in `server.js`
   - Refer to Nodemailer documentation for specific settings

3. **Testing Email Configuration:**
   - Login to admin panel at `http://localhost:3000/admin`
   - Go to "Settings" tab
   - Click "Test Email Configuration" to verify setup

## File Structure

```
college-library-system/
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── public/                # Frontend files
│   ├── index.html        # Student portal
│   └── admin.html        # Admin panel
├── data/                  # Data storage (auto-created)
│   ├── books.json        # Books database
│   └── requests.json     # Requests database
└── .github/
    └── copilot-instructions.md
```

## Default Data

The system comes with sample books with images:
- JavaScript Fundamentals by John Doe (5 copies)
- Web Development Guide by Jane Smith (3 copies)
- Database Systems by Bob Johnson (4 copies)

**Default Admin Credentials:**
- Username: `admin`
- Password: `admin123`

⚠️ **Important**: Change the default admin credentials in `server.js` before deploying to production!

## Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Data Storage**: JSON files
- **Email**: Nodemailer
- **Styling**: Custom CSS with modern design

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please create an issue in the repository or contact the development team.

# College Library Management System

A simple and intuitive web-based library management system designed for colleges. This system provides separate interfaces for students and administrators to manage book requests and inventory.

## Features

### Student Portal
- Browse available books in the library
- View book details (title, author, stock availability)
- Request books online
- Real-time stock updates

### Admin Panel
- **Secure login** with username and password authentication
- View and manage book inventory with book images
- Approve/reject book requests
- Add new books to the system with image URLs
- Manage stock levels
- View statistics dashboard
- **CSV Export**: Download reports of all issued books
- Receive email notifications for new requests

### Key Functionality
- **Admin Authentication**: Secure login system for admin access
- **Book Images**: Visual book covers from image URLs
- **Issue Date Tracking**: Books show issue date and due date when approved
- **Email Notifications**: Admin receives email alerts for new book requests, students get approval notifications
- **Email Testing**: Built-in email configuration testing in admin panel
- **Stock Management**: Books automatically go out of stock when issued
- **Request Tracking**: Complete tracking of book requests with status updates
- **Responsive Design**: Works on desktop and mobile devices

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

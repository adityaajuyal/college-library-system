# 🌍 Environment Configuration Templates

## 📁 `.env` Template (Copy and customize)

```env
# =================================
# DATABASE CONFIGURATION
# =================================
# MongoDB Atlas Connection (Recommended for production)
MONGODB_URI=mongodb+srv://libraryAdmin:YOUR_PASSWORD@library-cluster.xxxxx.mongodb.net/library_system?retryWrites=true&w=majority

# Alternative: Local MongoDB
# MONGODB_URI=mongodb://localhost:27017/library_system

# =================================
# SERVER CONFIGURATION
# =================================
PORT=3000
NODE_ENV=production

# =================================
# ADMIN AUTHENTICATION
# =================================
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123

# =================================
# EMAIL CONFIGURATION (Optional)
# =================================
EMAIL_USER=your-library-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=Sangrachna's Kitabghar <your-library-email@gmail.com>
EMAIL_TO=librarian@college.edu

# =================================
# SECURITY (Optional)
# =================================
JWT_SECRET=your-jwt-secret-key-here
SESSION_SECRET=your-session-secret-here
```

---

## 🔧 Development Environment (`.env.local`)

```env
# Development settings
NODE_ENV=development
PORT=3000

# Use local MongoDB for development
MONGODB_URI=mongodb://localhost:27017/library_system_dev

# Development admin credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=dev123

# Disable email in development
EMAIL_ENABLED=false
```

---

## 🌐 Production Environment Variables

### For Render.com:
```
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/library_system?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=production
ADMIN_USERNAME=librarian
ADMIN_PASSWORD=SecurePassword123!
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_FROM=Sangrachna's Kitabghar <your-email@gmail.com>
EMAIL_TO=librarian@college.edu
```

### For Railway:
```
MONGODB_URI=mongodb+srv://libraryAdmin:YOUR_PASSWORD@library-cluster.xxxxx.mongodb.net/library_system?retryWrites=true&w=majority
NODE_ENV=production
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password_here
```

### For Vercel:
```
MONGODB_URI=mongodb+srv://libraryAdmin:YOUR_PASSWORD@library-cluster.xxxxx.mongodb.net/library_system?retryWrites=true&w=majority
NODE_ENV=production
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password_here
```

---

## 🚀 Quick Setup Instructions

### 1. Choose your deployment platform and copy the appropriate environment variables above

### 2. Create MongoDB Atlas database:
- Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
- Create free account and cluster
- Create database user and get connection string
- Replace `YOUR_PASSWORD` with your actual database password

### 3. Set up Gmail App Password (for email notifications):
- Go to Google Account settings
- Enable 2-Factor Authentication
- Generate App Password for "Mail"
- Use this password in `EMAIL_PASS`

### 4. Update admin credentials:
- Change `ADMIN_USERNAME` and `ADMIN_PASSWORD` to secure values
- Use strong passwords for production

---

## 🔒 Security Checklist

- [ ] Change default admin credentials
- [ ] Use strong, unique passwords
- [ ] Don't commit `.env` files to Git
- [ ] Use different credentials for dev/production
- [ ] Enable IP restrictions in MongoDB Atlas if possible
- [ ] Use HTTPS in production
- [ ] Regularly rotate passwords

---

## 🐛 Troubleshooting

### MongoDB Connection Issues:
```bash
# Test connection
node -e "require('mongoose').connect('YOUR_MONGODB_URI').then(() => console.log('✅ Connected')).catch(err => console.log('❌ Failed:', err.message))"
```

### Check Environment Variables:
```bash
# In your project directory
node -e "require('dotenv').config(); console.log('MongoDB URI:', process.env.MONGODB_URI ? 'Set' : 'Not set')"
```

### Common Fixes:
1. **IP Whitelist**: Add `0.0.0.0/0` to MongoDB Atlas Network Access
2. **Password Issues**: Ensure no special characters need URL encoding
3. **Database Name**: Make sure database name in URI matches your setup
4. **Network**: Check if your hosting platform can reach external databases

Your College Library System will automatically detect the database connection and switch from JSON files to persistent MongoDB storage! 📚✨

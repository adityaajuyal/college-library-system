# Gmail Setup for College Library System

## Step-by-Step Gmail Configuration

### 1. Enable 2-Factor Authentication
- Go to myaccount.google.com
- Click "Security" on the left
- Find "2-Step Verification" and turn it ON
- Follow the setup process

### 2. Generate App Password
- Still in Security settings
- Find "App passwords" (appears after 2FA is enabled)
- Click "App passwords"
- Select "Mail" from dropdown
- Click "Generate"
- Copy the 16-character password (looks like: abcd efgh ijkl mnop)

### 3. Use These Settings in Render:
ADMIN_EMAIL=your-actual-email@gmail.com
EMAIL_PASSWORD=the-16-character-app-password

### 4. Test Configuration
- After deployment, login to admin panel
- Go to Settings tab
- Click "Test Email Configuration"
- Check your inbox for test email

## Alternative Email Providers

### For Outlook/Hotmail:
ADMIN_EMAIL=your-email@outlook.com
EMAIL_PASSWORD=your-outlook-password
# Update server.js transporter to use 'hotmail' service

### For Yahoo:
ADMIN_EMAIL=your-email@yahoo.com
EMAIL_PASSWORD=your-yahoo-app-password
# Update server.js transporter to use 'yahoo' service

### For College Email:
Contact your IT department for SMTP settings

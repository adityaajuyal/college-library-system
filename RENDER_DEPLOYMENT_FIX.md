# Render Environment Variables Setup

Copy these environment variables to your Render dashboard:

## Required Variables:
```
MONGODB_URI=mongodb+srv://Adityaajuyal:Aditya123@cluster0.sbq2m7f.mongodb.net/library_system?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=production
ADMIN_USERNAME=librarian
ADMIN_PASSWORD=SecurePassword123!
EMAIL_USER=adityapidey1711@gmail.com
EMAIL_PASS=gynxeoalsmjbsige
EMAIL_FROM=Sangrachna's Kitabghar <adityapidey1711@gmail.com>
EMAIL_TO=librarian@college.edu
ADMIN_EMAIL=adityapidey1711@gmail.com
EMAIL_PASSWORD=gynxeoalsmjbsige
```

## Steps:
1. Go to Render Dashboard
2. Select your web service
3. Go to "Environment" tab
4. Add each variable above
5. Click "Save Changes"
6. Wait for automatic redeploy

## Troubleshooting:
- Ensure MongoDB Atlas allows 0.0.0.0/0 in Network Access
- Check build logs in Render dashboard
- Verify all environment variables are set correctly

Your application should work after these changes!

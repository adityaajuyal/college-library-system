const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

// Load environment variables
require('dotenv').config();

// Database configuration
const mongoose = require('mongoose');
let useDatabase = false;

// Try to connect to MongoDB
const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('✅ MongoDB connected successfully');
      useDatabase = true;
    } else {
      console.log('📁 No MongoDB URI found, using JSON files');
    }
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    console.log('📁 Falling back to JSON file storage');
  }
};

// Database Schemas
const bookSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  stock: { type: Number, required: true },
  available: { type: Number, required: true },
  image: { type: String, default: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
}, { timestamps: true });

const requestSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  bookId: { type: Number, required: true },
  bookTitle: { type: String, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved'], default: 'pending' },
  requestDate: { type: Date, default: Date.now },
  approvedDate: { type: Date },
  issueDate: { type: String },
  dueDate: { type: String }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);
const Request = mongoose.model('Request', requestSchema);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

// Admin configuration - Use environment variables in production
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@college.edu'; // Change this to actual admin email
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || 'your_app_password'; // Change this to actual password
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'; // Change this to desired admin username
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'; // Change this to secure admin password

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: ADMIN_EMAIL,
    pass: EMAIL_PASSWORD
  }
});

// Data file paths
const BOOKS_FILE = 'data/books.json';
const REQUESTS_FILE = 'data/requests.json';

// Initialize data files
function initializeDataFiles() {
  if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
  }
  
  if (!fs.existsSync(BOOKS_FILE)) {
    const initialBooks = [
      { 
        id: 1, 
        title: 'JavaScript Fundamentals', 
        author: 'John Doe', 
        stock: 5, 
        available: 5,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      },
      { 
        id: 2, 
        title: 'Web Development Guide', 
        author: 'Jane Smith', 
        stock: 3, 
        available: 3,
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      },
      { 
        id: 3, 
        title: 'Database Systems', 
        author: 'Bob Johnson', 
        stock: 4, 
        available: 4,
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      }
    ];
    fs.writeFileSync(BOOKS_FILE, JSON.stringify(initialBooks, null, 2));
  }
  
  if (!fs.existsSync(REQUESTS_FILE)) {
    fs.writeFileSync(REQUESTS_FILE, JSON.stringify([], null, 2));
  }
}

// Helper functions - Database and JSON file support
async function readBooks() {
  if (useDatabase) {
    try {
      const books = await Book.find().sort({ id: 1 });
      return books.map(book => ({
        id: book.id,
        title: book.title,
        author: book.author,
        stock: book.stock,
        available: book.available,
        image: book.image
      }));
    } catch (error) {
      console.error('Database read error, falling back to JSON:', error);
      return JSON.parse(fs.readFileSync(BOOKS_FILE, 'utf8'));
    }
  }
  return JSON.parse(fs.readFileSync(BOOKS_FILE, 'utf8'));
}

async function writeBooks(books) {
  if (useDatabase) {
    try {
      for (const book of books) {
        await Book.findOneAndUpdate(
          { id: book.id },
          book,
          { upsert: true, new: true }
        );
      }
      return;
    } catch (error) {
      console.error('Database write error, falling back to JSON:', error);
    }
  }
  fs.writeFileSync(BOOKS_FILE, JSON.stringify(books, null, 2));
}

async function readRequests() {
  if (useDatabase) {
    try {
      const requests = await Request.find().sort({ id: -1 });
      return requests.map(req => ({
        id: req.id,
        bookId: req.bookId,
        bookTitle: req.bookTitle,
        userName: req.userName,
        userEmail: req.userEmail,
        status: req.status,
        requestDate: req.requestDate,
        approvedDate: req.approvedDate,
        issueDate: req.issueDate,
        dueDate: req.dueDate
      }));
    } catch (error) {
      console.error('Database read error, falling back to JSON:', error);
      return JSON.parse(fs.readFileSync(REQUESTS_FILE, 'utf8'));
    }
  }
  return JSON.parse(fs.readFileSync(REQUESTS_FILE, 'utf8'));
}

async function writeRequests(requests) {
  if (useDatabase) {
    try {
      for (const request of requests) {
        await Request.findOneAndUpdate(
          { id: request.id },
          request,
          { upsert: true, new: true }
        );
      }
      return;
    } catch (error) {
      console.error('Database write error, falling back to JSON:', error);
    }
  }
  fs.writeFileSync(REQUESTS_FILE, JSON.stringify(requests, null, 2));
}

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Admin login route
app.post('/api/admin-login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Test email configuration
app.post('/api/test-email', async (req, res) => {
  try {
    const testMailOptions = {
      from: ADMIN_EMAIL,
      to: ADMIN_EMAIL,
      subject: 'Email Configuration Test - College Library',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50;">Email Configuration Test ✅</h2>
          <p>This is a test email to verify that your email configuration is working correctly.</p>
          <p><strong>Test Time:</strong> ${new Date().toLocaleString()}</p>
          <p>If you received this email, your email configuration is working properly!</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #888; font-size: 0.8em;">College Library Management System</p>
        </div>
      `
    };
    
    await transporter.sendMail(testMailOptions);
    res.json({ success: true, message: 'Test email sent successfully!' });
  } catch (error) {
    console.error('Email test failed:', error);
    res.status(500).json({ success: false, message: 'Email test failed: ' + error.message });
  }
});

// API Routes
app.get('/api/books', async (req, res) => {
  try {
    const books = await readBooks();
    res.json(books);
  } catch (error) {
    console.error('Error reading books:', error);
    res.status(500).json({ error: 'Failed to read books' });
  }
});

app.get('/api/requests', async (req, res) => {
  try {
    const requests = await readRequests();
    res.json(requests);
  } catch (error) {
    console.error('Error reading requests:', error);
    res.status(500).json({ error: 'Failed to read requests' });
  }
});

// User book request
app.post('/api/request-book', async (req, res) => {
  try {
    const { bookId, userName, userEmail } = req.body;
    const books = await readBooks();
    const requests = await readRequests();
    
    const book = books.find(b => b.id === parseInt(bookId));
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    
    if (book.available <= 0) {
      return res.status(400).json({ error: 'Book out of stock' });
    }
    
    // Create request
    const newRequest = {
      id: Date.now(),
      bookId: parseInt(bookId),
      bookTitle: book.title,
      userName,
      userEmail,
      status: 'pending',
      requestDate: new Date().toISOString()
    };
    
    requests.push(newRequest);
    await writeRequests(requests);
    
    // Send email to admin
    try {
      const mailOptions = {
        from: ADMIN_EMAIL,
        to: ADMIN_EMAIL,
        subject: 'New Book Request - College Library',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2196F3;">New Book Request 📚</h2>
            <p>A new book request has been submitted:</p>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Request Details</h3>
              <p><strong>Book:</strong> ${book.title}</p>
              <p><strong>Author:</strong> ${book.author}</p>
              <p><strong>Student Name:</strong> ${userName}</p>
              <p><strong>Email:</strong> ${userEmail}</p>
              <p><strong>Request Date:</strong> ${new Date().toLocaleDateString()}</p>
              <p><strong>Available Stock:</strong> ${book.available - 1} (after approval)</p>
            </div>
            <div style="text-align: center; margin: 30px 0;">
              <a href="http://localhost:3000/admin" 
                 style="background: #4CAF50; color: white; padding: 12px 24px; 
                        text-decoration: none; border-radius: 5px; display: inline-block;">
                Go to Admin Panel
              </a>
            </div>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            <p style="color: #888; font-size: 0.8em;">College Library Management System</p>
          </div>
        `
      };
      
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      // Continue with the request even if email fails
    }
    
    res.json({ message: 'Request submitted successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to submit request' });
  }
});

// Admin approve request
app.post('/api/approve-request', async (req, res) => {
  try {
    const { requestId } = req.body;
    const requests = await readRequests();
    const books = await readBooks();
    
    const request = requests.find(r => r.id === parseInt(requestId));
    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }
    
    const book = books.find(b => b.id === request.bookId);
    if (!book || book.available <= 0) {
      return res.status(400).json({ error: 'Book not available' });
    }
    
    // Update book availability
    book.available -= 1;
    await writeBooks(books);
    
    // Update request status with issue date
    const issueDate = new Date();
    request.status = 'approved';
    request.approvedDate = issueDate.toISOString();
    request.issueDate = issueDate.toLocaleDateString();
    request.dueDate = new Date(issueDate.getTime() + (14 * 24 * 60 * 60 * 1000)).toLocaleDateString(); // 14 days from issue
    await writeRequests(requests);
    
    // Send approval email to student
    try {
      const studentMailOptions = {
        from: ADMIN_EMAIL,
        to: request.userEmail,
        subject: 'Book Request Approved - College Library',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4CAF50;">Book Request Approved! 📚</h2>
            <p>Dear ${request.userName},</p>
            <p>Your book request has been approved. Here are the details:</p>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Book Details</h3>
              <p><strong>Title:</strong> ${request.bookTitle}</p>
              <p><strong>Issue Date:</strong> ${request.issueDate}</p>
              <p><strong>Due Date:</strong> ${request.dueDate}</p>
            </div>
            <p>Please collect the book from the library counter.</p>
            <p style="color: #666; font-size: 0.9em;">
              <strong>Note:</strong> Please return the book by the due date to avoid late fees.
            </p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            <p style="color: #888; font-size: 0.8em;">College Library Management System</p>
          </div>
        `
      };
      
      await transporter.sendMail(studentMailOptions);
    } catch (emailError) {
      console.error('Failed to send approval email:', emailError);
      // Don't fail the approval if email fails
    }
    
    res.json({ message: 'Request approved successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to approve request' });
  }
});

// Admin reject request
app.post('/api/reject-request', async (req, res) => {
  try {
    const { requestId } = req.body;
    const requests = await readRequests();
    
    const requestIndex = requests.findIndex(r => r.id === parseInt(requestId));
    if (requestIndex === -1) {
      return res.status(404).json({ error: 'Request not found' });
    }
    
    const request = requests[requestIndex];
    
    // Send rejection email to student
    try {
      const rejectionMailOptions = {
        from: ADMIN_EMAIL,
        to: request.userEmail,
        subject: 'Book Request Update - College Library',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #f44336;">Book Request Update 📚</h2>
            <p>Dear ${request.userName},</p>
            <p>We regret to inform you that your book request could not be approved at this time.</p>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Request Details</h3>
              <p><strong>Title:</strong> ${request.bookTitle}</p>
              <p><strong>Request Date:</strong> ${new Date(request.requestDate).toLocaleDateString()}</p>
            </div>
            <p>This could be due to:</p>
            <ul>
              <li>Book currently unavailable</li>
              <li>High demand for this book</li>
              <li>Other administrative reasons</li>
            </ul>
            <p>You may request the book again later or contact the library for more information.</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            <p style="color: #888; font-size: 0.8em;">College Library Management System</p>
          </div>
        `
      };
      
      await transporter.sendMail(rejectionMailOptions);
    } catch (emailError) {
      console.error('Failed to send rejection email:', emailError);
      // Don't fail the rejection if email fails
    }
    
    // Remove the request from the array
    requests.splice(requestIndex, 1);
    await writeRequests(requests);
    
    res.json({ message: 'Request rejected and removed successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to reject request' });
  }
});

// Admin add stock
app.post('/api/add-stock', async (req, res) => {
  try {
    const { bookId, quantity } = req.body;
    const books = await readBooks();
    
    const book = books.find(b => b.id === parseInt(bookId));
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    
    book.stock += parseInt(quantity);
    book.available += parseInt(quantity);
    await writeBooks(books);
    
    res.json({ message: 'Stock added successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to add stock' });
  }
});

// Admin add new book
app.post('/api/add-book', async (req, res) => {
  try {
    const { title, author, stock, image } = req.body;
    const books = await readBooks();
    
    const newBook = {
      id: Math.max(...books.map(b => b.id), 0) + 1,
      title,
      author,
      stock: parseInt(stock),
      available: parseInt(stock),
      image: image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    };
    
    books.push(newBook);
    await writeBooks(books);
    
    res.json({ message: 'Book added successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to add book' });
  }
});

// Admin delete book
app.delete('/api/delete-book/:id', async (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const books = await readBooks();
    
    // Check if book exists
    const bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex === -1) {
      return res.status(404).json({ error: 'Book not found' });
    }
    
    const bookTitle = books[bookIndex].title;
    
    // Remove all requests related to this book
    const requests = await readRequests();
    const relatedRequests = requests.filter(request => request.bookId === bookId);
    const updatedRequests = requests.filter(request => request.bookId !== bookId);
    
    // Save updated requests (without the deleted book's requests)
    await writeRequests(updatedRequests);
    
    // Remove book from array
    books.splice(bookIndex, 1);
    await writeBooks(books);
    
    const deletedRequestsCount = relatedRequests.length;
    const message = deletedRequestsCount > 0 
      ? `Book "${bookTitle}" deleted successfully! ${deletedRequestsCount} related request(s) were also removed.`
      : `Book "${bookTitle}" deleted successfully!`;
    
    res.json({ message });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: 'Failed to delete book' });
  }
});

// Generate CSV report of issued books
app.get('/api/export-csv', async (req, res) => {
  try {
    const requests = await readRequests();
    const approvedRequests = requests.filter(r => r.status === 'approved');
    
    // CSV header
    let csvContent = 'Book Name,User Name,Issue Date,Due Date,User Email\n';
    
    // Add data rows
    approvedRequests.forEach(request => {
      const bookName = request.bookTitle.replace(/,/g, '""'); // Escape commas in book titles
      const userName = request.userName.replace(/,/g, '""'); // Escape commas in user names
      const issueDate = request.issueDate || 'N/A';
      const dueDate = request.dueDate || 'N/A';
      const userEmail = request.userEmail;
      
      csvContent += `"${bookName}","${userName}","${issueDate}","${dueDate}","${userEmail}"\n`;
    });
    
    // Set headers for file download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="issued_books_report.csv"');
    
    res.send(csvContent);
  } catch (error) {
    console.error('Error generating CSV:', error);
    res.status(500).json({ error: 'Failed to generate CSV report' });
  }
});

// Initialize and start server
initializeDataFiles();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Access user page: http://localhost:3000');
  console.log('Access admin page: http://localhost:3000/admin');
});

const mongoose = require('mongoose');

// MongoDB connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/college-library';
    await mongoose.connect(mongoURI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    // Fallback to JSON files if MongoDB fails
    console.log('📁 Falling back to JSON file storage');
  }
};

// Book Schema
const bookSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  stock: { type: Number, required: true },
  available: { type: Number, required: true },
  image: { type: String, default: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
}, { timestamps: true });

// Request Schema
const requestSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  bookId: { type: Number, required: true },
  bookTitle: { type: String, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userPhone: { type: String, required: true },
  userYear: { type: String, required: true },
  preferredIssueDate: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved'], default: 'pending' },
  requestDate: { type: Date, default: Date.now },
  approvedDate: { type: Date },
  issueDate: { type: String },
  dueDate: { type: String }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);
const Request = mongoose.model('Request', requestSchema);

module.exports = {
  connectDB,
  Book,
  Request
};

const mongoose = require('mongoose');
require('dotenv').config();

// Book schema
const bookSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  stock: { type: Number, required: true },
  available: { type: Number, required: true },
  image: { type: String, default: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

// Sample books to add to MongoDB
const sampleBooks = [
  { 
    id: 1, 
    title: "JavaScript Fundamentals", 
    author: "John Doe", 
    stock: 5, 
    available: 5,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  { 
    id: 2, 
    title: "Web Development Guide", 
    author: "Jane Smith", 
    stock: 3, 
    available: 3,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  { 
    id: 3, 
    title: "Database Systems", 
    author: "Bob Johnson", 
    stock: 4, 
    available: 4,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  { 
    id: 4, 
    title: "React and Node.js", 
    author: "Sarah Wilson", 
    stock: 6, 
    available: 6,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  { 
    id: 5, 
    title: "Python Programming", 
    author: "Mike Davis", 
    stock: 8, 
    available: 8,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  { 
    id: 6, 
    title: "Data Structures & Algorithms", 
    author: "Alex Turner", 
    stock: 4, 
    available: 4,
    image: "https://images.unsplash.com/photo-1535905557558-afc4877cdf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  { 
    id: 7, 
    title: "Machine Learning Basics", 
    author: "Lisa Chen", 
    stock: 3, 
    available: 3,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  { 
    id: 8, 
    title: "Cybersecurity Fundamentals", 
    author: "Ryan Cooper", 
    stock: 5, 
    available: 5,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }
];

async function syncBooksToMongoDB() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully!');

    console.log('🗑️  Clearing existing books...');
    await Book.deleteMany({});
    console.log('✅ Existing books cleared!');

    console.log('📚 Adding sample books to MongoDB...');
    for (const book of sampleBooks) {
      await Book.findOneAndUpdate(
        { id: book.id },
        book,
        { upsert: true, new: true }
      );
      console.log(`✅ Added: ${book.title} by ${book.author}`);
    }

    console.log('\n🎉 Successfully synced all books to MongoDB!');
    console.log(`📊 Total books in database: ${sampleBooks.length}`);
    
    // Verify the books were added
    const savedBooks = await Book.find().sort({ id: 1 });
    console.log('\n📋 Books in MongoDB:');
    savedBooks.forEach(book => {
      console.log(`   ${book.id}. ${book.title} by ${book.author} (Stock: ${book.available}/${book.stock})`);
    });

  } catch (error) {
    console.error('❌ Error syncing books to MongoDB:', error);
  } finally {
    await mongoose.disconnect();
    console.log('\n🔌 Disconnected from MongoDB');
    process.exit(0);
  }
}

console.log('🚀 Starting MongoDB book synchronization...');
console.log('📍 Using MongoDB URI:', process.env.MONGODB_URI ? 'Connected' : 'Not found');
syncBooksToMongoDB();

import mongoose from 'mongoose';

type Connectionobject = {
  isConnected?: number | null;
};

const connection: Connectionobject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log('Using existing database connection');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || '', {});
    connection.isConnected = db.connections[0].readyState;
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

export default dbConnect;

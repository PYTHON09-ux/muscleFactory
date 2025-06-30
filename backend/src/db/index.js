import mongo from 'mongoose';
import { DB_NAME} from '../utils/constants.js';

const connectDB = async () => {
  try {
    await mongo.connect(`mongodb://localhost:27017/${DB_NAME}`)
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
}

export default connectDB;

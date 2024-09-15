import { connect, ConnectOptions} from 'mongoose';
import { DB_URI } from './index';

export const ConnectDB = async () => {
  const dbConfig = {
    url: DB_URI ?? "",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions,
  };

  try {
    await connect(dbConfig.url, dbConfig.options);
    console.log('Database connection successful');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

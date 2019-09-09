import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

import Routes from './routes';

dotenv.config();


class App {
  public mongoConnection: any;
  public app: express.Application;
  public pokeRoutes: Routes = new Routes();
  public mongoDb: any = process.env.MONGO_DB;
  public mongoUri: any = process.env.MONGO_URI;

  constructor() {
    this.app = express();
    this.config();
    this.pokeRoutes.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    if (process.env.NODE_ENV) {
      mongoose.connect(
        this.mongoDb,
        { useNewUrlParser: true, useCreateIndex: true },
      );
    } else {
      mongoose.connect(
        this.mongoUri,
        { useNewUrlParser: true, useCreateIndex: true },
      );
    }
  }
}

export default App;

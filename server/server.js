import Express from 'express';
import mongoose from 'mongoose';
import serverConfig from './config';
import stubs from './models/stubs';
import reservations from './models/reservation/reservation.routes';
import compression from 'compression';
import bodyParser from 'body-parser';

const app = new Express();
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;

mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!');
    throw error;
  }

  stubs.generateReservations();
});

app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use('/api', reservations);

app.listen(port, () => console.log(`Listening on port ${port}`));
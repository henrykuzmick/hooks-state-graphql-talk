import 'babel-polyfill';
import * as Sentry from '@sentry/node';
import app from './server';

const PORT = process.env.PORT || 4000;

Sentry.init({ dsn: 'https://8174baff8b3f46f3853e93e972adfa9a@sentry.io/1498850' });

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});

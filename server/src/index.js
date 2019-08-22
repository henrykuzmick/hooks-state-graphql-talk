// import 'babel-polyfill';
import app from './server';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});

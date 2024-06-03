const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const dbUri = 'your mongodb atlas uri here';
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

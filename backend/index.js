const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() = connected'))
.catch(err = connection error:', err));
app.get('/', (req, res) = is running'));
app.listen(PORT, () = running on port ${PORT}`));

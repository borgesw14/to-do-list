const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {PORT, mongoUri} = require('./config');
const toDoListItemRoutes = require('./routes/api/toDoListItems')

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use('/api/toDoListItems', toDoListItemRoutes);

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB database Connnected...')).catch((err) => console.log(err))

app.get('/', (req, res) => res.send("HELLO"));
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));

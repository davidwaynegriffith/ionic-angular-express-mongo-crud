const beanRoute = require('./routes/bean.routes');

let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dataBaseConfig = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
        console.log('Mongo connect.');
    },
    error => {
        console.log('Failed to connect: ' + error);
    }
);

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', beanRoute)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('PORT Connected on: ' + port);
});
// Find 404 and hand over to error handler
app.use((req, res, next) => {
    next(createError(404));
});

//Error
app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
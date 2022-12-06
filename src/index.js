const express = require('express');
const route = require('./routes/index.js');
const { create } = require('express-handlebars');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const path = require('path');
const app = express()
const port = 3000

//check connection to database
const checkconnect = require('./config/db.js').checkconnect
checkconnect()

//static file
app.use(express.static(path.join(__dirname, '/public')));

//method override
app.use(methodOverride('_method'));

const handlebars = create({});

//view engine (handlebars templete)
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/resource/views'));

route(app)

app.listen(port, () => {
    console.log(`app listening on ${port} `);
});



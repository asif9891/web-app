const express = require('express');
const expressLayout = require('express-ejs-layouts');
const { route } = require('./routes');
const mongodb = require('./config/mongoose');
const port = 1000;
const app = express();

app.use(express.urlencoded());
app.use(express.static('./asset'));
app.use(expressLayout);
// setting the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));


app.listen(port, function(err){
    if(err)
    {
        console.log(`Error: ${err}`);return;
    }
    console.log(`Yup my server is running on port ${port}`);
});
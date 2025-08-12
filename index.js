const express = require('express')
const { route } = require('./routes');
const port = 3000
const app = express()


app.use(express.urlencoded());
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console,log(`server throw error ${port}`)
        return
    }
    console.log(`server listen on port ${port}`)
})
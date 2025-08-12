const express = require('express')
const port = 3000
const app = express

app.listen(port,function(err){
    if(err){
        console,log(`server throw error ${port}`)
        return
    }
    console.log(`server listen on port ${port}`)
})
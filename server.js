const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 8080;
const l = console.log

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`)
})


app.listen(PORT, (error) => {
    if (error){
        l(error)
    }
    l(`app listening on port: ${PORT}`)
})
const path =  require('path');
const express = require('express');
const app = express();
const publicPath = path.resolve(__dirname, '../build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (request, response) => {
    response.sendFile(path.resolve(publicPath, './index.html'))
});

app.listen(port, () => {
    console.log('the server is up and running');
});

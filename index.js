const express = require('express')
const path = require('path')
const http = require('http')
const app = express();
const server = http.createServer(app);
const port = 3000;

app.use(express.static(path.join(__dirname + 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/forums', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/forums.html'));
});
app.get('/admins', (req, res) => {
    res.sendFile(path.join(__dirname, 'admins.html'));
});
app.get('/servers', (req, res) => {
    res.sendFile(path.join(__dirname, 'servers.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});


server.on('listening',function(){
    console.log(`HTTP Server listening on port ${port}...`);
});

server.listen(port);

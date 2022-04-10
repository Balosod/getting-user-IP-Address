const http =  require('http');
const listener = (req, res) => {
    res.end("IP ADDRESS IS: "+ req.socket.localAddress);
}
const server = http.createServer(listener);
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT} `)
    
})
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server); // < Interesting!

const getApiAndEmit = async socket => {
    try {
        const res = await axios.get(
            "https://api.darksky.net/forecast/962ea68ce7c5c9cc26f3201ddec16e1a/43.7695,11.2558"
        );
        socket.emit("FromAPI", res.data.currently.temperature);
    }   catch (error) {
        console.error('Error: ${error.code}');
    }
};

server.listen(port, () => console.log(`Listening on port ${port}`));
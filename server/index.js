const http = require('http');
const chalk = require('chalk');
const app = require('./app');
const initiateSocketio = require('./socketio');

const port = process.env.PORT || 4000;

const server = http.createServer(app);
initiateSocketio(server);

server.listen(port, () => console.log(chalk.green.inverse('Server connected on port:', port)));

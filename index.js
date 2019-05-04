require('dotenv').config();

const server = require('./server.js')

const PORT = process.env.PORT || 9090;
server.listen(PORT, () => console.log(`\n** beep boop server is up and listening on port ${PORT} **\n`));

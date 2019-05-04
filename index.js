require('dotenv').config();

const server = require('./server.js')

const PORT = process.env.PORT || 9090;
server.listen(PORT, () => console.log(`\n** server up on port ${PORT} **\n`));

const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const clusterAddress = process.env.MONGO_URI;
// const dbUser = process.env.MONGO_USERNAME;
// const dbPassword = process.env.MONGO_PASSWORD;


// const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority`;

// mongoose.connect(process.env.MONGO_URI, {
//     user: process.env.MONGO_USERNAME,
//     pass: process.env.MONGO_PASSWORD,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
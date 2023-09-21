
const clusterAddress = process.env.MONGO_URI;
const dbUser = process.env.MONGO_USERNAME;
const dbPassword = process.env.MONGO_PASSWORD;


const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority`;

// mongoose.connect(process.env.MONGO_URI, {
//     user: process.env.MONGO_USERNAME,
//     pass: process.env.MONGO_PASSWORD,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
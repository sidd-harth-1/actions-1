mongoose.connect($MONGO_URI, {
    user: $MONGO_USERNAME,
    pass: $MONGO_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const MONGODB_URI =`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@tetriscluster.4cdvj0x.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`

module.exports = MONGODB_URI;
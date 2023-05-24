const mongoose = require('mongoose');

const connectDb = () => {
    mongoose.connect(process.env.mongoURI,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then((conn)=> {
        console.log(`Db Connected Successfully ${conn.connection.host}`);
    })
    .catch((err)=> {
        console.log(err);
        process.exit(1)
    }
    )
}

module.exports = connectDb;
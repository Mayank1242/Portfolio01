const mongoose=require("mongoose");

const mongoURI="mongodb+srv://Mayank:mayank@atlascluster.xthj5bm.mongodb.net/";



mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
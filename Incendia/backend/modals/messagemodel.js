const mongoose= require("mongoose");

const messageModel= mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
    content:{
        type:"String",
    },
    attachMedia:{
        type: String,
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Chat",
        required: true,
    }
},  { timestamps: true })

const Message= mongoose.model("Message", messageModel);
module.exports= Message;
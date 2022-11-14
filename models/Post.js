const mongoose = require('mongoose')
const User = require('./User')
const Comment = require('./Comment')

const postSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
        min:6,
        max:100
    },
    description:{
        type:String,
        require:true,
        min:6,
        max:10000
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref: User
    },
    timeStamp:{
        type:Date,
        default:Date.now
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: Comment
    }],
    likes:[{
        type : mongoose.Schema.Types.ObjectId, 
        ref: User 
    }],
    likesCount: {
        type:Number
    }
})

module.exports = mongoose.model('posts', postSchema)
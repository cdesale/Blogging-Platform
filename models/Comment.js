const mongoose = require('mongoose')
const User = require('./User')

const commentSchema = mongoose.Schema({
    commentText:{
        type:String,
        require:true,
        min:6,
        max:256
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref: User
    },
    timeStamp:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('comments', commentSchema)
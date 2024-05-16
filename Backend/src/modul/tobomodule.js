import mongoose from "mongoose";

const todomobule = new mongoose.Schema({

    dotodescription :{
        type : String,
        required : [true,'dotodescription is require']
    },
    complete :{
        type: String,
        enum: ['No','com'],
        default: 'No'
    },
    addDate :{
        type : String,
        required : [true,'Todo  addDate is require']
    }

})

const todo = mongoose.model('Todo',todomobule)

export default todo
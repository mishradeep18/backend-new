import mongoose, {Schema} from "mongoose"

const subsciptionSchema = new Schema({
    subscriber:{
        type: Schema.Types.ObjectId, // one who is subscribig
        ref: "User"
    },
    channel:{
        type: Schema.Types.ObjectId, // one whom subcriber is subcribing
        ref: "User"
    }
},{timestamps})

 
export const Subscription = mongoose.model("Subsciption", subciptionSchema)
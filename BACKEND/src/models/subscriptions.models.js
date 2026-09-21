import mongoose from "mongoose"
const subscriptionSchema = new Mongoose.schema({
    subscriber:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    channel: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
},{
    timestamps: true
})

export const subscription = mongoose.model("Subscription", subscriptionSchema)
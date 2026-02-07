import mongoose from 'mongoose'

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subscription name is required'],
    }
}, {timestamps: true})
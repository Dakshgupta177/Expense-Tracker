import mongoose from "mongoose"

const expenseSummarySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    monthly_limit : Number,
    daily_limit: Number,
    totalSpent: Number

},{timestamps: true})

export const Summary = mongoose.model("summary", expenseSummarySchema);
import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    description: {
        type: String,
    },
    spentOnCategory: {
        type: String,
        default: "Others"
    },
},{timestamps: true})

export const Expense = mongoose.model("expenses", expenseSchema);
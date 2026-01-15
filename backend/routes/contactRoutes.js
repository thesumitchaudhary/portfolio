import express from "express";
import contactModel from "../models/contactModel.js";

const router = express.Router();

router.post("/createMessage", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const userMessage = await contactModel.create({
            name,
            email,
            message,
        });
        res.status(201).json({ message: "Message sent successfully!", userMessage });
    }
    catch (error) {
        console.error("Error creating message:", error);
        res.status(500).json({ message: "Error sending message", error: error.message });
    }
})

export default router;


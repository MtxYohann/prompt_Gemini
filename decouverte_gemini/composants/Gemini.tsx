import "dotenv/config"
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs"
import React from "react";
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function Gemini() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "que fait-on ce soir ?";
    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    return (
        <div>

        </div>

    );
}
export default Gemini;
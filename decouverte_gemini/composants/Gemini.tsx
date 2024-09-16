"use client";

import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs"
import React, { useState } from "react";


const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

console.log(process.env.NEXT_PUBLIC_GOOGLE_API_KEY)

function Gemini() {
    const [result, setResult] = useState('');
    const [prompt, setPrompt] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    const handleNewPrompt = async () => {
        try {
            const response = await model.generateContent(prompt);
            setResult(response.response.text);
            console.log(response)
        } catch (error) {
            console.error("Error generating content:", error);
            setResult("Une erreur est survenue lors de la génération.");
        }
    };
    const styles = {
        btn: {
            textDecoration: 'none',
            padding: '11px',
            fontFamily: 'arial',
            fontSize: '1em',
            color: '#FFFFFF',
            backgroundColor: '#e36c09',
            borderRadius: '34px',
            border: '3px solid #fbd5b5',
            boxShadow: '3px 3px 12px #444444',
        },
        btnHover: {
            padding: '10px',
            backgroundColor: '#ff9900',
            borderRadius: '24px',
            border: '3.5px solid #fdeada',
            boxShadow: '1px 1px 4px #777777',
        },
        input: {
            padding: '6px',
            fontSize: '16px',
            borderWidth: '2px',
            borderColor: '#e36c09',
            backgroundColor: '#ffffff',
            color: '#000000',
            borderStyle: 'solid',
            borderRadius: '5px',
            boxShadow: '7px 5px 5px rgba(0,0,0,.75)',
            textShadow: '0px 0px 2px rgba(20,20,20,.75)',
        }
    };
    return (
        <div>
            <div>
                <h2>Poser votre question:</h2>
                <input
                    style={styles.input}
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Écrivez votre prompt ici"
                />
                <button style={isHovered ? { ...styles.btn, ...styles.btnHover } : styles.btn}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleNewPrompt}>Afficher le résultat</button>
            </div>
            <div>
                <h2>Réponse:</h2>
                <p>{result}</p>
            </div>
        </div>
    );

}
export default Gemini;
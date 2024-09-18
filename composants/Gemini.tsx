"use client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs"
import React, { useState, useEffect } from "react";
import Image from "next/image"

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

function Gemini() {
    const [prompt, setPrompt] = useState("");
    const [history, setHistory] = useState([])
    const [isHovered, setIsHovered] = useState(false);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    useEffect(() => {

    }, [])

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedResult = localStorage.getItem("history");
            const strHistory = JSON.stringify(history)
            if (strHistory !== storedResult) {
                localStorage.setItem("history", strHistory);
            }
        }
    }, [history]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedPrompt = localStorage.getItem("prompt");
            if (prompt !== storedPrompt) {
                localStorage.setItem("prompt", prompt);
            }
        }
    }, [prompt]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("history", JSON.stringify(history));
        }
    }, [history]);


    const handleNewPrompt = async () => {
        try {
            const instruction = "Parle seulement du jeu vidéo Satisfactory 1.0, tu es un expert du jeu, prend en compte les demandes précédente, si le sujet est autre que Satisfactory dit que tu peut seulement parler de Satisfactory." + prompt
            const response = await model.generateContent(instruction);
            const newResult = response.response.text();
            console.log("result : ", newResult)
            const newEntry = { prompt, newResult };
            setHistory((prevHistory) => { return [...prevHistory, newEntry] });
        } catch (error) {
            console.error("Error generating content:", error);
        }
    };
    const styles = {
        btn: {
            margin: '5px',
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
            width: "500px",
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
        },
        ul: {
            listStyleType: 'none',
            padding: '0',
            margin: '0',
            width: '800PX',
            maxHeight: '500px',
            border: '1px solid #ddd',
            borderRadius: '8px',
        },
        li: {
            backgroundColor: '#e36c09',
            borderRadius: '8px',
            marginBottom: '10px',
            padding: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            borderLeft: '5px solid #e36c09',
        },
        prompt: {
            color: '#353535',
            fontWeight: 'bold',
        },
    };

    return (
        <div>
            <div>
                <Image src='/image/Satisfactory.png' width={507} height={99} alt="Satisfactory logo" />
                <h2>Poser votre question:</h2>
                <input
                    style={styles.input}
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Connais tu un mod pour la déco ?"
                />
                <button style={isHovered ? { ...styles.btn, ...styles.btnHover } : styles.btn}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleNewPrompt}>Afficher le résultat</button>
                <h2>Conversation :</h2>
                <ul style={styles.ul}>
                    {history.map((entry, index) => (
                        <li key={index} style={styles.li}>
                            <span style={styles.prompt}>Moi :</span> {entry.prompt} <br />
                            <span style={styles.prompt}><Image src='/image/ficsit.png' width={50} height={60} alt="Fiscit logo" /> :</span> {entry.newResult}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}
export default Gemini;
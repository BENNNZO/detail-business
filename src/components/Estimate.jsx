"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const questions = [
    {
        text: "Would you like an interior, exterior, or both?",
        answers: [
            { text: "Interior", image: "/images/interior.png" },
            { text: "Exterior", image: "/images/exterior.png" },
            { text: "Both", image: "/images/both.png" },
        ],
    },
    {
        text: "Is your vehicle a sedan or SUV?",
        answers: [
            { text: "Sedan", image: "/images/sedan.png" },
            { text: "SUV / Truck", image: "/images/suv.png" },
        ],
    },
    {
        text: "How long has it been since your last cleaning?",
        answers: [
            { text: "1 month or less", image: "/images/clean.png" },
            { text: "1 - 2 months", image: "/images/kinda_clean.png" },
            { text: "3 months or more", image: "/images/spot.png" },
        ],
    },
];

export default function Estimate() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef(null);

    const calculateTotalCost = (updatedAnswers) => {
        let cost = 0;

        switch (updatedAnswers[0]) {
            case "Interior":
                cost += updatedAnswers[1] === "SUV" ? 100 : 50;
                break;
            case "Exterior":
                cost += 50;
                break;
            case "Both":
                cost += updatedAnswers[1] === "SUV" ? 150 : 100;
                break;
            default:
                break;
        }

        switch (updatedAnswers[2]) {
            case "1 month or less":
                // No additional cost
                break;
            case "1 - 2 months":
                cost += 25;
                break;
            case "3 months or more":
                cost += 50;
                break;
            default:
                console.log("No match found in the second switch statement");
                break;
        }

        setTotalCost(cost);
    };

    const handleAnswerClick = (answer) => {
        const updatedAnswers = [...answers, answer.text];
        setAnswers(updatedAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateTotalCost(updatedAnswers); // Calculate the total cost after the last question is answered
            setCurrentQuestion(currentQuestion + 1); // increment past the last question
        }
    };

    useEffect(() => {
        const updateContainerWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.getBoundingClientRect().width);
            }
        };

        updateContainerWidth();
        
        // Recalculate on window resize, too
        window.addEventListener('resize', updateContainerWidth);

        return () => {
            window.removeEventListener('resize', updateContainerWidth);
        };
    }, [currentQuestion]);

    return (
        <div className="grid place-items-center min-h-screen z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-0 md:-translate-x-0 md:-translate-y-0 absolute top-[calc(50%-2rem)] md:static md:top-0">
            <motion.div
                className="backdrop-blur-xl backdrop-brightness-[65%] border border-zinc-800/50 rounded-sm text-white overflow-hidden"
                animate={{ width: containerWidth }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div ref={containerRef} className="px-4 py-6 md:px-12 md:py-8 inline-block">
                    {currentQuestion < questions.length ? (
                        <motion.div
                            key={currentQuestion}
                            initial={{ x: 25, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -25, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <h2 className="text-md w-52 md:w-auto text-center md:text-left md:text-xl font-bold mb-4 whitespace-normal md:whitespace-nowrap">{questions[currentQuestion].text}</h2>
                            <div className="flex flex-col md:flex-row gap-2 items-center">
                                {questions[currentQuestion].answers.map((answer, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleAnswerClick(answer)}
                                        className="cursor-pointer w-36 h-36 md:w-44 md:h-44 flex flex-col justify-around gap-6 items-center border border-zinc-800/25 hover:border-zinc-800 px-4 py-2 rounded-sm backdrop-blur-xl backdrop-brightness-125 hover:backdrop-brightness-150 duration-100"
                                    >
                                        <img src={answer.image} alt={answer.text} className="w-16 h-16 invert my-2" />
                                        <p className="text-center">{answer.text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Final content after questions */}
                            <p className="text-center whitespace-nowrap">Estimated Cost: <span className="font-bold text-green-500">${totalCost}</span></p>
                            <p className="text-center whitespace-nowrap mt-2">Call or text today! <span className="font-bold">(706) 830 - 0401</span></p>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

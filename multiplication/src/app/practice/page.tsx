// pages/practice/index.js
"use client";
import { useState } from "react";
import styles from "../../../styles/timestables.module.scss";

export default function Practice() {
	const [numberChoosen, setNumberChoosen] = useState(0);
	const [numberPicked, setNumberPicked] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(1);
	const [userAnswer, setUserAnswer] = useState("");
	const [score, setScore] = useState(0);

	const handleTableClick = (number: number) => {
		setNumberChoosen(number);
		setNumberPicked(true);
	};

	const randomInt = (min: number, max: number) => {
		return (
			Math.floor(Math.random() * (max - min + 1)) + min
		);
	};

	const handleAnswerSubmit = () => {
		const correctAnswer = numberChoosen * currentQuestion;
		if (parseInt(userAnswer) === correctAnswer) {
			setScore(score + 1);
		}

		setCurrentQuestion(randomInt(1, 12));
		setUserAnswer("");
	};

	return numberPicked ? (
		<main>
			<div className={styles.body}>
				<div className={styles.container}>
					<div className={styles.question}>
						<p>
							{numberChoosen} x {currentQuestion} = ?
						</p>
						<input
							type='number'
							value={userAnswer}
							onChange={(e) =>
								setUserAnswer(e.target.value)
							}
						/>
						<button onClick={handleAnswerSubmit}>
							Submit
						</button>
					</div>
					<p>Score: {score}</p>
				</div>
				<button onClick={() => setNumberPicked(false)}>
					Back
				</button>
				<div className={styles.grass}></div>
			</div>
		</main>
	) : (
		<main>
			<div className={styles.body}>
				<div className={styles.container}>
					<div className={styles.box}>
						{[...Array(12)].map((_, index) => (
							<div
								key={index + 1}
								className={styles.boxOne}
								onClick={() => handleTableClick(index + 1)}
							>
								<div className={styles.textBox}>
									<p>{index + 1}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className={styles.grass}></div>
			</div>
		</main>
	);
}

// pages/practice/index.js
"use client";
import { useState } from "react";
import styles from "../../styles/timestables.module.scss";
import toast, { Toaster } from "react-hot-toast";
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
			toast.success("Well done Grayson!");
		} else {
			toast.error(
				`Almost there, the answer is ${correctAnswer}`
			);
		}

		setCurrentQuestion(randomInt(1, 12));
		setUserAnswer("");
	};

	return numberPicked ? (
		<main>
			<Toaster
				toastOptions={{
					className: "",
					style: {
						border: "1px solid #000000",
						padding: "16px",
						color: "#000000",
					},
				}}
			/>
			<div className={styles.body}>
				<div className={styles.pContainer}>
					<p className={styles.paragraph}>
						Enter the correct answer
					</p>
					<p className={styles.paragraph}>
						You've got this Grayson!
					</p>
				</div>

				<div
					className={`${styles.container} ${styles.questionContainer}`}
				>
					<div className={styles.question}>
						<div className={styles.questionsContainer}>
							<div className={styles.questionButton}>
								<p className={styles.questionTextBox}>
									{numberChoosen}
								</p>
							</div>
							<div>
								<p
									className={`${styles.questionTextBox} ${styles.times}`}
								>
									X
								</p>
							</div>
							<div className={styles.questionButton}>
								<p className={styles.questionTextBox}>
									{currentQuestion}
								</p>
							</div>
							<div>
								<p
									className={`${styles.questionTextBox} ${styles.times}`}
								>
									=
								</p>
							</div>

							<input
								type='number'
								value={userAnswer}
								onChange={(e) =>
									setUserAnswer(e.target.value)
								}
								className={styles.inputBox}
							/>
						</div>
						<div className={styles.buttonContainer}>
							<button
								onClick={handleAnswerSubmit}
								className={styles.submitButton}
							>
								Submit
							</button>
							<button
								className={styles.submitButton}
								onClick={() => setNumberPicked(false)}
							>
								Back
							</button>
						</div>
					</div>
				</div>
				<div className={styles.soccerBallContainer}>
					<div className={styles.soccerBall}></div>
				</div>
				<div className={styles.numberContainer}>
					<div className={styles.number}></div>
					<div className={styles.two}></div>
					<div className={styles.three}></div>
				</div>
			</div>
		</main>
	) : (
		<main>
			<Toaster />
			<div className={styles.body}>
				<div className={styles.pContainer}>
					<p className={styles.paragraph}>
						Choose which timetables you want to practice!
					</p>
				</div>
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
			</div>
		</main>
	);
}

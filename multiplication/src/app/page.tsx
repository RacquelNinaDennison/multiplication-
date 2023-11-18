import Link from "next/link";
import styles from "../../styles/main.module.scss";

export default function Home() {
	return (
		<main>
			<div className={styles.body}>
				<div className={styles.box}>
					<Link href={"/practice"}>
						<div className={styles.boxOne}>
							<div className={styles.textBox}>
								<p>Practice</p>
							</div>
						</div>
					</Link>
					<Link href={"/test"}>
						<div className={styles.boxTwo}>
							<div className={styles.textBox}>
								<p>Test</p>
							</div>
						</div>
					</Link>
				</div>
				<div className={styles.grass}></div>
			</div>
		</main>
	);
}

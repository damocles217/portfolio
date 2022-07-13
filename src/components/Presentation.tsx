import { NextComponentType } from "next";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Home.module.scss";
import CodeImage from "../assets/code.jpg";
// TODO implement the waves
// import Waves from "./Waves";

const Presentation: NextComponentType = () => {
	return (
		<div className={style.presentation}>
			<div className={style.description}>
				<h3>Hi I&apos;m Aksel Vazquez</h3>
				<h2>I&apos;m a Fullstack developer</h2>
				<p>Oriented in backend develop</p>
				<br />
				<a href="./cv.pdf" download={true}>
					Download CV
				</a>
			</div>
			<div className={style.imageDescription}>
				<Image src={CodeImage} alt={"Code example"} />
			</div>
		</div>
	);
};

export default Presentation;

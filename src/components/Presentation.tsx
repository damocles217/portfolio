import { NextComponentType } from "next";
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
				<p>
					Although I have 4 mounths of experience working as freelancer,
					I&apos;ve developed from 12 years old. From this age, I&apos; found
					lot of wonderfull things about the programming, and I have a good
					skills with javascript/typescript, python, go, css, and bash.
					Somethings about me are I know how to work in teams and want to learn
					somethings new alltime.
				</p>
				<br />
				<p></p>
			</div>
			<div className={style.imageDescription}>
				<Image src={CodeImage} alt={"Code example"} />
			</div>
		</div>
	);
};

export default Presentation;

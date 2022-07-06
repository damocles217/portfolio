import { NextComponentType } from "next";
import { Fragment } from "react";
import style from "../styles/Animations.module.scss";

const Waves: NextComponentType = () => {
	return (
		<div className={style.waves}>
			<div className={style.wave}></div>
			<div className={style.wave}></div>
			<div className={style.wave}></div>
		</div>
	);
};

export default Waves;

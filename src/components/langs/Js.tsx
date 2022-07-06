import type { NextComponentType } from "next";
import style from "../../styles/langs/js.module.scss";

const Javascript: NextComponentType = () => {
	return (
		<div className={`${style.javascript} ${style.loader}`}>
			<span>JS</span>
			<div className={style.hoverit}>
				<h3>Javascript</h3>
				<p>I use js in the nav and with nodejs from 15 years old.</p>
			</div>
		</div>
	);
};

export default Javascript;

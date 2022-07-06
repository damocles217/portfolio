import type { NextComponentType } from "next";
import Image from "next/image";
import style from "../../styles/langs/js.module.scss";

import ReactIcon from "../../assets/react.png";

const React: NextComponentType = () => {
	return (
		<div className={`${style.react} ${style.loader}`}>
			<Image src={ReactIcon} alt={"React"} />
			<div className={style.hoverit}>
				<div>
					<h3>React with JS/TS</h3>
					<p>
						I&apos;ve developed several projects (listed after in this page)
						with React. This portfolio uses react.
					</p>
				</div>
			</div>
		</div>
	);
};

export default React;

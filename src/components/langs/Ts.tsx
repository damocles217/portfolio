import type { NextComponentType } from "next";
import style from "../../styles/langs/js.module.scss";

const Typescript: NextComponentType = () => {
	return (
		<div className={`${style.typescript} ${style.loader}`}>
			<span>TS</span>
			<div className={style.hoverit}>
				<div>
					<h3>Typescript</h3>
					<p>
						I program in typescript since 2 years, mostly with react, nestjs,
						and express.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Typescript;

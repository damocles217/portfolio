import type { NextComponentType } from "next";
import style from "../../styles/langs/js.module.scss";

const MySQL: NextComponentType = () => {
	return (
		<div className={`${style.sql} ${style.loader}`}>
			<span>SQL</span>
			<div className={style.hoverit}>
				<div>
					<h3>SQL</h3>
					<p>
						I have knowledge about SQL in junior level.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MySQL;

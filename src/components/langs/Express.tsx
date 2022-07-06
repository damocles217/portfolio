import type { NextComponentType } from "next";
import style from "../../styles/langs/js.module.scss";

const Express: NextComponentType = () => {
	return (
		<div className={`${style.express} ${style.loader}`}>
			<span>Express</span>
			<div className={style.hoverit}>
				<div>
					<h3>Express</h3>
					<p>
						It&apos;s the first web framework who I learned, I can use it for
						graphql, and rest apis.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Express;

import type { NextComponentType } from "next";
import style from "../../styles/langs/js.module.scss";

const Python: NextComponentType = () => {
	return (
		<div className={`${style.python} ${style.loader}`}>
			<span>Python</span>
			<div className={style.hoverit}>
				<div>
					<h3>Python</h3>
					<p>
						I have knowledge about Rest Apis with Django Framework and a few of
						Flask. I actually study data science for, after, learn machine
						learning.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Python;

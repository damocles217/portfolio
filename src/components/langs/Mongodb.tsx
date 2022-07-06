import type { NextComponentType } from "next";
import style from "../../styles/langs/js.module.scss";

const Mongodb: NextComponentType = () => {
	return (
		<div className={`${style.mongo} ${style.loader}`}>
			<span>Mongodb</span>
			<div className={style.hoverit}>
				<div>
					<h3>Mongodb</h3>
					<p>
						In most of my apps, I use Mongodb with ORMs like mongoose, although I can use the mongo driver.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Mongodb;

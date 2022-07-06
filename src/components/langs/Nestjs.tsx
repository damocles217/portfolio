import type { NextComponentType } from "next";
import style from "../../styles/langs/js.module.scss";

const Nestjs: NextComponentType = () => {
	return (
		<div className={`${style.nestjs} ${style.loader}`}>
			<span>Nestjs</span>
			<div className={style.hoverit}>
				<div>
					<h3>Nestjs</h3>
					<p>
						I know how to use nestjs with a lot of configurations, with graphql,
						with mongo, sql, and guards, for example.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Nestjs;

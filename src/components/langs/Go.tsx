import type { NextComponentType } from "next";
import style from "../../styles/langs/js.module.scss";

const Golang: NextComponentType = () => {
	return (
		<div className={`${style.golang} ${style.loader}`}>
			<span>Go</span>
			<div className={style.hoverit}>
				<div>
					<h3>Golang</h3>
					<p>
						I really enjoy developing in go, I use it for rest apis (with GIN and MUX frameworks) and commonly
						with mongodb (for read fastly).
					</p>
				</div>
			</div>
		</div>
	);
};

export default Golang;

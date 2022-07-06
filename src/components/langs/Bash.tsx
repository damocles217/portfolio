
import type { NextComponentType } from "next";
import style from "../../styles/langs/js.module.scss";

const Bash: NextComponentType = () => {
	return (
		<div className={`${style.bash} ${style.loader}`}>
			<span>Bash</span>
			<div className={style.hoverit}>
				<div>
					<h3>Bash</h3>
					<p>
						I know how to automatizate tasks with bash, commonly I use this with git hooks.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Bash;

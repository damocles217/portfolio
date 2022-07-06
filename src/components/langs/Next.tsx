
import type { NextComponentType } from "next";
import style from "../../styles/langs/js.module.scss";

const Next: NextComponentType = () => {
	return (
		<div className={`${style.next} ${style.loader}`}>
			<span>Next</span>
			<div className={style.hoverit}>
				<div>
					<h3>Nextjs</h3>
					<p>
						This is my first shared Nextjs project, I know how to use Next for SSR and also CSR.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Next;

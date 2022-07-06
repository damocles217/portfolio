import type { NextComponentType } from "next";
import style from "../../styles/langs/js.module.scss";

const Graphql: NextComponentType = () => {
	return (
		<div className={`${style.graphql} ${style.loader}`}>
			<span>Gql</span>
			<div className={style.hoverit}>
				<div>
					<h3>Graphql</h3>
					<p>I use commonly apollo for node environments, I don&apos;t know about graphql in python or go, but if it&apos;s necesary, I&apos;ll learn so</p>
				</div>
			</div>
		</div>
	);
};

export default Graphql;

import { NextComponentType } from "next";
import styleHome from "../styles/Home.module.scss";
import style from "../styles/Work.module.scss";

const Work: NextComponentType = () => {
	return (
		<div className={`${styleHome.skills} ${style.work}`} id="work">
			<h3 id={style.title}>Work Experience:</h3>
			<ul className={style.list}>
				<hr />
				<li>
					<h3>
						2 Months in &quot;MYT Medicina y Tecnologia&quot; as fullstack
						developer
					</h3>
					<h4>Technologies: Nestjs, Graphql, and React</h4>
				</li>
				<hr />
				<li>
					<h3>2 Months in &quot;Scientia&quot; as fullstack developer</h3>
					<h4>Technologies: Go and React</h4>
				</li>
				<hr />
			</ul>
		</div>
	);
};

export default Work;

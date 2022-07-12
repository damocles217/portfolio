import { NextComponentType } from "next";
import styleHome from "../styles/Home.module.scss";
import style from "../styles/Work.module.scss";

const Work: NextComponentType = () => {
	return (
		<div className={`${styleHome.skills} ${style.work}`} id="work">
			{/* <h3 id={style.title}>Work Experience:</h3>
			<h4>
				At this moment, I don&apos;t have experience with companies. But
				I&apos;m learning programming since I was twelve
			</h4> */}
		</div>
	);
};

export default Work;

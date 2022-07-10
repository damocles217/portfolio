import type { NextComponentType } from "next";
import style from "../styles/Code.module.scss";
import Image from "next/image";
interface Props {
	value: any;
}
const Repository: NextComponentType<Props> = ({ value }) => {
	return (
		<div className={style.repository}>
			{value.imgUrl && <Image src={value.imgUrl} alt={"Github image"} />}
			<h4>Repository name: {value.reponame}</h4>
			<p>{value.description}</p>
			<a href={value.url}>Code is here</a>
			<p>
				{value.language}-{value.framework}
			</p>
		</div>
	);
};

export default Repository;

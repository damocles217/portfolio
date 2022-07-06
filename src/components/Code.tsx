import { NextComponentType } from "next";
import styleHome from "../styles/Home.module.scss";
import style from "../styles/Code.module.scss";
import { data } from "./data/codeSources";
import { useState, useEffect, Fragment } from "react";
import Image from "next/image";

const Code: NextComponentType = () => {
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	if (loading)
		return (
			<div className={styleHome.presentation} id="code">
				loading...
			</div>
		);

	return (
		<div className={`${styleHome.presentation} ${style.repos}`} id="code">
			<h3>Repositories in which you can see my code:</h3>
			<div className={style.list}>
				{data.map((value, index) => {
					return (
						<div className={style.repository} key={index}>
							{value.imgUrl && (
								<Image src={value.imgUrl} alt={"Github image"} />
							)}
							<h4>Repository name: {value.reponame}</h4>
							<p>{value.description}</p>
							<a href={value.url}>Code is here</a>
							<p>
								{value.language}-{value.framework}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Code;

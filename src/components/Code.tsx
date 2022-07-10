import { NextComponentType } from "next";
import styleHome from "../styles/Home.module.scss";
import style from "../styles/Code.module.scss";
import { data } from "./data/codeSources";
import { useState, useEffect, useRef, useCallback } from "react";
import Repository from "./Repository";

const Code: NextComponentType = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [dataTwo, setData] = useState(data);

	const searchFilterHandler = useCallback(() => {
		const searchFilter = inputRef.current!.value;

		if (searchFilter == "") {
			setData(data);
		} else {
			setData([]);
			data.map((val) => {
				if (
					val.framework.includes(searchFilter) ||
					val.language.includes(searchFilter)
				)
					setData((prev) => [...prev, val]);
			});
		}
	}, []);

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
			<input
				onChange={searchFilterHandler}
				ref={inputRef}
				placeholder={"Search filter"}
				id={style.searching}
			/>
			<div className={style.list}>
				{dataTwo.map((value, index) => {
					return <Repository key={index} value={value} />;
				})}
			</div>
		</div>
	);
};

export default Code;

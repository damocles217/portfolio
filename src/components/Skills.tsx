import { NextComponentType } from "next";
import style from "../styles/Home.module.scss";
import Bash from "./langs/Bash";
import Express from "./langs/Express";
import Golang from "./langs/Go";
import Graphql from "./langs/Graphql";
import Javascript from "./langs/Js";
import Mongodb from "./langs/Mongodb";
// import MySQL from "./langs/MySQL";
import Nestjs from "./langs/Nestjs";
// import Next from "./langs/Next";
// import Python from "./langs/Python";
import React from "./langs/React";
import Typescript from "./langs/Ts";

const Skills: NextComponentType = () => {
	return (
		<div className={`${style.skills} ${style.skillsShow}`} id="skills">
			<h3 id={style.titleSkills}>Skills:</h3>
			<div className={style.grid}>
				<Javascript />
				<Typescript />
				<React />
				<Mongodb />
				<Graphql />
				<Golang />
				<Bash />
				<Nestjs />
				<Express />
			</div>
		</div>
	);
};

export default Skills;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Code from "../components/Code";
import ContactMe from "../components/ContactMe";
import Menu from "../components/Menu";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";
import Work from "../components/Work";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<meta charSet="utf-8" />
				<title>Aksel V. Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.content}>
				<Menu />
				<Presentation />
				<Skills />
				<Code />
				<Work />
				<ContactMe />
			</div>
		</Fragment>
	);
};

export default Home;

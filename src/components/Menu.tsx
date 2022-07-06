import { NextComponentType } from "next";
import Link from "next/link";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import style from "../styles/Menu.module.scss";

const Menu: NextComponentType = () => {
	const menuRef = useRef<HTMLDivElement | null>(null);
	const [lastScroll, setScroll] = useState(0);
	const [scrollHeight, setScrollHeight] = useState<number>(0);
	const [click, setClick] = useState<number>(0);
	const divRef = useRef<HTMLDivElement | null>(null);

	const onScroll = useCallback(() => {
		const scroll = window.scrollY;

		if (scroll >= scrollHeight) {
			lastScroll < scroll &&
				null != menuRef.current &&
				(menuRef.current.style.right = "-100%");

			lastScroll > scroll &&
				menuRef.current &&
				(menuRef.current.style.right = "0");
		}

		setScroll(scroll <= 0 ? 0 : scroll);
	}, [scrollHeight, lastScroll]);

	useEffect(() => {
		setScrollHeight(Math.round(document.documentElement.scrollHeight * 0.1));

		document.addEventListener("scroll", onScroll);

		return () => document.removeEventListener("scroll", onScroll);
	}, [onScroll]);

	const hideMenu = (opt = 1) => {
		if (opt === 1) setClick(1);
		if (click === 0) {
			setClick(1);
			divRef.current!.style.display = "flex";
			divRef.current!.style.position = "fixed";
		} else {
			setClick(0);
			divRef.current!.style.display = "none";
		}
	};

	return (
		<Fragment>
			<div className={style.menu} ref={menuRef}>
				<span
					className={`icon-menu ${style.blockMenu}`}
					onClick={() => hideMenu(0)}
				></span>
				<div className={style.dropMenu} ref={divRef}>
					<Link href="/" scroll={true}>
						<span onClick={() => hideMenu(1)}>Presentation</span>
					</Link>
					<Link href="#skills" className={style.animwriter}>
						<span onClick={() => hideMenu(1)}>Skills</span>
					</Link>
					<Link href="#code">
						<span onClick={() => hideMenu(1)}>Show my code</span>
					</Link>
					<Link href="#work">
						<span onClick={() => hideMenu(1)}>Works</span>
					</Link>
					<Link href="#contactme" scroll={true}>
						<span onClick={() => hideMenu(1)}>Contact me</span>
					</Link>
				</div>
			</div>
			<div id={style.fill}></div>
		</Fragment>
	);
};

export default Menu;

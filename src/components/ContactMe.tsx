import { NextComponentType } from "next";
import PhoneInput from "react-phone-number-input";
import styleHome from "../styles/Home.module.scss";
import style from "../styles/Contact.module.scss";
import useContactForm from "../hooks/useContactForm";

const ContactMe: NextComponentType = () => {
	const [click, setClick, form, handleForm, phone, setPhone, sendData] =
		useContactForm();

	return (
		<div
			className={`${styleHome.presentation} ${style.contact}`}
			id="contactme"
		>
			<h3 id={style.contactme}>Contact me:</h3>
			<div className={style.icons}>
				<a href="https://github.com/damocles217">
					<span className="icon-github"></span>
				</a>
				<span
					className="icon-mail_outline"
					onClick={() => (click === 0 ? setClick(1) : setClick(0))}
				></span>
			</div>
			{click === 1 && (
				<form onSubmit={sendData}>
					<h3>Contact form:</h3>
					<input
						name="email"
						placeholder="Email"
						onChange={handleForm}
						value={form.email}
					/>
					<input
						name="name"
						placeholder="Name"
						onChange={handleForm}
						value={form.name}
					/>
					<PhoneInput
						onChange={(e) => {
							setPhone(e);
							console.log(phone);
						}}
						defaultCountry={"US"}
						value={phone}
						placeholder="Your phone number here"
					/>
					<button type="submit">Submit</button>
				</form>
			)}
		</div>
	);
};

export default ContactMe;

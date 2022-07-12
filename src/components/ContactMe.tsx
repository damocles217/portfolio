import { NextComponentType } from "next";
import PhoneInput from "react-phone-number-input";
import styleHome from "../styles/Home.module.scss";
import style from "../styles/Contact.module.scss";
import useContactForm from "../hooks/useContactForm";

const ContactMe: NextComponentType = () => {
	const [form, handleForm, phone, setPhone, sendData] = useContactForm();

	return (
		<div
			className={`${styleHome.presentation} ${style.contact}`}
			id="contactme"
		>
			<h3 id={style.contactme}>Contact me:</h3>
			<form onSubmit={sendData}>
				<h3>Contact form:</h3>
				<input
					name="email"
					type="email"
					required={true}
					placeholder="Email"
					onChange={handleForm}
					value={form.email}
				/>
				<input
					name="name"
					placeholder="Name"
					required={true}
					type="text"
					onChange={handleForm}
					value={form.name}
				/>
				<PhoneInput
					onChange={(e) => {
						setPhone(e);
					}}
					defaultCountry={"US"}
					value={phone}
					placeholder="Your phone number here"
				/>
				<button type="submit">Submit</button>
			</form>
			<div className={style.icons}>
				<p>My github:</p>
				<a href="https://github.com/damocles217">
					<span className="icon-github"></span>
				</a>
			</div>
		</div>
	);
};

export default ContactMe;

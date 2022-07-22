import { NextComponentType } from "next";
// import PhoneInput from "react-phone-number-input";
import styleHome from "../styles/Home.module.scss";
import style from "../styles/Contact.module.scss";
import useContactForm from "../hooks/useContactForm";

const ContactMe: NextComponentType = () => {
	const [form, handleForm, phone, setPhone, sendData] = useContactForm();

	return (
		<div
			className={`${styleHome.presentation} ${style.contactstruct}`}
			id="contactme"
		>
			<h3 id={style.contactme}>Contact me:</h3>
			<div className={style.contact}>
				<div className={style.iconsContainer}>
					<section></section>
					<section className={style.icons}>
						<span className="icon-mail_outline"></span>
						<p>axelstart101@gmail.com</p>
					</section>

					<section className={style.icons}>
						<p>My github:</p>
						<a href="https://github.com/damocles217">
							<span className="icon-github"></span>
						</a>
					</section>
				</div>
				{/* <div className={style.fill}> */}
				{/* <form onSubmit={sendData}>
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
				</div> */}
			</div>
		</div>
	);
};

export default ContactMe;

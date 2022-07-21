import {
	ChangeEvent,
	Dispatch,
	FormEvent,
	SetStateAction,
	useState,
} from "react";

interface Form {
	name: string;
	email: string;
	phone: any;
}

type hookContactForm = [
	Form,
	(e: ChangeEvent<HTMLInputElement>) => void,
	any,
	Dispatch<SetStateAction<any>>,
	(e: FormEvent) => Promise<boolean>
];

const useContactForm = (): hookContactForm => {
	const [phone, setPhone] = useState();
	const [form, setForm] = useState<Form>({
		name: "",
		email: "",
		phone: "",
	});

	const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target!.name]: e.target!.value });
	};

	const sendData = async (e: FormEvent) => {
		e.preventDefault();
		setForm({ ...form });

		const url =
			process.env.URL_BACKEND ||
			"https://portfolio-backend-aksel.herokuapp.com/mail";

		const data = await fetch(url, {
			method: "POST",
			mode: "cors",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin":
					"https://portfolio-aksel-vazquez.herokuapp.com/",
			},
			body: JSON.stringify({ ...form, phone }),
		});

		const parsedData = await data.json();

		return parsedData;
	};

	return [form, handleForm, phone, setPhone, sendData];
};

export default useContactForm;

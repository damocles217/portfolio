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
	number,
	Dispatch<SetStateAction<number>>,
	Form,
	(e: ChangeEvent<HTMLInputElement>) => void,
	any,
	Dispatch<SetStateAction<any>>,
	(e: FormEvent) => Promise<boolean>
];

const useContactForm = (): hookContactForm => {
	const [click, setClick] = useState<number>(0);
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

		const url = process.env.URL_BACKEND || "http://192.168.1.67:8000/mail";

		const data = await fetch(url, {
			method: "POST",
			body: JSON.stringify({ ...form, phone: phone }),
		});

		const parsedData = await data.json();

		return parsedData;
	};

	return [click, setClick, form, handleForm, phone, setPhone, sendData];
};

export default useContactForm;

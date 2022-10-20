import axios from "axios";
import { IAddEmployee, IEmployees } from "../Models/IEmployyes";

const ENDPOINT = "/api/Employees";

export const getAllEmployees = async () => {
	const { data } = await axios.get<IEmployees[]>(ENDPOINT);
	return data;
};

export const addEmployee = async (body: IAddEmployee) => {
	const { data } = await axios.post<IAddEmployee>(ENDPOINT, body);
	return data;
};

export const getEmployees = async (id: string) => {
	const { data } = await axios.get<IEmployees>(`${ENDPOINT}/GetOne`, {
		params: { id },
	});
	return data;
};

export const updateEmployees = async ({
	id,
	name,
	email,
	dateOfBirth,
	department,
}: IEmployees) => {
	const { data } = await axios.put(
		`${ENDPOINT}/Update`,
		{
			name,
			email,
			dateOfBirth,
			department,
		},
		{ params: { id } }
	);
	return data;
};

export const deleteEmployees = async (id: string) => {
	const { data } = await axios.delete(`${ENDPOINT}/Delete`, {
		params: { id },
	});
	return data;
};

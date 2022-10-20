export interface IEmployees {
	id: string;
	name: string;
	email: string;
	dateOfBirth: Date;
	department: string;
}

export interface IAddEmployee {
	name: string;
	email: string;
	dateOfBirth: Date;
	department: string;
}

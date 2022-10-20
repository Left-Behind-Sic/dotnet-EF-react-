import {
	Button,
	CircularProgress,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGetAllEmployeesApi from "../../Hooks/useGetEmployeeApi";
import { IEmployees } from "../../Models/IEmployyes";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import useDeleteEmployeeByIdApi from "../../Hooks/useDeleteEmployeeByIdApi";

export default function Employees() {
	const { data } = useGetAllEmployeesApi();
	const navigate = useNavigate();

	const [employee, setEmployee] = useState<IEmployees[]>([]);

	const { deleteEmployee, isLoading } = useDeleteEmployeeByIdApi();

	const deleteClick = (id: string) => {
		deleteEmployee(id);
	};

	useEffect(() => {
		if (data) setEmployee(data);
	}, [data]);

	return employee.length !== 0 ? (
		<>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Id</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>DateOfBirth</TableCell>
							<TableCell>Department</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>
						{employee.map((item) => (
							<TableRow key={item.id}>
								<TableCell>{item.id}</TableCell>
								<TableCell>{item.name}</TableCell>
								<TableCell>{item.email}</TableCell>
								<TableCell>
									{new Date(item.dateOfBirth).toLocaleDateString()}
								</TableCell>
								<TableCell>{item.department}</TableCell>
								<TableCell padding="none">
									<Link
										to={`view/${item.id}`}
										style={{ color: "inherit", textDecoration: "none" }}
									>
										<IconButton>
											<EditIcon />
										</IconButton>
									</Link>
									<IconButton onClick={() => deleteClick(item.id)}>
										<DeleteForeverIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Link to={`/add`} style={{ color: "inherit", textDecoration: "none" }}>
				<IconButton aria-label="add" size="large">
					<AddIcon fontSize="inherit" />
				</IconButton>
			</Link>
		</>
	) : (
		<>no</>
	);
}

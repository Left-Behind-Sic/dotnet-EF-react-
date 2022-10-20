import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import NavBar from "./Components/NavBar/NavBar";
import EmployeesPage from "./Pages/EmployeesPage";
import { Route, Routes } from "react-router-dom";
import EditEmployee from "./Components/Employees/EditEmployee";
import AddEmployee from "./Components/Employees/AddEmployee";

function App() {
	return (
		<Container>
			<NavBar />
			<Routes>
				<Route path="/" element={<EmployeesPage />} />
				<Route path="view/:id" element={<EditEmployee />} />
				<Route path="/add" element={<AddEmployee />} />
			</Routes>
		</Container>
	);
}

export default App;

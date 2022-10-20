import { TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Unstable_Grid2";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ru } from "date-fns/locale";
import { Controller, useForm } from "react-hook-form";
import useAddEmployeeApi from "../../Hooks/useAddEmployeeApi";

export default function AddEmployee() {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({ mode: "onBlur" });

	const { newEmployee, isLoading, successAdd } = useAddEmployeeApi();

	return (
		<Grid xs={12} sx={{ paddingTop: 2 }}>
			<form
				onSubmit={handleSubmit((data) => {
					newEmployee({
						name: data.Name,
						email: data.Email,
						dateOfBirth: new Date(data.dateOfBirth),
						department: data.department,
					});
					console.log(data);
					// alert(JSON.stringify(data));
				})}
			>
				<FormControl fullWidth sx={{ gap: 2 }}>
					<Controller
						render={({ field }) => (
							<TextField
								{...field}
								label="Name"
								error={errors.Name ? true : false}
								fullWidth
								type="text"
							/>
						)}
						name="Name"
						rules={{ required: true }}
						control={control}
						defaultValue=""
					/>
					<Controller
						render={({ field }) => (
							<TextField
								{...field}
								label="Email"
								error={errors.Email ? true : false}
								fullWidth
								type="text"
							/>
						)}
						name="Email"
						rules={{ required: true }}
						control={control}
						defaultValue=""
					/>
					<Controller
						render={({ field }) => (
							<LocalizationProvider
								dateAdapter={AdapterDateFns}
								adapterLocale={ru}
							>
								<DesktopDatePicker
									{...field}
									label="Date of birth"
									inputFormat="dd.MM.yyyy"
									mask="__.__.____"
									renderInput={(params) => (
										<TextField
											{...params}
											fullWidth
											error={errors.dateOfBirth ? true : false}
											label="Date of birth"
											type="date"
										/>
									)}
								/>
							</LocalizationProvider>
						)}
						name="dateOfBirth"
						rules={{ required: true }}
						control={control}
						defaultValue={new Date().toISOString().substring(0, 10)}
					/>
					<Controller
						render={({ field }) => (
							<TextField
								{...field}
								error={errors.department ? true : false}
								fullWidth
								label="Department"
								type="text"
							/>
						)}
						name="department"
						rules={{ required: true }}
						control={control}
						defaultValue=""
					/>
					<TextField
						type="submit"
						fullWidth
						value="ok"
						disabled={isLoading}
						sx={{
							...(successAdd && {
								bgcolor: green[100],
								"&:hover": {
									bgcolor: green[200],
								},
							}),
						}}
					/>
					{isLoading && (
						<CircularProgress
							size={30}
							sx={{ position: "absolute", left: "50%", marginLeft: "-15px" }}
						/>
					)}
				</FormControl>
			</form>
		</Grid>
	);
}

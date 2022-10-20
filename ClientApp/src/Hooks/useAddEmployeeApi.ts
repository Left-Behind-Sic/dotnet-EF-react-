import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEmployee, updateEmployees } from "../Api/employeesApi";

export default function useGetEmployeeByIdApi() {
	const queryClient = useQueryClient();

	const {
		mutate: newEmployee,
		isLoading,
		isSuccess: successAdd,
	} = useMutation(addEmployee, {
		onSuccess() {
			// queryClient.invalidateQueries(["employee"]);
			queryClient.invalidateQueries(["AllEmployees"]);
		},
	});
	return { newEmployee, isLoading, successAdd };
}

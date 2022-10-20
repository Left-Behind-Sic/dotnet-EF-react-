import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEmployees } from "../Api/employeesApi";

export default function useUpdateEmployeeApi() {
	const queryClient = useQueryClient();

	const {
		mutate: saveEmployee,
		isLoading,
		isSuccess: successUpdate,
	} = useMutation(updateEmployees, {
		onSuccess() {
			queryClient.invalidateQueries(["employee"]);
			queryClient.invalidateQueries(["AllEmployees"]);
		},
	});
	return { saveEmployee, isLoading, successUpdate };
}

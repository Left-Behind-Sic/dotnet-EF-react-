import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEmployees, updateEmployees } from "../Api/employeesApi";

export default function useDeleteEmployeeByIdApi() {
	const queryClient = useQueryClient();

	const {
		mutate: deleteEmployee,
		isLoading,
		isSuccess: successDelete,
	} = useMutation(deleteEmployees, {
		onSuccess() {
			queryClient.invalidateQueries(["AllEmployees"]);
		},
	});
	return { deleteEmployee, isLoading, successDelete };
}

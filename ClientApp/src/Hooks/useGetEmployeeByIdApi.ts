import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../Api/employeesApi";

export default function useGetEmployeeByIdApi(id: string) {
	const { data, isLoading, isSuccess, error } = useQuery(
		["employee", id],
		async () => {
			const result = await getEmployees(id);
			return result;
		},
		{
			staleTime: 30000,
		}
	);
	return { data, isLoading, isSuccess, error };
}

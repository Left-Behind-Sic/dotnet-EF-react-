import { useQuery } from "@tanstack/react-query";
import { getAllEmployees } from "../Api/employeesApi";

export default function useGetAllEmployeeApi() {
	const { data, isLoading, error } = useQuery(
		["AllEmployees"],
		async () => {
			const result = await getAllEmployees();
			return result;
		},
		{
			staleTime: 30000,
		}
	);
	return { data, isLoading, error };
}

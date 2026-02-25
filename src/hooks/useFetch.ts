import {useQuery} from "@tanstack/react-query";

// Custom hook to fetch data from the API
const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };
  // Custom hook to use the fetch function with React Query
export function useFetch() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => fetchData('http://localhost:4000/tasks'),
    });

  return { data, error, isLoading };
}

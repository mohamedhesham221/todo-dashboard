import {useQuery} from "@tanstack/react-query";

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
export function useFetch() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => fetchData('http://localhost:3000/tasks'),
    });

  return { data, error, isLoading };
}

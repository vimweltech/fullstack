import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../services/apiProducts"

export const useProducts = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    })

    return { data, isLoading, isError }
}
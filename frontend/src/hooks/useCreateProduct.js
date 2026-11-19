import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createProduct as createProductApi } from "@/services/apiProducts";
import { toast } from "sonner";
export function useCreateProduct (){
    const queryClient= useQueryClient()
    const {mutate:createProduct,isPending,isError}=useMutation({
      mutationKey:["products","create"],
      mutationFn:({newProduct})=>createProductApi(newProduct),
      onSuccess:()=>{
        queryClient.invalidateQueries({
            queryKey:["products"],

        })
        toast.success ("product created succesfully")
      },
      onError:(error)=>{
        console.error(error)
      }
    })
    return{createProduct,isPending,isError}
}
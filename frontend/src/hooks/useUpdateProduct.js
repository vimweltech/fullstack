import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct as updateProductApi } from "@/services/apiProducts";
import { toast } from "sonner";
export function useUpdateProduct (){
    const queryClient= useQueryClient()
    const {mutate:updateProduct,isPending,isError}=useMutation({
      mutationKey:["products","delete"],
      mutationFn:({productId,product})=>updateProductApi(productId,product),
      onSuccess:()=>{
        queryClient.invalidateQueries({
            queryKey:["products"],

        })
        toast.success ("product updated succesfully")
      },
      onError:(error)=>{
        console.error(error)
      }
    })
    return{updateProduct,isPending,isError}
}
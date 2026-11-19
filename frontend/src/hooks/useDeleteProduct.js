import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductApi } from "@/services/apiProducts";
import { toast } from "sonner";
export function useDeleteProduct (){
    const queryClient= useQueryClient()
    const {mutate:deleteProduct,isPending,isError}=useMutation({
      mutationKey:["products","delete"],
      mutationFn:({productId})=>deleteProductApi(productId),
      onSuccess:()=>{
        queryClient.invalidateQueries({
            queryKey:["products"],

        })
        toast.success ("product deleted succesfully")
      },
      onError:(error)=>{
        console.error(error)
      }
    })
    return{deleteProduct,isPending,isError}
}
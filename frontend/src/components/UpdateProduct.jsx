import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateProduct } from "@/hooks/useUpdateProduct";

import { Edit } from "lucide-react";
import { useState } from "react";


export function UpdateProduct({ currentProduct }) {
  const [product, setProduct] = useState({
    name: currentProduct.name,
    price: currentProduct.price,
    quantity: currentProduct.quantity,
  });
 const [open,setOpen]=useState(false)
 const {updateProduct,isPending}= useUpdateProduct()

   function handleUpdateProduct(e) {
    e.preventDefault();
   const { name, price, quantity } = product;
      if (!name || !price || !quantity) return;
      const updatedProduct = {
        name,
        price: Number(price),
        quantity: Number(quantity),
      };
      // console.log(newProduct);
        updateProduct({productId:currentProduct._id,product:updatedProduct});
      
     
      setOpen(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="icon">
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Update {product.name}</DialogTitle>
        </DialogHeader>
        <form id="update-product" onSubmit={handleUpdateProduct}>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={product.name}
                onChange={(e) =>
                  setProduct((p) => ({
                    ...p,
                    name: e.target.value,
                  }))
                }
                name="name"
                type={"text"}
                placeholder="e.g: laptop"
              />
            </Field>
            <Field>
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                value={product.price}
                onChange={(e) =>
                  setProduct((p) => ({
                    ...p,
                    price: e.target.value,
                  }))
                }
                name="price"
                placeholder="10000"
              />
            </Field>
            <Field>
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                value={product.quantity}
                onChange={(e) =>
                  setProduct((p) => ({
                    ...p,
                    quantity: e.target.value,
                  }))
                }
                name="quantity"
                placeholder="12"
              />
            </Field>
          </FieldGroup>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" disabled={isPending} form="update-product">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

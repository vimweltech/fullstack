import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateProduct } from "@/hooks/useCreateProduct";

import { useState } from "react";


export function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  
  const [open, setOpen] = useState(false);
const {createProduct,isPending,isError}= useCreateProduct()
   function handleCreateProduct(e) {
    
    e.preventDefault();
     const { name, price, quantity } = product;
      if (!name || !price || !quantity) return;
      const newProduct = {
        name,
        price: Number(price),
        quantity: Number(quantity),
      };
      createProduct({newProduct})
      setOpen(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Create Product</DialogTitle>
          <DialogDescription>Create your Products here.</DialogDescription>
        </DialogHeader>
        <form id="create-product" onSubmit={handleCreateProduct}>
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
          <Button type="submit" disabled={isPending} form="create-product">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
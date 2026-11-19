import { Product } from "../models/product.model.js"

export async function createProduct( req,res){
   const{name,price,quantity}=req.body
   console.log (name,price,quantity)
    try {
        const product=await Product.create({name,price,quantity})
        res.status(200).json({
            success:true,
            message:"product created successfully",
            product
            
        })



    } catch (error) {
        res.status(400).json({
           success:false,
           message :error.message||"failed to create product"
        })
    }

}

export const getProducts=async(req,res)=>{
    try {
    const products=await Product.find({})
    res.status(200).json({
        success:true,
        message:"products fetched successfully",
        products
    })
}catch (error){
    res.status(400).json({
        success:false,
        message:error.message||"failed to fetch products"
    })
}   
       
}
export const getProduct =async (req,res)=>{
    const {id}=req.params
    try {
        const product = await Product.findById(id)
        if(!product){
             res.status(404).json({
                success:false,
                message:"product not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"product fetched successfully",
            product
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message||"failed to fetch product"
        })
    }
}
export const updateProduct =async (req,res)=>{
    const {id}=req.params
    const {name,price,quantity}=req.body
    try{
        const product = await Product.findByIdAndUpdate(id,{name,price,quantity})
        if(!product){
            res.status(404).json({
                success:false,
                message:"product not found"
            })
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json({
            success:true,
            message:"product updated successfully",
            

        })
    }
        catch (error) {
            res.status(400).json({
                success:false,
                message:error.message || "failed to update product"
            })
        }
        
    
        
}
            
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({
        success: false,
        message: "product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "product deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to delete product",
    });
  }
};
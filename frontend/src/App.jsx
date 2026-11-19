import { ProductForm } from "./components/ProductForm";
import { ProductsTable } from "./components/ProductsTable";
import { useProducts } from "./hooks/useProducts"


function App() {
  const { data } = useProducts()
  console.log(data);

  return (
    <div className="w-full h-screen bg-gray-300">
      <ProductForm/>
      <ProductsTable/>

      
    </div>
  )
}

export default App
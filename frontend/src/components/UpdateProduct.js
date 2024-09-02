
import React ,{useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";

function UpdateProduct() {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const params=useParams();
  const navigate=useNavigate();

  useEffect(()=>{
    console.warn(params)
    getProductDetails();
  },[])
  const getProductDetails=async()=>{
    let result=await fetch(`http://localhost:5000/product/${params.id}`);
    result=await result.json();
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
  }

  const UpdateProduct = async () => {
    console.warn(name, price, category, company);
    let result=fetch(`http://localhost:5000/product/${params.id}`,{
        method:"put",
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':"application/json"
        }
    });
    result=(await result).json()
    console.warn(result)
    navigate('/products')
  };
  return (
    <div className="product">
      <h1>UpdateProduct</h1>
      <input
        type="text"
        placeholder="Enter product Name"
        className="InputBox"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        type="number"
        placeholder="Enter product Price"
        className="InputBox"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />

      <input
        type="text"
        placeholder="Enter product Category"
        className="InputBox"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />

      <input
        type="text"
        placeholder="Enter product Company "
        className="InputBox"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      />

      <button onClick={UpdateProduct} className="appButton">
        Update Product
      </button>
    </div>
  );
}

export default UpdateProduct;

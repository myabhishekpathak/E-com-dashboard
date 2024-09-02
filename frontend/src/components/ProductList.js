import React, { useState, useEffect } from "react";
import {Link}from "react-router-dom";
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products",{
      headers:{
        authorization:JSON.parse(localStorage.getItem('token'))
      }
    });
    result = await result.json();
    setProducts(result);
  };
const deleteProduct=async(id)=>{
let result=await fetch(`http://localhost:5000/product/${id}`,{
      method:"Delete"
});
result=await result.json()
if(result){
  alert("record is deleted")
  getProducts();
}
} ;
const searchHandle = async(event)=>{
  let key=event.target.value;
  if(key){
    let result=await fetch(`http://localhost:5000/search/${key}`);
  result=await result.json();
  if(result){
    setProducts(result)
  }

  }
  else{
    getProducts()

  }
  

}

  return (
    <div className="product-list">
      <h1>Product LIst</h1>
      <input  className="search-product-box" type="text" placeholder="Search Product"
      onChange={searchHandle}/>
      <ul>
        <li>S.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {
        products.length>0 ? products.map((item,index)=>
        <ul key={item._id}> 
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>${item.price}</li>
        <li>{item.category}</li>
        <li><button onClick={()=>deleteProduct(item._id)}>delete</button>
      <Link to={"/update/"+item._id}>Update</Link>
      </li>
      </ul>
        )
        : <h1>No Result Found</h1>
      } 
    </div>
  );
}

export default ProductList;

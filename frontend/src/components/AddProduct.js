import React from "react";

const AddProduct = () => {
    const[name,setName]=React.useState('');
    const[price,setPrice]=React.useState('');
    const[category,setCategorry]=React.useState('');
    const[company,setCompany]=React.useState('');
    const[error,setError]=React.useState(false);



    const addProduct=async()=>{
      console.warn(!name)
      if(!name||!price||!category||!company){
        setError(true)
        return false;
      }

      console.warn(name,price,category,company);
      const userId=await JSON.parse(localStorage.getItem('user'))._id;
      // console.warn(userId._id)
    let result=fetch('http://localhost:5000/add-product',{
        method:'post',
        body:JSON.stringify({name,price,category,company,userId}),
        headers:{
          "Content-Type": "application/json"
        }
      });
      result=await result.json();
      alert(`Record inserted successfully/${result}`)
      console.warn(result)   
    }
  return (
    <div className="product">
      <h1>AddProduct</h1>
      <input
        type="text"
        placeholder="Enter product Name"
        className="InputBox"
        onChange={(e)=>{setName(e.target.value)}}
        value={name}
      />{error && !name &&<span className="invalid-input">**Enter Valid Name**</span>}
      <input
        type="number"
        placeholder="Enter product Price"
        className="InputBox"
        onChange={(e)=>{setPrice(e.target.value)}}
        value={price}
      />{error && !price &&<span className="invalid-input">**Enter Valid Price**</span>}
      
      <input
        type="text"
        placeholder="Enter product Category"
        className="InputBox"
        onChange={(e)=>{setCategorry(e.target.value)}}
        value={category}
      />{error && !category &&<span className="invalid-input">**Enter Valid Category**</span>}
      
      <input
        type="text"
        placeholder="Enter product Company "
        className="InputBox"
        onChange={(e)=>{setCompany(e.target.value)}}
        value={company}
      />{error && !company &&<span className="invalid-input">**Enter Valid Company**</span>}
      
      <button onClick={addProduct} className="appButton">Add Product</button>
    </div>
  );
};

export default AddProduct;

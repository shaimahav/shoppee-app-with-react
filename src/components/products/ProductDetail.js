import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import { useContext } from "react";
function ProductDetail() {
    const params=useParams();
     const navigate=useNavigate()
     const {storeCartItems}=useContext(CartContext)
  
    // console.log(JSON.stringify(params))
    const prodId=params.productId;
    console.log(prodId)
    const [product,setProduct]=useState([]);
    function loadProductsById(){
       fetch("https://fakestoreapi.com/products/"+prodId).then((response)=>{
                response.json().then((data)=>{
                    setProduct(data);
                }).catch((error)=>{
                     console.log(error);                })
       }).catch((error)=>{
        console.log(error)
       })
    }
    useEffect(()=>{
        loadProductsById();
    },[prodId]);
     function onAddToCartClick()
    {
        storeCartItems(product)
        navigate('/cartpage')
    }
   
      function onBackToClick()
    {
                navigate(-1);
    }
    return ( 
        
        <div className="container mt-4 shadow rounded">
           <div className="row">
            <div className="col-md-5 pt-4">
                <img className="" src={product.image} height={600} width={500} style={{objectFit:"contain"}}></img>
            </div>
            <div className="col-md-4 pt-4">
                <h2>{product.title}</h2>
                <p className="text-secondary fs-4">Category:{product.category}</p>
                 <p>{product.description}</p>
                <p className="btn btn-success">⭐⭐⭐⭐⭐{product?.rating?.rate}</p> 
                {/* <p >{product.rating.count} Ratings</p> */}
                <p>AED<span className="fs-1">{product.price}</span></p>
                    <button className="btn btn-warning ps-5 pe-5 rounded-pill" onClick={ onAddToCartClick}>Add To Cart</button>
                <button className="btn btn-primary text-white  ms-1 ps-5 pe-5 rounded-pill" onClick={onBackToClick}>Back</button>
            </div>
        
           </div>
    
            </div>
      
     );
}

export default ProductDetail;
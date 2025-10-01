import { useContext, useState } from "react";
import FilterContext from "../../contexts/FilterContext";
import CartContext from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function ProductCard() {
  const { filteredProducts } = useContext(FilterContext);
  console.log("Products in productcard", filteredProducts);
 
  return (
    <div className="row ms-1 mt-4 ">
      {filteredProducts.map((p) => {
        return (
          <>
     
          <div className="col-md-3 card  border-0 shadow rounded  mb-4">
              <img
                src={p.image}
                className="card-img-top"
                height={200}
                alt="..."
                style={{ objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text btn btn-success">{p.rating.rate} ⭐⭐⭐⭐⭐</p>
                <span className="card-text text-secondary fs-5">{p.rating.count} </span>
                <p className="card-text ">AED<span className="bold">{p.price}</span></p>
                <Link to={"/productdetail/"+p.id} className="btn btn-primary ps-5 pe-5 rounded-pill mb-2">View Details</Link>
             
              </div>
            </div>
          
          </>
        );
      })}
    </div>
  );
}

export default ProductCard;

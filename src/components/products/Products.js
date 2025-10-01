import { useState } from "react";
import { useEffect } from "react";
import FilterContext from "../../contexts/FilterContext";
import ProductCard from "./ProductCard";
function Products() {
    const [searchText,setSearchText]=useState('');
    const [productlist,setProductList]=useState([]);
    
    function onSearchTextChanging($e)
    {
        console.log("searchText")   
        setSearchText($e.target.value);
    }
    
     function loadProductsOnSearchTextChanging()
     {
        console.log("loadProducts");
        fetch('https://fakestoreapi.com/products').then((response)=>{
            response.json().then((data)=>{
                setProductList(data);
            })
        })
     }
      useEffect(()=>{
        
        loadProductsOnSearchTextChanging();
       
     },[searchText]);
     const filteredproducts=productlist.filter((p=>{
        return p.title.toLowerCase().includes(searchText.toLowerCase());
     }))
  return (
    <>  
    <FilterContext.Provider value={{
           filteredProducts:filteredproducts,
     }}>
    <div className="container">
      
        <form className="d-flex mt-2" role="search">
          <input
            className="form-control "
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={onSearchTextChanging}
          />
          {/* <button className="btn btn-outline-success " type="submit">
            Search
          </button> */}
        </form>
      
      <div className="row"><ProductCard/></div>
    </div>
    </FilterContext.Provider>
    </>
  );
}

export default Products;

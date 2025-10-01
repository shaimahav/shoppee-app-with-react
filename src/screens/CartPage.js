import { useContext } from "react"
import CartContext from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CartPage() {
    const {cartItem}=useContext(CartContext)
    const navigate=useNavigate();

    function backToProductsPage()
    {
        navigate('/products')
    }
    console.log(cartItem)
    

    return ( 
        <div  className="ps-4"><span className="fs-3 text-primary ">Shopping Cart</span>
           {
            cartItem.map((c)=>{
           
                return(
                    <>
                    <div className="row shadow pb-2 m-2">
                    <div className="col-md-3">
                        <img className="" src={c.image} height={150}></img>
                        
                        </div>
                     <div className="col-md-6">
                        <p className="ps-2 fs-4"> {c.title}</p>
                        <Link className="btn btn-sm btn-success p-0 ">{c.rating.rate}⭐</Link>
                        {c.rating.count}Ratings    
                     </div>
                      <div className="col-md-3">
                        <p className="fs-4">AED<span className="fs-3 text-warning">{c.price}</span></p>
                      </div>
                    </div>
                   
                    </>

                )
            })
           }
     
            <button className="btn btn-warning rounded-pill m-4">Proceed To buy </button>
            <button className="btn btn-primary rounded-pill" onClick={backToProductsPage}>Back To Products </button>
        
        </div>
     );
}

export default CartPage;
import OfferProducts from './OfferProducts';
function ProductList(props) {
  const others=props.others;
  const prods=props.products;
return ( 
        <div>
               <OfferProducts productLists={prods} others={others}></OfferProducts>
        </div>  
     );
}

export default ProductList;
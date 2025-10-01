import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';
import './App.css';
import {Routes,Route } from 'react-router-dom'
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import ProductDetail from './components/products/ProductDetail';
import CartPage from './screens/CartPage';
import { useState } from 'react';
import CartContext from './contexts/CartContext';
function App() {
  var products=[{
  "id": 1,
  "title": "Best Wireless Earphone",
  "price": 109.95,
  "description": "Grab the best earbuds before it solds out",
  "category": "Electronics",
  "image":"https://rukminim2.flixcart.com/image/240/240/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=60",
},
{
    "id": 2,
  "title": "Smart Watch",
  "price": 109.95,
  "description": "Noise Smart watch,find out sale price",
  "category": "Electronics",
  "image": "https://rukminim2.flixcart.com/image/240/240/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=60",
},
{
    "id": 3,
  "title": "Fast Track Smart Watch",
  "price": 109.95,
  "description": "Fastrack watches",
  "category": "Electronics",
  "image": "https://rukminim2.flixcart.com/image/240/240/kz1lle80/smartwatch/m/f/q/-original-imagb54tb6fpurze.jpeg?q=60",
},
{
    "id": 4,
  "title": "Monitors ",
  "price": 109.95,
  "description": "Monitors from  AED.500 onwards",
  "category": "Electronics",
  "image": "https://rukminim2.flixcart.com/image/240/240/xif0q/monitor/i/q/k/-original-imahbzhcdvc6gkhu.jpeg?q=60",
},
{
    "id": 5,
  "title": "Shavers",
  "price": 109.95,
  "description": "Best of shavers",
  "category": "Electronics",
  "image": "https://rukminim2.flixcart.com/image/240/240/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=60",
},
{
    "id": 6,
  "title": "Printer",
  "price": 109.95,
  "description": "Best of printers",
  "category": "Electronics",
  "image":"https://rukminim2.flixcart.com/image/240/240/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=60",
},
];
  var foodProducts=[{
  "id": 1,
  "title": "Coffee Powder",
  "price": 109.95,
  "description": "Upto 80% off",
  "category": "Food,Toys,Beauty and more",
  "image":"https://rukminim2.flixcart.com/image/240/240/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=60",
},
{
    "id": 2,
  "title": "Flair Pen",
  "price": 109.95,
  "description": "From 4AED onwards",
  "category": "Food,Toys,Beauty and more",
  "image": "https://rukminim2.flixcart.com/image/240/240/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=60",
},
{
    "id": 3,
  "title": "Stand handle set",
  "price": 109.95,
  "description": "Gym essentials",
  "category": "Food,Toys,Beauty and more",
  "image": "https://rukminim2.flixcart.com/image/240/240/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=60",
},
{
    "id": 4,
  "title": "Teddy Bear ",
  "price": 109.95,
  "description": "Soft Toys",
  "category": "Food,Toys,Beauty and more",
  "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/j/v/w/3-stuffed-spongy-huggable-smartoys-cute-soft-89-rss-soft-toys-original-imahyffhhvvhexg6.jpeg?q=70",
},
{
    "id": 5,
  "title": "Gear Cycle",
  "price": 109.95,
  "description": "Up to 75% off",
  "category": "Food,Toys,Beauty and more",
  "image": "https://rukminim2.flixcart.com/image/240/240/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=60",
},
{
    "id": 6,
  "title": "Food Spread",
  "price": 109.95,
  "description": "Upto 75% off",
  "category": "Food,Toys,Beauty and more",
  "image":"https://rukminim2.flixcart.com/image/240/240/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=60",
},
];
const [cartItem,setCartItem]=useState([]);
function saveCartItem(product)
{
  const updatedCartItem=cartItem.concat(product)
  setCartItem(updatedCartItem)
  console.log("Cart Item Saved")
}
  return (
  <CartContext.Provider value={{
    cartItem,
    storeCartItems:saveCartItem
  }}>
      <div className="App">
     <Header/>
        <Routes>
          <Route path="/" element={<Home products={products} otherProds={foodProducts}/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/productdetail/:productId" element={<ProductDetail/>}/>
          <Route path="/cartpage" element={<CartPage/>}>  </Route>
        </Routes>
     <Footer/>
    </div>
  </CartContext.Provider>
  );
}

export default App;

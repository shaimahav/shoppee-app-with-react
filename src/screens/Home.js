import navImg from '../assets/images/nav_ad.jpg';
import bannerImg1 from '../assets/images/banner00_.jpg';
import bannerImg2 from '../assets/images/banner100_.jpg';
import bannerImg3 from '../assets/images/banner300_.jpg';
import bannerImg4 from '../assets/images/banner3000_.jpg';
import { Link,NavLink } from "react-router-dom";
import ProductList from '../components/products/ProductList';

function Home(props) {
    var productList=props.products;
    var prods=props.otherProds;
    console.log("Food Products",prods)
    console.log("Electronics",productList);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary-subtle m-2 ">
        <div className="container-fluid">
            <div className="collapse navbar-collapse pt-2" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link "  to="#">LuLu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">Best sellers</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">Todays Deals</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="#">New Releases</NavLink>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="#">Mobile Phones</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="#">Electronics</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="#">Beauty</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="#">Health&PersonalCare</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="#">Fasion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="#">Perfume</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Prime</Link>
                    </li>
                    <li className="nav-item ps-5">
                        <Link className="nav-link " to="#">
                            <img src={navImg} alt="no pic"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div id="carouselExampleIndicators" className="carousel slide ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <img src={bannerImg1} className="d-block w-100 ms-2 me-2" height={300} alt="..."/>
    </div>
    <div className="carousel-item">
       <img src={bannerImg2} className="d-block w-100 ms-2 me-2" height={300} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={bannerImg3} className="d-block w-100 ms-2 me-2" height={300} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={bannerImg4} className="d-block w-100 ms-2 me-2" height={300} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div >
    <ProductList products={productList} others={prods}/>
</div>
</div>
  );
}

export default Home;

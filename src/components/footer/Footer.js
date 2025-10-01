import  LogoImg from '../../assets/images/shoppee-logo.png';
import shopImg from '../../assets/images/shop.png';
import adImg from '../../assets/images/ad-logo.png';
import giftImg from '../../assets/images/gift-logo.png'
import quesImg from '../../assets/images/ques-logo.png';
import flagImg from '../../assets/images/flag.png';
import { Link } from "react-router-dom";

function Footer() 
{
    return(
        <div className='container-fluid '>
           <div className="row">
            <div className="row text-secondary">
              <h6 >Shoppee: The One-stop Shopping Destination</h6>
              <p style={{fontSize:12}}>E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down. </p>
            </div>
             <div className="row text-secondary">
              <h6 >Shoppee Plus</h6>
              <p style={{fontSize:12}}>A world of limitless possibilities awaits you - Shoppee Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins &amp; non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more!
                   <br/>
                    What's more, you can even use the Shoppee supercoins for a number of exciting services, like:    
              </p>
            </div>
               <div className="row text-secondary">
              <h6 >No Cost EMI</h6>
              <p style={{fontSize:12}}> Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Shoppee introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply.  
              </p>
            </div>
           
           </div>
          <div className="row  ps-5 " style={{backgroundColor:"#5d6d7e"}}>
              <div className="col-md-2 ps-5">
                <div className="row text-dark pt-5 mb-3 ">Get To Know Us</div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">About Us</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Contact Us</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Careers</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Shopee Stories</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Press</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Corporate Information</Link></div>

              </div>
              <div className="col-md-2">
                <div className="row text-dark pt-5 mb-3 ">Group Companies</div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Mynra</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Shop Easy</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Book My Trip</Link></div>
                
              </div>
              <div className="col-md-2">
                <div className="row text-dark pt-5 mb-3 ">Help</div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Payment</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Shipping</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Cancellation&Returns</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">FAQ</Link></div>
              </div>
              <div className="col-md-2 ps-5">
                <div className="row text-dark pt-5 mb-3 ">Consumer Policy</div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Cancellation&Returns</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Terms Of Use</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Security</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Privacy</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Sitemap</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Grievance Redressal</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">EPR Compliance</Link></div>
              </div>
              
              <div className="col-md-2 ps-5">
                <div className="row text-dark pt-5 mb-3 ">Mail Us</div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Shopee LLC</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Flat No.1011</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Clock Tower</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Nr.Scrubs$Clogs</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Al Nahyan</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Abu Dhabi</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">UAE</Link></div>
              </div>
              <div className="col-md-2 ps-5 mb-3">
                <div className="row text-dark pt-5 mb-3 ">Mail Us</div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Shopee LLC</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Flat No.1011</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Clock Tower</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Nr.Scrubs&Clogs</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Al Nahyan</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Abu Dhabi</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">UAE</Link></div>
                <div className="row "><Link className="text-white text-decoration-none fw-light" to="">Phone:009745</Link></div>

              </div>
          </div>
         
          <div className="row  ps-5 flex-row-reverse " style={{backgroundColor:"#5d6d7e"}}>
              <div className="col-md-6 pb-3 ">
                  <Link   to="#">
                        <img  className="rounded" src={LogoImg} height={50}  width={150} alt=" no pic"/>
                  </Link>
              </div>
              <div className=" col-auto">
                <div className="col m-2  ">
                  <Link className="border border-light rounded p-3 pt-2 ps-2 text-decoration-none text-dark" to='#'>
                    <img  className="me-1" src={flagImg} height={20} alt=" no pic"/>
                    United Arab Emirates
                  </Link>
                </div>
              </div>
          </div>
         <div className="row bg-secondary-subtle">
            
             <div className="col-md-2 p-3 ps-5">
               <img src={shopImg} height="20" alt=" no pic"/>
              <span >Become Seller</span>
             </div>
             <div className="col-md-2 p-3">
               <img src={adImg} height="20" alt=" no pic"/>
             Advertisement
             </div>
             <div className="col-md-2 p-3">
               <img src={giftImg} height="20" alt=" no pic"/>
                Gift Cards
             </div>
             <div className="col-md-2 p-3">
               <img src={quesImg} height="20" alt=" no pic"/>
             Help Center
             </div>
             <div className="col-auto p-3">
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt=" no pic"/>
             </div>
         </div>
        </div>
    )
}
export default Footer;
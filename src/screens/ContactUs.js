import loginblockImg from '../assets/images/helpdesk-page.png';
function ContactUs() {
    return ( 
        <div className="container  ">
            <div className="row  "><h3>Shoppee Help Center | 24x7 Customer Care Support </h3></div>
            <p className="text-secondary" style={{fontSize:12}}>The Flipkart Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The Flipkart Help Centre also lists out more information that you may need regarding Flipkart Plus, payment, shopping, and more. The page has various filters listed out on the left-hand side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the Flipkart Help Centre number or even access Flipkart Help Centre support if you need professional help regarding various topics. The support executive will ensure speedy assistance so that your shopping experience is positive and enjoyable. You can even inform your loved ones of the support page so that they can properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable deals online. This information is updated on 12-Jun-25</p>
            <div className="row">
                <div className="col-md-3 shadow" style={{fontSize:12 ,overflowY: 'scroll', height: '500px' }}>
                    <div className="row  border-bottom"><b>TYPE OF ISSUES</b>
                        <div className="row ms-5 pt-2 pb-3">Help With Your Issues</div>
                        <div className="row ms-5 pt-2 pb-3">Help With Your Orders</div>
                        <div className="row ms-5 pt-2 pb-3">Help With Other Issues</div>
                    </div>
                    <div className="row mt-4"><b>HELP TOPICS</b>
                        <div className="row ms-5 pt-2 pb-3">Delivery Related</div>
                        <div className="row ms-5 pt-2 pb-3">Login & My Account</div>
                        <div className="row ms-5 pt-2 pb-3">Refunds Related</div>
                        <div className="row ms-5 pt-2 pb-3">Shoppee EMI</div>
                        <div className="row ms-5 pt-2 pb-3">Payment</div>
                        <div className="row ms-5 pt-2 pb-3">Returns & Pick up Related</div>
                        <div className="row ms-5 pt-2 pb-3">Cancellation Related</div>
                        <div className="row ms-5 pt-2 pb-3">Grocery</div>
                        <div className="row ms-5 pt-2 pb-3">Super coins</div>
                        <div className="row ms-5 pt-2 pb-3">Shoppee Plus</div>
                        <div className="row ms-5 pt-2 pb-3">Others</div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row ms-2 text-secondary" style={{fontSize:12}}>
                        <div className="row shadow rounded  p-3">Help Centre</div>
                        <div className="row shadow rounded  p-3">
                            <div className="text-center mt-3">
                                <img className="rounded mx-auto d-block" src={loginblockImg} />
                                <p className='fs-5 textl-dark pt-2 pb-1'>Login to get help with your recent orders and issues</p>
                                <button className="btn btn-sm btn-warning  px-5 text-primary">Login</button>
                            </div>

                            
                        </div>
                    </div>
                </div>
             </div>        
        </div>
        

    );
}

export default ContactUs;  
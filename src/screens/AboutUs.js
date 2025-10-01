import aboutImg from '../assets/images/about-us.JPG';
import CEOImg from '../assets/images/CEO.jpg';
import CFOImg from '../assets/images/CFO.jpg';
import CFOMImg from '../assets/images/CFOM.jpg';
import VPImg from '../assets/images/VP.jpg';
function AboutUs() {
    return ( 
        <div className='container '>
            <div className='row'>
                <div className='ms-5 ps-5 mt-5'><img  className="shadow ms-5 ps-4" src={aboutImg} alt="no pic"/></div>
            </div>
            <div className='row  ms-5 ps-5 mt-4 pt-4 d-flex '>
                <div className='row ms-5 ps-5'>
                    <h1 className='ms-5 ps-5'>Meet  Our  Leaders</h1>
                </div>
                <div className='row mt-5 pt-3'>
                    <div className='col-md-4'>
                       <div className=" border-0 card rounded-circle" >
                            <img   src={CEOImg}  className="card-img-top rounded-circle"   alt="..."/>
                            <div className="card-body">
                            <h3 className="card-text ps-5">Shayan Ahil</h3>
                            <p  className='fs-5'>Cheif Executive Officer,Shoppee Group</p>
                        </div>
                    </div>
                    </div>
                    <div className='col-md-4'>
                       <div className=" border-0 card rounded-circle" >
                            <img   src={CFOImg}  className="card-img-top rounded-circle"   alt="..."/>
                            <div className="card-body">
                            <h3 className="card-text ps-5">Mufzil Ahmed</h3>
                            <p  className='fs-5'>Cheif Financial Officer,Shoppee Group</p>
                        </div>
                    </div>
                    </div>
                     <div className='col-md-4'>
                       <div className=" border-0 card rounded-circle" >
                            <img   src={CFOMImg}  className="card-img-top rounded-circle"   alt="..."/>
                            <div className="card-body">
                            <h3 className="card-text ps-5">Mifa Rahmi </h3>
                            <p  className='fs-5'>Cheif Executive Officer,Mynra Group</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='row'>
                     <div className='col-md-4'>
                       <div className=" border-0 card rounded-circle" >
                            <img   src={VPImg}  className="card-img-top rounded-circle"  height={250} alt="..."/>
                            <div className="card-body">
                            <h3 className="card-text ps-5">Anas</h3>
                            <p  className='fs-5'>Vice President,Shoppee Group</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AboutUs;
function OfferProducts(props) {
  console.log("Line1 in Rcommended products");
  return (
    <>
    <div className="row m-2  pt-2 shadow rounded">
        <div className="row fs-4 pb-2 "> <b>Best of Electronics</b></div>
      {props.productLists.map((p) => {
        return (
          <div className="col-md-2 card  border-0 shadow rounded">
               
              <img src={p.image} className="card-img-top" height={200}alt="..." style={{objectFit:'contain'}}/>
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description} </p>
              </div>
          </div>
        );
      })}
    </div>
    
    <div className="row m-2 pb-2 pt-2 shadow rounded">
        <div className="row fs-4 "> <b>Best of Electronics</b></div>
      {props.others.map((p) => {
        return (
          <div className="col-md-2 card  border-0 shadow rounded">
                
              <img src={p.image} className="card-img-top" height={200}alt="..." style={{objectFit:'contain'}}/>
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description} </p>
              </div>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default OfferProducts;

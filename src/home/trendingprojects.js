import "../css/home.css";

function CategorySection() {
  return (
    <>
      <section className="container">
        <div className="trendbox">
            <h6 className="title-text">Trending Products</h6>
            <div className="row">
                <div className="col-3">
                    <div className="trend-box">
                        <img src="/images/slider/slider1.webp" alt="trending-products"></img>
                        <p>Product Name</p>
                        <span className="text-muted">₹1000.00</span>
                    </div>  
                </div>
                <div className="col-3">
                    <div className="trend-box">
                        <img src="/images/slider/slider1.webp" alt="trending-products"></img>
                        <p>Product Name</p>
                        <span className="text-muted">₹1000.00</span>
                    </div>
                </div>
                <div className="col-3">
                    <div className="trend-box">
                        <img src="/images/slider/slider1.webp" alt="trending-products"></img>
                        <p>Product Name</p>
                        <span className="text-muted">₹1000.00</span>
                    </div>
                </div>
                <div className="col-3">
                    <div className="trend-box">
                        <img src="/images/slider/slider1.webp" alt="trending-products"></img>
                        <p>Product Name</p>
                        <span className="text-muted">₹1000.00</span>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default CategorySection;

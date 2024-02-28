import "../css/home.css";

function CategorySection() {
  return (
    <>
      <section className="mainbox">
        <div className="catmainbox">
          <div className="row">
            <div className="col-md-6 catboxout">
              <div className="catbox1">
                <h3 className="cattext">Embrace the Mix</h3>
                <p catpara>Classic yet modern, the perfect combo.</p>
              </div>
            </div>
            <div className="col-md-6 catboxout1">
              <div className="row">
                <div className="col-12 catbox2">
                  <span className="cattextt">NEW ARRIVALS</span>
                  <h5 className="catparaa">Dining & Kitchen</h5>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-6 catbox3">
                      <span className="cattextt">NEW ARRIVALS</span>
                      <h5 className="catparaa">Dining & Kitchen</h5>
                    </div>
                    <div className="col-6 catbox4">
                      <span className="cattextt">NEW ARRIVALS</span>
                      <h5 className="catparaa">Dining & Kitchen</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategorySection;

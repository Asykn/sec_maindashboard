import "../style/Featured.css"

const Featured = () => {
    return (
        <>
        <div className="featured-cont">
            <div className="sub-featured">
                <div className="top-featured">
                    <div className="feat-serv">Featured Services</div>
                    <div className="sub-serv">Selected to match your business needs.</div>
                </div>
            </div>
                <div className="featured">
                    <div className="featured-content">
                        <div className="img">
                            <img src={require('../images/1.png')} />
                        </div>
                        <div className="title">
                            Short and Long Term Working Capital
                        </div>
                        <div className="learn-more">
                            Learn More
                        </div>
                    </div>

                    <div className="featured-content">
                        <div className="img">
                            <img src={require('../images/2.png')} />
                        </div>
                        <div className="title">
                            Excess Cash? Here's How to Make It Grow
                        </div>
                        <div className="learn-more">
                            Learn More
                        </div>
                    </div>

                    <div className="featured-content">
                        <div className="img">
                            <img src={require('../images/3.png')} />
                        </div>
                        <div className="title">
                            Project and Assets Financing
                        </div>
                        <div className="learn-more">
                            Learn More
                        </div>
                    </div>

                    <div className="featured-content">
                        <div className="img">
                            <img src={require('../images/4.png')} />
                        </div>
                        <div className="title">
                            Payment Solutions for Retailers
                        </div>
                        <div className="learn-more">
                            Learn More
                        </div>
                    </div>
                </div>
        </div>
        
        </>
    );
};
export default Featured;
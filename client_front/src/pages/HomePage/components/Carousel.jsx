import { useNavigate } from "react-router-dom";

const Carousel = () => {
    const navigate = useNavigate();
    const onClicked = link => {
        navigate(link)
    }
    return <div id="carouselExampleCaptions" className="carousel slide carousel-fade " role="button" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://imgz.io/images/2022/04/26/arisa-chattasa--n28kLvRGkg-unsplash.jpg" style={{width: '100vw',height: '400px',objectFit: 'cover'}} alt="arisa-chattasa--n28kLvRGkg-unsplash.jpg" border="0" onClick={()=>onClicked('/ReligiousDay')}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Buddhist Religious Day</h3>
                        <p>List of holidays celebrated within the Buddhist tradition.</p>
                    </div>
            </div>
            <div className="carousel-item">
                <img src="https://imgz.io/images/2022/04/26/olaf-R30h_UaeD7M-unsplash.jpg" style={{width: '100vw',height: '400px',objectFit: 'cover'}}alt="olaf-R30h_UaeD7M-unsplash.jpg" onClick={()=>onClicked('/HistoryOfBuddhism')} border="0" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>History of Buddhism</h3>
                        <p>The Brief history and the origin of Buddhism</p>
                    </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
}

export default Carousel;
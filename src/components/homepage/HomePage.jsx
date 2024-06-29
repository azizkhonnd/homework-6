import './HomePage.css';
import mainImg from './img/main-img.jpg'

const Home = () => {

    return (
        <div className='container HomeWrapper'>
            <div className="homeContainer">
                <div className="homeItem">
                    <h2 className='Name'>I am Aziz</h2>
                    <h1 className='homeTitle'>
                        Web Developer +
                        UX Designer
                    </h1>
                    <p className='homeSubtitle'>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                </div>
                <div className='mainImgCont'>
                    <img  width={450} className='mainImg' src={mainImg} alt="main-img" />
                </div>
            </div>
        </div>
    );
};


export default Home;

import cardImg from './img/cardImg.jpg'
import cardimg2 from './img/cardImg2.jpg'
import cardimg3 from './img/cardImg3.jpg'
import cardimg4 from './img/cardImg4.png'
import cardimg5 from './img/cardImg5.webp'
import cardimg6 from './img/cardImg6.jpg'
import cardimg7 from './img/cardImg7.jpg'
import cardimg8 from './img/cardImg8.webp'
import './Blogs.css'


const Blogs = () => {
    return (
        <div className='container BlogItems'>
            <div className="blogContainer">
                <div className="blogCards">
                    <div className="blog-card">
                        <div className="blog-card-image">
                            <img src={cardImg} alt="Blog Post Image" />

                        </div>
                        <div className="blog-card-content">
                            <h3 className="blog-card-title">Coding</h3>
                            <p className="blog-card-excerpt">This is a short excerpt from the blog post to give readers an idea of what the post is about...</p>
                            <a className='cardLink' href="#" >Read More</a>
                        </div>
                    </div>

                </div>

                <div className="blogCards">
                    <div className="blog-card">
                        <div className="blog-card-image">
                            <img width={279} src={cardimg2} alt="Blog Post Image" />

                        </div>
                        <div className="blog-card-content">
                            <h3 className="blog-card-title">Information Technology</h3>
                            <p className="blog-card-excerpt">This is a short excerpt from the blog post to give readers an idea of what the post is about...</p>
                            <a className='cardLink' href="#" >Read More</a>
                        </div>
                    </div>

                </div>


                <div className="blogCards">
                    <div className="blog-card">
                        <div className="blog-card-image">
                            <img width={272} src={cardimg3} alt="Blog Post Image" />

                        </div>
                        <div className="blog-card-content">
                            <h3 className="blog-card-title">Creating</h3>
                            <p className="blog-card-excerpt">This is a short excerpt from the blog post to give readers an idea of what the post is about...</p>
                            <a className='cardLink' href="#" >Read More</a>
                        </div>
                    </div>

                </div>

                <div className="blogCards">
                    <div className="blog-card">
                        <div className="blog-card-image">
                            <img width={279} height={180} src={cardimg4} alt="Blog Post Image" />

                        </div>
                        <div className="blog-card-content">
                            <h3 className="blog-card-title">Study</h3>
                            <p className="blog-card-excerpt">This is a short excerpt from the blog post to give readers an idea of what the post is about...</p>
                            <a className='cardLink' href="#" >Read More</a>
                        </div>
                    </div>

                </div>

                <div className="blogCards">
                    <div className="blog-card">
                        <div className="blog-card-image">
                            <img width={279} src={cardimg5} alt="Blog Post Image" />

                        </div>
                        <div className="blog-card-content">
                            <h3 className="blog-card-title">Designing</h3>
                            <p className="blog-card-excerpt">This is a short excerpt from the blog post to give readers an idea of what the post is about...</p>
                            <a className='cardLink' href="#" >Read More</a>
                        </div>
                    </div>

                </div>

                <div className="blogCards">
                    <div className="blog-card">
                        <div className="blog-card-image">
                            <img width={279} src={cardimg6} alt="Blog Post Image" />

                        </div>
                        <div className="blog-card-content">
                            <h3 className="blog-card-title">Building</h3>
                            <p className="blog-card-excerpt">This is a short excerpt from the blog post to give readers an idea of what the post is about...</p>
                            <a className='cardLink' href="#" >Read More</a>
                        </div>
                    </div>

                </div>

                <div className="blogCards">
                    <div className="blog-card">
                        <div className="blog-card-image">
                            <img width={279} src={cardimg7} alt="Blog Post Image" />

                        </div>
                        <div className="blog-card-content">
                            <h3 className="blog-card-title">Engineering</h3>
                            <p className="blog-card-excerpt">This is a short excerpt from the blog post to give readers an idea of what the post is about...</p>
                            <a className='cardLink' href="#" >Read More</a>
                        </div>
                    </div>

                </div>

                <div className="blogCards">
                    <div className="blog-card">
                        <div className="blog-card-image">
                            <img width={279} height={186} src={cardimg8} alt="Blog Post Image" />

                        </div>
                        <div className="blog-card-content">
                            <h3 className="blog-card-title">Services</h3>
                            <p className="blog-card-excerpt">This is a short excerpt from the blog post to give readers an idea of what the post is about...</p>
                            <a className='cardLink' href="#" >Read More</a>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Blogs
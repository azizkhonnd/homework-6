import './Portfolio.css'
import tableImg from './img/tableImg1.avif'
import tableImg2 from './img/portfolioImg2.png'
import tableImg3 from './img/countImg.png'
import tableImg4 from './img/figma.png'
import tableImg5 from './img/products.jpg'
const Portfolio = () => {
  return (
    <div className='container portfolioWrapper'>
      <h1 className='portfolioText'>Portfolio</h1>
      <div className="portfolioContainer">
        <div className="portfolioCards">
          <div className="blog-card">
            <div className="blog-card-image">
              <img width={280} className='CardImg' src={tableImg} alt="card-img" />

            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">Admin Panel</h3>
              <p className="blog-card-excerpt">Lorem ipsum dolor sit ametlorem dolor. Ex fugit uam temporibus, asperiores tempore reiciendis?</p>
              <a href="https://api-call-with-cards.vercel.app/" target='_blank' className="blog-card-button">Read More</a>
            </div>
          </div>

        </div>

        <div className="portfolioCards">
          <div className="blog-card">
            <div className="blog-card-image">
              <img width={280} height={157} className='CardImg' src={tableImg2} alt="card-img" />
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">Create Table</h3>
              <p className="blog-card-excerpt">Lorem ipsum dolor sit ametlorem dolor. Ex fugit uam temporibus, asperiores tempore reiciendis?</p>
              <a href="https://homework-3-tan.vercel.app/" target='_blank' className="blog-card-button">Read More</a>
            </div>
          </div>

        </div>

        <div className="portfolioCards">
          <div className="blog-card">
            <div className="blog-card-image">
              <img width={280} height={156} className='CardImg' src={tableImg3} alt="card-img" />
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">Count App</h3>
              <p className="blog-card-excerpt">Lorem ipsum dolor sit ametlorem dolor. Ex fugit uam temporibus, asperiores tempore reiciendis?</p>
              <a href="https://homework-2-alpha.vercel.app/" target='_blank' className="blog-card-button">Read More</a>
            </div>
          </div>

        </div>

        <div className="portfolioCards">
          <div className="blog-card">
            <div className="blog-card-image">
              <img width={280} height={156} className='CardImg' src={tableImg4} alt="card-img" />
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">Figma Design</h3>
              <p className="blog-card-excerpt">Lorem ipsum dolor sit ametlorem dolor. Ex fugit uam temporibus, asperiores tempore reiciendis?</p>
              <a href="https://technologist.vercel.app/" target='_blank' className="blog-card-button">Read More</a>
            </div>
          </div>

        </div>

        <div className="portfolioCards">
          <div className="blog-card">
            <div className="blog-card-image">
              <img width={280} height={157} className='CardImg' src={tableImg5} alt="card-img" />
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">Products Api</h3>
              <p className="blog-card-excerpt">Lorem ipsum dolor sit ametlorem dolor. Ex fugit uam temporibus, asperiores tempore reiciendis? </p>
              <a href="https://exam-5-delta.vercel.app/" target='_blank' className="blog-card-button">Read More</a>
            </div>
          </div>

        </div>

        <div className="portfolioCards">
          <div className="blog-card">
            <div className="blog-card-image">
              <img width={280} height={158} className='CardImg' src={tableImg4} alt="card-img" />
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">Figma Design</h3>
              <p className="blog-card-excerpt">Lorem ipsum dolor sit ametlorem dolor. Ex fugit uam temporibus, asperiores tempore reiciendis?</p>
              <a href="https://my-team-web.vercel.app/" target='_blank' className="blog-card-button">Read More</a>
            </div>
          </div>

        </div>

        <div className="portfolioCards">
          <div className="blog-card">
            <div className="blog-card-image">
              <img width={280} height={158} className='CardImg' src={tableImg4} alt="card-img" />
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">Figma Design</h3>
              <p className="blog-card-excerpt">Lorem ipsum dolor sit ametlorem dolor. Ex fugit uam temporibus, asperiores tempore reiciendis?</p>
              <a href="https://space-tourism-website-main-tawny.vercel.app/" target='_blank' className="blog-card-button">Read More</a>
            </div>
          </div>

        </div>

        <div className="portfolioCards">
          <div className="blog-card">
            <div className="blog-card-image">
            <img width={280} height={158} className='CardImg' src={tableImg4} alt="card-img" />
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">Figma Design</h3>
              <p className="blog-card-excerpt">Lorem ipsum dolor sit ametlorem dolor. Ex fugit uam temporibus, asperiores tempore reiciendis?</p>
              <a href="https://roaster-delta.vercel.app/" target='_blank' className="blog-card-button">Read More</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Portfolio

import './About.css'

const About = () => {
    return (
        <div className='container aboutContainer'>
            <div className="aboutWrapper">
                <h2 className='aboutTitle'>
                    I'm Aziz, a visual-turned-product designer with startup and agency experience. I help simplify complex user journeys to better serve users' stories.
                </h2>
                <p className='aboutSubTitle'>Having lived in Uzbekistan, the Tashkent, and the US in the past 20 years, I’ve developed a unique strength in decoding people's emotions from diverse backgrounds. As a web developer, I want to use my creative juice to optimize and get people's stories out. After gaining a bachelor's in Communications Coding from Pratt Institute in Brooklyn, I started my career in visual design at creative agencies. As much as I love storytelling for brands, I want to deliver practical solutions that address real human needs. This led me to pursue a Master's in Human-Computer Interaction at Carnegie Mellon. Since then, I've been immersed in the world of early-stage startups in the B2B SaaS space, bringing product visions to life.
                    Currently I'm on the lookout for new full-time opportunities to contribute my design expertise to collaborative teams.</p>
            </div>

            <div className="interestsContainer">
                <div className="interests">
                    <h2 className='interestsTitle'>...and awards I've won!</h2>
                    <ul className='interestsList'>
                        <li className='interestsItem'>🏆  D&AD New Blood Portfolio Winner</li>
                        <li className='interestsItem'>🏆  Wix Blog – 15 Outstanding Wix Website Examples</li>
                        <li className='interestsItem'>🏆  Forbes – Best Designed Websites of 2023</li>
                    </ul>
                </div>

                <div className="interests">
                    <h2 className='interestsTitle'>Other things I enjoy</h2>
                    <ul className='interestsList'>
                        <li className='interestsItem'>🗯  Snowboarding 🏂</li>
                        <li className='interestsItem'>🗯   Sci-fi & thrillers 🎬</li>
                        <li className='interestsItem'>🗯   Interactive Experiences 🖼</li>
                        <li className='interestsItem'>🗯   Indie-pop 🎵</li>
                        <li className='interestsItem'>🗯   Football ⚽</li>
                        <li className='interestsItem'>🗯   Podcasts-watching ☁️  (yes, it's a real hobby)</li>
                    </ul>
                </div>



            </div>
        </div>
    )
}

export default About
import './LandingPage.css'
import LOGO from '../assets/logo.svg'
import GLOBE from '../assets/globe.png'
import QUESTOIN from '../assets/question.png'

const LandingPage = () => {
    return (
        <div className='header'>
            <div className='left-elements'>
                <img className='logo' src={LOGO} alt='LOGO'></img>
                <p>LOGO</p>
            </div>
            <div className='right-elements'>
                <img className='globe' src={GLOBE} alt='GLOBE'></img>
                <img className='question' src={QUESTOIN} alt='question'></img>
            </div>
            
        </div>
    )
}

export default LandingPage
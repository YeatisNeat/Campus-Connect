import './Login.css'
import WAVE from '../assets/wave.png'
import MAIL from '../assets/mail.png'
import LOCK from '../assets/lock.png'
import EYE from '../assets/eye.svg'

const Login = () => {
    return (
        <>
            <form>
                <div>
                    <h1>Welcome back</h1>
                    {/* Add the wave icon here */}
                    {/* <img src={WAVE} alt='Wave.png'></img> */}
                </div>

                <h2>Log in your account</h2>

                <div className="input-email">
                    <img src={MAIL} alt='mail.png'></img>
                    <input type="text" placeholder='jrobinson@hotmail.com'
                    pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'>
                    </input>
                </div>

                <div className="input-password">
                    <img src={LOCK} alt='lock.png'></img>
                    <input type="password" placeholder='Hellojrobinson@123'>
                    </input>
                    <img src={EYE} alt='eye.png'></img>
                </div>

                <div className='utility-container'>
                    <div className="left">
                        <input type='checkbox'></input>
                        <p>Remember me</p>
                    </div>
                    <div className="right">
                        <u><a>Forgot Password?</a></u>
                    </div>
                </div>

                <button>Continue</button>

                <div className="sign-up-prompt">
                    <p>Don't have an account?</p>
                    <b><a>Sign up</a></b>
                </div>
                
            </form>
        </>
    )
}

export default Login
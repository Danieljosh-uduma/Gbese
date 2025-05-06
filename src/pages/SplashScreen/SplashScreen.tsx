import { Logo } from '../../components/icons/Icon'
import './SplashScreen.css'
export default function SplashScreen() {
    return (
        <main className="splash-container">
            <div className="splash-content">
                <Logo className='splash-logo' />
                <h1 className="splash-title">GBESE</h1>
                <p className="splash-tagline">Revolutionizing Debt Transfer</p>
                <div className="splash-loader">
                    <div className="splash-loader-bar"/>
                </div>
            </div>
        </main>
    )
}

import mainLogo from '../../assets/images/icons/logo-main.svg'
import whiteLogo from '../../assets/images/icons/Logo-white.svg'


// Logo component
type LogoProps = {
    type?: 'white' | 'green'
    className?: string
}
function Logo(props: LogoProps) {
    const { type, className } = props 

    if (type === 'white') {
        return <img src={whiteLogo} alt="Logo" className={className} />
    } else if (type === 'green') {
        return // This will be the green logo when available
    } else {
        return <img src={mainLogo} alt="Logo" className={className} />
    }
}

export { Logo }
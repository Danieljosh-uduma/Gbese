import MainLogo from '../../assets/images/icons/Logo-main.png'
import TextLogo from '../../assets/images/icons/Logo-text.png'


function LogoMain({className}: { className?: string }) {
    return (
        <img src={MainLogo} alt="Logo" className={className} />
    )
}

function LogoText({className}: { className?: string }) {
    return (
        <img src={TextLogo} alt="Logo with text" className={className}/>
    )
}

export { LogoMain, LogoText}
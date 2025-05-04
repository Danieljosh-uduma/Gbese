import { ReactNode } from "react"
import { Link } from "react-router"
import './button.css'

type ButtonProp = {
    children: ReactNode
    url?: string
    type?: 'button' | 'submit' | 'reset'
    className?: string
    disabled?: boolean
    isLoading?: boolean
    onClick?: () => void
}

function LoadingSpinner() {
    return (
        <div className="spinner"></div>
    )
}

export default function Button(props: ButtonProp) {
    const { children, url, onClick, type, className, disabled, isLoading } = props
    const loadingClass = isLoading ? 'loading' : ''
    const style = `${className} ${loadingClass}`

    if (url) {
        return (
            <Link to={url? `/${url}`: '/'}>
                <button className={style} type={type} onClick={onClick} disabled={disabled}>
                    {isLoading? <LoadingSpinner /> : children}
                </button>
            </Link>
        )
    } else {
        return (
            <button className={style} type={type} onClick={onClick} disabled={disabled}>
                {isLoading? <LoadingSpinner /> : children}
            </button>
        )
    }
}

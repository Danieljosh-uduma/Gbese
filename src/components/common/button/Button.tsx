import { ReactNode } from "react"
import { Link } from "react-router"
import './button.css'

type ButtonProp = {
    size?: 'large' | 'small'
    children: ReactNode
    url?: string
    onClick?: () => void
    className?: string
}

export default function Button(props: ButtonProp) {
    const {  size, children, url, onClick} = props
    const style = size === 'large'? 'large-btn': size === 'small'? 'small-btn': ''
    

    return (
        <Link to={url? `/${url}`: '/'}>
            <button className={style} type="button" onClick={onClick}>
                {children}
            </button>
        </Link>
    )
}

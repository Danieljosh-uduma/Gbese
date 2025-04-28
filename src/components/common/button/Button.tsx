import { ReactNode } from "react"
import { Link } from "react-router"
import './button.css'

type ButtonProp = {
    size?: 'large' | 'small'
    children: ReactNode
    url?: string
}

export default function Button(props: ButtonProp) {
    const {  size, children, url } = props
    const style = size === 'large'? 'large-btn': size === 'small'? 'small-btn': ''
    

    return (
        <Link to={url? `/${url}`: '/'}>
            <button className={style} type="button">
                {children}
            </button>
        </Link>
    )
}
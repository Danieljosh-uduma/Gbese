import { useNavigate, useLocation } from "react-router";

function useKey() {
    const location = useLocation()
    const navigate = useNavigate()

    if (location.state) {
        return location.state.key
    }

    navigate('/')
}

export { useKey }
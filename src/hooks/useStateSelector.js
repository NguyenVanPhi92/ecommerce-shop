import { useSelector } from 'react-redux'

export const useStateSelector = (nameState) => {
    const state = useSelector((state) => state.cart.nameState)

    return state
}

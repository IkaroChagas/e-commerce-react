import * as C from './styles'
import devcommerce from '../../images/devcommercelogo.png'
import cartImage from '../../images/cart.png'


export const NavBar = () => {


    const handleAddtoCart = () => {

    }

    return (
        <C.NavBar>
            <C.img src={devcommerce} />
            <button src={cartImage} onClick={handleAddtoCart} />
        </C.NavBar>
    )

}
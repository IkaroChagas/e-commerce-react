import * as C from './styles'
import devcommerce from '../../images/devcommercelogo.png'
import cartImage from '../../images/cart.svg'


export const NavBar = () => {



    return (
        <C.NavBar>
            <C.img src={devcommerce} />
            <button onClick={() => cartImage}></button>
        </C.NavBar>
    )

}
import * as C from './styles'
import devcommerce from '../../images/devcommercelogo.png'
import { MainModal } from '../Modal'


export const NavBar = () => {

    return (
        <C.NavBar>
            <C.img src={devcommerce} />
        </C.NavBar>
    )

}
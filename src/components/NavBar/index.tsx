import React from 'react'
import * as C from './styles'
import devcommerce from '../../images/devcommercelogo.png'


export const NavBar = () => {

    return (
        <C.NavBar>
            <C.img src={devcommerce} />
        </C.NavBar>
    )

}
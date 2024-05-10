import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavBarLink = styled(NavLink)`
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    &:active {
        color: yellow;
        font-weight: bold;
    }
`

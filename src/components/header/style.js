import styled from "styled-components"
import { colors } from "../../assets/styles/colors"
import { Navbar } from "react-bootstrap"

export const HeaderWrapper = styled.div`
    background-color: ${colors.orangeBgc};

    .headerInner {
        padding: 60px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            width: 115px;
        }
    }
`

export const BurgerMenu = styled(Navbar)`
  display: none;
  padding: 0;

  button {
    padding: 0;

    &:focus {
        box-shadow: none;
    }
  }

  @media (max-width: 992px) {
    display: block;
  }
`

export const NavBar = styled.div`
    display: flex;
    align-items: center;

    .authBtns {
         .login {
            margin-right: 30px;
        }
    }

    @media (max-width: 992px) {
            display: none;
    }
`

export const NavLinks = styled.ul`
    display: flex;
    .navLink {
        list-style-type: none;
        margin-right: 50px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 30px;
        cursor: pointer;
        transition: all ease 0.3s;

        &:hover {
            opacity: 0.6;
        }

        @media (max-width: 992px) {
            margin: 0;
            margin-top: 25px;
            font-size: 22px;

        }

    }

    @media (max-width: 992px) {
        flex-direction: column;
        text-align: center;
        margin: 0;
    }
`
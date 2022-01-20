import styled from "styled-components"
import { colors } from '../../../../assets/styles/colors'

export const CircleBtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${colors.white};
    margin-right: 20px;
    margin-left: 29px;
    box-shadow: 2px 20px 60px rgba(61, 155, 185, 0.1);
    transition: all ease 0.5s;
    
    &:hover {
        box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.1);
        transform: scale(1.1);
    }

    img {
        width: 20px;
        height: 20px;
        margin-left: 7px;
        margin-top: 1px;
    }

    @media (max-width: 1200px) {
        margin-left: 0;
    }

    @media (max-width: 992px) {
        width: 44px;
        height: 44px;

        img {
            width: 16px;
            height: 16px;
            margin-left: 6px;
            margin-top: 1px;
        }
    }
`

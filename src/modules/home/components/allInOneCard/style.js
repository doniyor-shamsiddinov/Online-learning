import styled from "styled-components"
import { colors } from '../../../../assets/styles/colors'

export const InOneCardWrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 10px 60px rgba(38, 45, 118, 0.08);
    border-radius: 20px;
    max-width: 380px;
    padding: 30px;


    .allInOneCardInner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }

    .inOneCardImg {
        width: 150px;
        height: 150px;
        margin-top: -95px;
    }

    .inOneCardTitle {
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        line-height: 45px;
        text-align: center;
        margin: 0 auto;
        color: ${colors.darkTextBlue};
        width: 280px;
        height: 90px;
    }

    .inOneCardText {
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 180%;
        text-align: center;
        color: #696984;
        margin: 0 auto;
    }

    @media (max-width: 1200px) {
        max-width: 300px;
        padding: 20px;
        
        .inOneCardTitle {
            font-size: 20px;
            width: 223px;
        }

        .inOneCardText {
            font-size: 15px;
        }

    }

    @media (max-width: 768px) {
        max-width: 380px;
        padding: 30px;
        
        .inOneCardTitle {
            font-size: 20px;
        }

        .inOneCardImg {
            width: 100px;
            height: 100px;
            margin-top: -60px;
        }

        .inOneCardText {
            font-size: 15px;
        }

    }

    @media (max-width: 576px) {
        margin-bottom: 35px;

    }

    @media (max-width: 375px) {
        max-width: 300px;
        padding: 30px;

        .inOneCardTitle {
            font-size: 16px;
            width: 200px;
        }

        .inOneCardImg {
            width: 100px;
            height: 100px;
            margin-top: -60px;
        }

        .inOneCardText {
            font-size: 15px;
        }

    }
`
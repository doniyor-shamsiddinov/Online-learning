import styled from "styled-components"
import { colors } from "../../../../assets/styles/colors"

import ArrowBtn from '../../../../assets/icons/arrowRight.svg'

export const FeedbackWrapper = styled.div`
    .innerDiv {
        margin-top: 110px;
        display: flex;
        align-items: start;
        justify-content: space-between;
    }

    .assestmentImg {
        width: 570px;
    }

    .integration {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 27px;
        letter-spacing: 0.2em;
        color: #525596;
        position: relative;
        padding-left: 85px;
        margin-bottom: 20px;

        &:before {
            content: '';
            width: 70px;
            height: 1px;
            background-color: #525596;
            position: absolute;
            left: 0;
            top: 12px;

        }
    }

    .toolTitle {
        font-style: normal;
        font-weight: bold;
        font-size: 35px;
        line-height: 180%;
        color: ${colors.darkTextBlue};
        max-width: 478px;       
        .orange {
            color: ${colors.orange};
        }

    }

    .tooltext {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 180%;
        color: #696984;
        margin-top: 20px;
        max-width: 419px;
    }

    .moreFeatures {
        margin-top: 50px;
    }

    @media (max-width: 1200px) {

        .innerDiv {
            align-items: start;
        }
        .toolTitle {
            font-size: 30px;
            max-width: 500px;
        }

        .tooltext {
            font-size: 18px;
            max-width: 348px;
        }

        .assestmentImg {
            width: 470px;
        }
    }

    @media (max-width: 992px) {
        .innerDiv {
            flex-direction: column;
            margin-top: 200px;
            align-items: center;
        }

        .assestmentImg {
            margin-top: 60px;
        }
        .toolTitle {
            font-size: 30px;
            max-width: 355px;
            text-align: center;
            margin: 0 auto;
        }

        .tooltext {
            text-align: center;
            font-size: 18px;
            margin-top: 20px;
            max-width: 432px;
            margin: 0 auto;
        }

        .moreFeaturesWrap {
            text-align: center;
        }

        .integration {
            text-align: center;
            padding-left: 0;

            &:before { display: none; }
        }
    }

    @media (max-width: 576px) {
        .assestmentImg {
            width: 400px;
        }
        
    }

    @media (max-width: 410px) {
        .assestmentImg {
            width: 350px;
        }
        
    }

    @media (max-width: 375px) {
        margin-top: 10px;

        .moreFeaturesWrap {
            margin-bottom: 20px;
        }
        .assestmentImg {
            display: none;
        }
        
    }

`

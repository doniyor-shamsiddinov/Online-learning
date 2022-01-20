import styled from "styled-components"
import { colors } from "../../../../assets/styles/colors"
import heroBgItem from '../../../../assets/images/item.png'
import HeroBgimg from '../../../../assets/images/heroBgimg.png'

export const HeroWrapper = styled.div`
    background-color: ${colors.orangeBgc};
    position: relative;
    overflow: hidden;

    &:before {
        content: '';
        background-image: url(${heroBgItem});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: left bottom;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 50%;
        height: 128px;
    }

    &:after {
        content: '';
        background-image: url(${heroBgItem});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: left bottom;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 50%;
        height: 128px;
        transform: rotateY(180deg);
    }

    .heroInner {
        padding-top: 120px;
        padding-bottom: 290px;
        position: relative;

        &:after {
            content: '';
            background-image: url(${HeroBgimg});
            background-repeat: no-repeat;
            background-position: right bottom;
            background-size: contain;
            position: absolute;
            bottom: -10%;
            right: 0;
            width: 58%;
            height: 116%;
        }

        .heroTitle {
            font-style: normal;
            font-weight: 700;
            font-size: 46px;
            line-height: 75px;
            max-width: 537px;
            color: ${colors.darkTextBlue};

            .distinctive {
                color: ${colors.orange};
            }
        }

        .heroSubTitle {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 160%;
            max-width: 423px;
            color: #464646;
            margin-top: 24px;
        }

        .heroBtns {
            margin-top: 52px;
            display: flex;
            align-items: center;

            .playText {
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 36px;
                color: ${colors.darkBlue};
            }

            .circleWrap {
                display: flex;
                align-items: center;
            }
        }


        @media (max-width: 1200px) {
            padding-top: 90px;
            padding-bottom: 190px;
            
            &:after {
                bottom: -10%;
            }

            .heroTitle {
                font-size: 40px;
            }

            .heroSubTitle {
                font-size: 15px;
                max-width: 372px;
            }

            .heroBtns {
                flex-direction: column;
                align-items: start;
                justify-content: center;

                .circleWrap {
                   margin-top: 25px;
                }
            }
        }

        @media (max-width: 992px) {
            padding-top: 50px;
            padding-bottom: 150px;
            
            &:after {
                width: 445px;
                height: 534px;
                bottom: -9%;
                right: -50px;
            }

            .heroTitle {
                font-size: 35px;
                max-width: 326px;
                line-height: 52px;
            }

            .heroSubTitle {
                font-size: 15px;
                max-width: 305px;
            }

            .heroBtns {
                margin-top: 35px;

                .circleWrap {
                   .playText {
                       font-size: 16px;
                   }
                }
            }
        }

        @media (max-width: 768px) {
            padding-top: 490px;
            padding-bottom: 140px;
            
            &:after {
                width: 404px;
                height: 487px;
                bottom: 46%;
                right: 60px;
            }

            .heroTitle {
                font-size: 38px;
                max-width: 444px;
                margin: 0 auto;
                line-height: 50px;
                text-align: center;
            }

            .heroSubTitle {
                font-size: 16px;
                max-width: 410px;
                margin: 0 auto;
                text-align: center;
                margin-top: 20px;

            }

            .heroBtns {
                align-items: center;
            }
        }

        @media (max-width: 576px) {
            padding-top: 50px;
            
            &:after {
                display: none;
            }

            .heroTitle {
                font-size: 35px;
            }

            .heroSubTitle {
                font-size: 18px;
                margin-top: 30px;

            }
        }

        @media (max-width: 375px) {

            .heroSubTitle {
                font-size: 17px;
                max-width: 285px;
            }
        }
    }
`

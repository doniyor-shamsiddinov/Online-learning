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

    .swiperWrapper {
        width: 688px;
        height: 754px;
        overflow: hidden;

        @media (max-width: 768px) {
            width: 100%;
        }
        @media (max-width: 375px) {
            height: 470px;
        }
    }

    .carouselImage {
        position: relative;
    }

    .infoLayer {
            position: absolute;
            background: #FFFFFF;
            box-shadow: 2px 4px 60px rgba(41, 44, 124, 0.1);
            border-radius: 20px;
            width: 450px;
            padding: 20px;
            left: 40px;
            bottom: -60px;
            border-left: 14px solid #F77766;
            z-index: 99;


            .feedbackText {
                font-family: Nunito Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 180%;
                letter-spacing: 0.02em;
                color: #5F5F7E;
                border-left: 1px solid #BDBDD1;
                padding-left: 32px;
                max-width: 370px;
            }

            .infoBottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 30px;
            }

            .reviewImg {
                height: 32px;
                width: 130px;
                object-fit: contain;
            }

            .reviewCount {
                font-family: Nunito Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 180%;
                letter-spacing: 0.02em;
                color: #80819A;
            }

            @media (max-width: 576px) {
                width: 90%;
                padding: 20px;
                left: 40px;
                bottom: -60px;

                .reviewCount {
                    font-size: 12px;
                }

                .reviewImg {
                    height: 25px;
                    width: 100px;
                }

                .feedbackText {
                    font-size: 12px;
                    color: #5F5F7E;
                    border-left: 1px solid #BDBDD1;
                    padding-left: 20px;
                    max-width: 100%;
                }
            }

            @media (max-width: 375px) {
                padding: 10px;
                left: 40px;
                bottom: -60px;

                .reviewCount {
                    font-size: 10px;
                }

                .reviewImg {
                    height: 18px;
                    width: 80px;
                }

                .feedbackText {
                    font-size: 10px;
                    color: #5F5F7E;
                    border-left: 1px solid #BDBDD1;
                    padding-left: 10px;
                    max-width: 100%;
                }
            }
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

    .btnWithArrow {
        border: 1px solid #F48C06;
        box-sizing: border-box;
        border-radius: 80px;
        background-color: transparent;
        color: #F48C06;
        padding: 16px 65px 16px 26px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 160%;
        letter-spacing: 0.02em;
        position: relative;
        transition: all ease 0.3s;

        &:hover {
            padding: 16px 80px 16px 26px;
            opacity: 0.8;
        }

        &:after {
            content: '';
            background-image: url('${ArrowBtn}');
            background-repeat: no-repeat;
            background-size: contain;
            position: absolute;
            right: 0;
            top: 0;
            width: 60px;
            height: 60px;
        }


        

        @media (max-width: 992px) {

            &:hover {
                padding: 16px 65px 16px 26px;
                opacity: 0.8;
            }
        }

        @media (max-width: 375px) {
            padding: 19px 65px 19px 26px;
            font-size: 16px;

            &:hover {
                padding: 19px 65px 19px 26px;
            }

            &:after {
                right: -1px;
                width: 64px;
                height: 64px;
            }
        }
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

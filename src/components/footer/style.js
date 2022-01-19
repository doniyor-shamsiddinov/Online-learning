import styled from "styled-components"
import {
    colors
} from "../../assets/styles/colors"

export const FooterWrapper = styled.div `
    background-color: ${colors.darkBlue};
    padding-bottom: 40px;
    padding-top: 50px;

    .footerInner {
        .footerLogo {
            display: flex;
            justify-content: center;
            align-items: center;
            .footerLogotip {
                width: 115px;
                margin-right: 30px;
            }

            .virtualClass {
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 30px;
                letter-spacing: 0.04em;
                max-width: 160px;
                color: ${colors.white};
                padding-left: 30px;
                border-left: 1px solid #626381;
            }
        }

        .footerSubscribe {
            .subscribeTitle {
                font-style: normal;
                font-weight: 400;
                font-size: 22px;
                line-height: 34px;
                letter-spacing: 0.02em;
                color: #B2B3CF;
                text-align: center;
                margin-top: 65px;
            }

            .subscribeInputWrap {
                text-align: center;
                margin-top: 20px;
                .subscribeInput {
                    border: 1px solid #83839A;
                    border-radius: 80px;
                    background-color: transparent;
                    padding: 12px 30px;
                    margin-right: 20px;
                    outline: none;
                    color: #83839A;
                    width: 350px;

                    &::placeholder {
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 30px;
                        color: #83839A;
                    }

                    @media (max-width: 768px) {
                        width: 80%;
                        margin-bottom: 20px;
                        margin-right: 0;
                    }
                }

                .subscribeBtn {
                    box-shadow: 0px 9px 19px -11px #3a40d0;

                    @media (max-width: 768px) {
                        width: 80%;
                    }
                }
            }

            .footerCopyRight {
                text-align: center;
                color: #B2B3CF;
                margin-top: 70px;

                .copyRightTitles {
                    display: flex;
                    justify-content: center;

                    .copyRightTitle {
                        font-style: normal;
                        font-weight: normal;
                        font-size: 20px;
                        line-height: 33px;
                        position: relative;
                    }

                    .copyRightTitle:not(:last-child) {
                        padding-right: 30px;
                    }

                    .copyRightTitle:nth-child(2)::before {
                        content: '';
                        width: 1px;
                        height: 17px;
                        background-color: #626381;
                        position: absolute;
                        left: -15px;
                        top: 10px;
                    }

                    .copyRightTitle:nth-child(2)::after {
                        content: '';
                        width: 1px;
                        height: 17px;
                        background-color: #626381;
                        position: absolute;
                        left: 149px;
                        top: 10px;
                    }

                    @media (max-width: 576px) {
                        flex-direction: column;

                        .copyRightTitle:not(:last-child) {
                            padding-right: 0px;
                            margin-bottom: 15px;
                        }

                        .copyRightTitle:nth-child(2)::after {
                            display: none;
                        }

                        .copyRightTitle:nth-child(2)::before {
                            display: none;
                        }
                    }

                }

                .copyRight {
                    margin-top: 15px;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 33px;
                }
            }
        }
    }
`
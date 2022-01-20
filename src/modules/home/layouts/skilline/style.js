import styled from "styled-components"
import { colors } from "../../../../assets/styles/colors"

import forIns from '../../../../assets/images/forInstructors.png'
import forStu from '../../../../assets/images/forstudents.png'

export const SkillineWrapper = styled.div`
    margin-top: 140px;
    padding: 0 15px;

    .skillineTitle {
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 180%;
        text-align: center;
        color: ${colors.darkTextBlue};

        .orange {
            color: ${colors.orange};
        }
    }

    .skillineText {
        max-width: 800px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 180%;
        text-align: center;
        margin: 0 auto;
        color: #696984;
        margin-top: 10px;
    }

    .skillineCards {
        display: flex;
        justify-content: center;
        margin-top: 60px;

        .forInstructors, .forStudents {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 500px;
            height: 350px;
        }

        .forInstructors {
            background-image: url(${forIns});
            background-repeat: no-repeat;
            background-position: center center;
            background-size: contain;
            margin-right: 60px;

            .forInstructorsTitle {
                font-style: normal;
                font-weight: 600;
                font-size: 29px;
                line-height: 48px;
                text-align: center;
                color: ${colors.white};
                margin-bottom: 10px;
            }
        }

        .forStudents {
            background-image: url(${forStu});
            background-repeat: no-repeat;
            background-position: center center;
            background-size: contain;

            .forStudentsTitle {
                font-style: normal;
                font-weight: 600;
                font-size: 29px;
                line-height: 48px;
                text-align: center;
                color: ${colors.white};
                margin-bottom: 10px;
            }
        }

        .contentCentered {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;

            .forInstructors {
                margin-right: 0;
                margin-bottom: 30px;
            }
        }

        @media (max-width: 576px) {
            .forInstructors, .forStudents {
                width: 380px;
                height: 252px;
            }

            .forInstructors {
                .forInstructorsTitle {
                    font-size: 24px;
                    margin-bottom: 10px;
                }
            }

            .forStudents {
                .forStudentsTitle {
                    font-size: 24px;
                    margin-bottom: 10px;
                }
            }
        }

        @media (max-width: 375px) {
            .forInstructors, .forStudents {
                width: 300px;
                height: 200px;
            }

            .forInstructors {
                .forInstructorsTitle {
                    font-size: 20px;
                    margin-bottom: 10px;
                }
            }

            .forStudents {
                .forStudentsTitle {
                    font-size: 20px;
                    margin-bottom: 10px;
                }
            }
        }
    }
`

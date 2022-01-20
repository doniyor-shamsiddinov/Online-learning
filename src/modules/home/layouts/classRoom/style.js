import styled from "styled-components"
import { colors } from "../../../../assets/styles/colors"

import Elips from '../../../../assets/icons/elips.svg'
import ClassRoomImg from '../../../../assets/images/classrrom.png'

export const ClassRoomWrapper = styled.div`
    display: flex;
    margin-top: 160px;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    .classRoomTitle {
        font-style: normal;
        font-weight: 500;
        font-size: 33px;
        line-height: 160%;
        color: ${colors.darkTextBlue};
        position: relative;

        .orange {
            color: ${colors.orange}
        }

        &:before {
            content: '';
            background-image: url('${Elips}');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: left top;
            position: absolute;
            top: -17px;
            left: -24px;
            width: 70px;
            height: 70px;
            z-index: -1;
        }
    }

    .classRoomText {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #696984;
        margin-top: 30px;
    }

    .classRoomLink {
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 180%;
        text-decoration-line: underline;
        color: #696984;
        transition: all ease 0.3s;
        margin-top: 30px;
        display: block;

        &:hover {
            opacity: 0.7;
        }
    }

    .classRoomIframe {
        width: 705px;
        height: 471px;
        background-image: url(${ClassRoomImg});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        display: flex;
        justify-content: center;
        align-items: center;

        .classRoomCircleBtn {
            margin-left: 80px;
        }
    }

    @media (max-width: 1200px) {
        flex-direction: column;
        text-align: center;

        .classRoomTitle {
            &:before {
                top: -12px;
                left: 13px;
                width: 60px;
                height: 60px;
            }
        }
    }

    @media (max-width: 768px) {
        .classRoomTitle {
            font-size: 30px;

            &:before {
                top: -12px;
                left: 20px;
                width: 60px;
                height: 60px;
            }
        }
        .classRoomIframe {
            width: 576px;
            height: 365px;
            margin-top: 30px;
        }
    }

    @media (max-width: 576px) {
        .classRoomTitle {
            font-size: 28px;

            &:before {
                display: none;
            }
        }
        .classRoomIframe {
            width: 375px;
            height: 235px;

        }
    }

    @media (max-width: 576px) {
        .classRoomIframe {
            width: 300px;
            height: 195px;
        }
    }

`

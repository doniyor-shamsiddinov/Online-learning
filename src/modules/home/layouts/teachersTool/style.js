import styled from "styled-components"
import { colors } from "../../../../assets/styles/colors"
import TeachersTool from '../../../../assets/images/teachersTool.png'

export const TeachersToolWrapper = styled.div`
    position: relative;
    margin-top: 250px;
    .toolTitle {
        font-style: normal;
        font-weight: bold;
        font-size: 35px;
        line-height: 180%;
        color: ${colors.darkTextBlue};
        margin-top: 260px;
        max-width: 393px;       
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
        max-width: 565px;
    }

    &:after {
        content: "";
        background-image: url("${TeachersTool}");
        background-repeat: no-repeat;
        background-position: center right;
        background-size: contain;
        position: absolute;
        right: 0;
        top: -132px;
        width: 537px;
        height: 500px;
    }

    @media (max-width: 1200px) {
        .toolTitle {
            font-size: 30px;
            max-width: 355px;
        }

        .tooltext {
            font-size: 18px;
            margin-top: 20px;
            max-width: 432px;
        }

        &:after {
            top: -104px;
            width: 450px;
            height: 400px;
        }
    }

    @media (max-width: 992px) {
        padding-bottom: 450px;
        margin-top: 200px;
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

        &:after {
            top: 238px;
            right: 133px;
        }
    }

    @media (max-width: 768px) {
        &:after {
            right: 41px;
        }
    }

    @media (max-width: 576px) {
        &:after {
            width: 350px;
            right: 78px;
        }
    }

    @media (max-width: 410px) {
        &:after {
            right: 21px;
        }
    }
    @media (max-width: 375px) {
        padding-bottom: 50px;
        &:after {
            display: none;
        }
    }

`

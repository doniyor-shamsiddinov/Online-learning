import styled from "styled-components"
import { colors } from "../../../../assets/styles/colors"

export const NewsWrapper = styled.div`
    margin-top: 150px;
    margin-bottom: 150px;

    .newsTitle {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 180%;
        color: ${colors.darkTextBlue};
        text-align: center;
    }

    .newsSubTitle {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 180%;
        text-align: center;
        color: #696984;
        text-align: center;
        margin-top: 20px;
    }

    .newsSubTitle {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 180%;
        text-align: center;
        color: #696984;
    }

    .newsWrap {
        display: flex;
        justify-content: space-between;
        margin-top: 80px;

        @media (max-width: 1200px) {
            flex-direction: column;
        }
    }

    .moreNews {
        margin: 0 auto;
        margin-bottom: 30px;
    }

    .moreNewsImg {
        max-width: 600px;
        @media (max-width:768px) {
            max-width: 500px;
        }
        @media (max-width:576px) {
            width: 100%;
        }
    }

    .newsCardStatus {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: ${colors.darkTextBlue};
        background: #F4C467;
        border-radius: 80px;
        padding: 4px 26px;
        margin-top: 30px;
        display: inline-block;

        
    }

    .newsCardTitle {
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 180%;
        color: ${colors.darkTextBlue};
        margin-top: 20px;
        max-width: 550px;
    }

    .newsCardText {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #696984;
        margin-top: 20px;
        max-width: 550px;
    }

    .newsCardLink {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 180%;
        letter-spacing: 0.02em;
        text-decoration-line: underline;
        color: #696984;
        margin-top: 28px;
    }




    .topNews {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;

        @media (max-width: 1200px) {
            justify-content: center;
        }

        @media (max-width: 375px) {
            flex-direction: column;
        }
    }

    .leftPart {
        position: relative;

        @media (max-width: 375px) {
            max-width: 80%;
            margin: 0 auto;
        }

    }

    .topNewsImg {
        max-width: 250px;

        @media (max-width: 576px) {
            max-width: 200px;
        }

        @media (max-width: 375px) {
            max-width: 100%;
            text-align: center;
            margin-bottom: 10px;
        }
    }

    .topNewsStatus {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 27px;
        letter-spacing: 0.02em;
        color: ${colors.darkTextBlue};
        background: #F4C467;
        border-radius: 80px;
        padding: 4px 16px;
        position: absolute;
        top: 132px;
        right: 15px;
        /* bottom: 0; */

        @media (max-width:576px) {
            top: 91px;
        }

        @media (max-width: 375px) {
            top: 146px;
        }
    }

    .topNewsTitle {
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 180%;
        max-width: 366px;
        color: ${colors.darkTextBlue};
    }

    .topNewsText {
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #696984;
        margin-top: 20px;
        max-width: 360px;

        @media (max-width:576px) {
           display: none;
        }
    }

    .rightPart {
        margin-left: 25px;
    }


`

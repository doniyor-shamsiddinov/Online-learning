import styled from "styled-components"
import { colors } from "../../../../assets/styles/colors"

export const NewsWrapper = styled.div`
    margin-top: 150px;
    margin-bottom: 150px;

    @media (max-width:992px) {
        margin-top: 60px;
    }

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
        padding: 2px 25px;
        margin-top: 30px;
        display: inline-block;

        @media (max-width: 576px) {
            font-size: 16px;
        }
        @media (max-width: 375px) {
            font-size: 14px;
        }
    }

    .newsCardTitle {
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 180%;
        color: ${colors.darkTextBlue};
        margin-top: 20px;
        max-width: 550px;

        @media (max-width: 576px) {
            font-size: 20px;
        }
        @media (max-width: 375px) {
            font-size: 18px;
        }
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

        @media (max-width: 576px) {
            font-size: 16px;
        }
        @media (max-width: 375px) {
            font-size: 14px;
        }
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

        @media (max-width: 576px) {
            font-size: 18px;
        }
        @media (max-width: 375px) {
            font-size: 16px;
        }
    }




    .topNews {
        display: flex;
        margin-bottom: 40px;
        align-items: center;

        @media (max-width: 1200px) {
            justify-content: center;
        }

        @media (max-width: 576px) {
            flex-direction: column;
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
        margin-right: 20px;

        @media (max-width: 576px) {
            max-width: 100%;
            margin: 0 auto;
        }

        @media (max-width: 375px) {
            max-width: 100%;
            text-align: center;
            margin-bottom: 10px;
        }
    }

    .topNewsStatus {
        position: absolute;
        bottom: 20px;
        right: 60px;
        font-size: 18px;
        padding: 2px 5px;
        display: inline-block;
        padding: 5px 8px;
        background-color: #F4C467;
        text-transform: uppercase;
        border-radius: 80px;
        font-weight: 500;
        font-size: 16px;
        line-height: 27px;
        letter-spacing: 0.02em;
        color: #252641;

        @media (max-width:1200px) {
            right: 30px;
            line-height: 18px;
            font-size: 12px;
        }
        @media (max-width:992px) {
            right: 30px;
            line-height: 18px;
            font-size: 12px;
        }
        /* @media (max-width:576px) {
            top: 91px;
        }

        @media (max-width: 375px) {
            top: 146px;
        } */
    }

    .topNewsTitle {
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 180%;
        max-width: 366px;
        color: ${colors.darkTextBlue};

        @media (max-width:768px) {
           font-size: 14px;
        }
        @media (max-width:576px) {
            text-align: center;
            margin-top: 10px;
        }
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

        @media (max-width:768px) {
            margin-top: 5px;
            max-width: 360px;
            font-size: 13px;


        }
        @media (max-width:576px) {
            text-align: center;
           /* display: none; */
        }
    }

    .rightPart {
        margin-left: 25px;
    }


`

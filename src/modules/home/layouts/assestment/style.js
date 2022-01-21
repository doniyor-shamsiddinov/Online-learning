import styled from "styled-components"
import { colors } from "../../../../assets/styles/colors"

export const AssessmentsWrapper = styled.div`
    margin-top: 190px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;

    .assestmentImg {
        width: 550px;
    }

    .toolTitle {
        font-style: normal;
        font-weight: bold;
        font-size: 35px;
        line-height: 180%;
        color: ${colors.darkTextBlue};
        max-width: 251px;       
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
        max-width: 476px;
    }

    @media (max-width: 1200px) {
        .toolTitle {
            font-size: 30px;
        }

        .tooltext {
            font-size: 18px;
        }
    }

    @media (max-width: 992px) {
        flex-direction: column;
        margin-top: 200px;

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
        margin-top: 70px;
        .assestmentImg {
            display: none;
        }
        
    }

`

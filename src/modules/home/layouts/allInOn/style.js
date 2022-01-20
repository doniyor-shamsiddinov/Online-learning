import styled from "styled-components"
import { colors } from "../../../../assets/styles/colors"

export const AllInOneWrapper = styled.div`

    .allInTitle {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 180%;
        color: ${colors.darkTextBlue};
        text-align: center;
    }

    .orange {
        color: ${colors.orange};
    }
    margin-top: 140px;
    .allInCardWrap {
        display: flex;
        justify-content: space-between;
        margin-top: 80px;
    }
`

import styled from "styled-components"
import { colors } from "../../../../assets/styles/colors"

export const ClientWrapper = styled.div`
    margin-top: 80px;
    .clientsTitle {
        text-align: center;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 160%;
        color: #696984;
    }

    .clientIcons {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        
        .clientLink:not(:last-child) {
            display: block;
            margin-right: 65px;
            .amazon {
                margin-top: 25px;
            }
        }

        @media (max-width: 375px) {
            .clientLink:not(:last-child) {
                margin-right: 0;
                margin-bottom: 20px;
            }
        }
    }
`

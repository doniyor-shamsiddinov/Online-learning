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
        padding: 0 15px;

        
        .clientIcon:not(:last-child) {
            display: block;
            margin-right: 65px;
            
        }

        .amazon {
            margin-top: 25px;
        }

        @media (max-width: 768px) {
            .clientIcon:not(:last-child) {
                margin: 0 auto;
                margin-bottom: 20px;
            }
    
            .clientIcon {
                margin: 0 auto;
            }
        }

        @media (max-width: 576px) {
            .clientIcon:not(:last-child) {
                margin: 0 auto;
                margin-bottom: 20px;
            }
    
            .clientIcon {
                margin: 0 auto;
            }
        }

        @media (max-width: 375px) {
            .clientIcon:not(:last-child) {
                margin: 0 auto;
                margin-bottom: 20px;
            }
    
            .clientIcon {
                margin: 0 auto;
                margin-bottom: 20px;
            }
        }
    }

`

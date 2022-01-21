import styled from "styled-components"
import { colors } from "../../../../assets/styles/colors"

import FeatureBg from '../../../../assets/images/features.png'
import Icon1 from '../../../../assets/icons/featureIcon.svg'
import Icon2 from '../../../../assets/icons/featureIcon2.svg'
import Icon3 from '../../../../assets/icons/featureIcon3.svg'


export const FeaturesWrapper = styled.div`
    .featuresTitle {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 180%;
        color: ${colors.darkTextBlue};
        text-align: center;
        margin-top: 160px;        
        .orange {
            color: ${colors.orange};
        }
    }

    .featuresSubTitle {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 180%;
        text-align: center;
        color: #696984;
        margin-top: 20px;
    }

    .forReverse {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse
        
    }

    .featureWrap {
        margin-top: 180px;
        max-width: 500px;
    }

    .featureImg {
        max-width: 700px;
        margin-top: 75px;
    }

    .featureTitle {
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 160%;
        color: ${colors.darkTextBlue};

        .orange {
            color: ${colors.orange};
        }
    }

    .featureSubTitle {
        font-style: normal;
        font-weight: normal;
        font-size: 19px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #696984;
        padding-left: 102px;
        margin-top: 40px;
    }

    .icon1 {
        position: relative;
        &:before {
            content: '';
            background-image: url('${Icon1}');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: left top;
            position: absolute;
            top: -17px;
            left: -35px;
            width: 130px;
            height: 130px;
            z-index: -1;
        }
    }
    .icon2 {
        position: relative;
        &:before {
            content: '';
            background-image: url('${Icon2}');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: left top;
            position: absolute;
            top: -17px;
            left: -35px;
            width: 130px;
            height: 130px;
            z-index: -1;
        }
    }
    .icon3 {
        position: relative;
        &:before {
            content: '';
            background-image: url('${Icon3}');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: left top;
            position: absolute;
            top: -17px;
            left: -35px;
            width: 130px;
            height: 130px;
            z-index: -1;
        }
    }

    @media (max-width: 1200px) {
        .featureWrap {
            margin-top: 80px;
        }
        .featureImg {
            max-width: 434px;
            margin-top: 75px;
        }

        .featureTitle {
            font-size: 28px;
        }

        .featureSubTitle {
            font-size: 17px;
            padding-left: 102px;
            margin-top: 40px;
        }
    }

    @media (max-width: 992px) {
        .forReverse {
            flex-direction: column;
        }

        .featureWrap {
            text-align: center;
            margin-top: 80px;
        }

        .featureImg {
            max-width: 530px;
        }
    }

    @media (max-width: 576px) {
        .featuresTitle {
            font-size: 30px;
            margin-top: 100px;
        }

        .featuresSubTitle {
            font-size: 20px;
            margin-top: 20px;
        }

        .featureImg {
            display: none;
        }
        
        .featureTitle {
            font-size: 24px;
        }

        .featureSubTitle {
            font-size: 16px;
            padding-left: 75px;
        }
    }
`

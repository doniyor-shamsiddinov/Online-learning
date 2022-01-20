import { HeroWrapper } from './style'
import { colors } from '../../../../assets/styles/colors'
import Button from '../../../../components/button'
import CircleBtn from '../../components/circleBtn'

export default function Hero () {
    return (
        <HeroWrapper className="heroWrapper">
            <div className="heroInner container">
                <h1 className="heroTitle"> <span className="distinctive">Studying </span>Online is now much easier</h1>
                <p className="heroSubTitle">Skilline is an interesting platform that will teach you in more an interactive way</p>
                <div className="heroBtns">
                    <Button
                        name={"Join for free"}
                        className="SignUp"
                        propsColor={colors.white}
                        propsBackGround={colors.orange}
                        borderColor={"transparent"}
                        borderWeight={0}
                        opacity={0.7}
                    />
                    <div className="circleWrap">
                        <CircleBtn className="circleBtn"/>
                        <p className="playText">Watch how it works</p>
                    </div>
                </div>
            </div>
        </HeroWrapper>
    )
}
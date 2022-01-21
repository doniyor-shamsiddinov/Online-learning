import { FeedbackWrapper } from './style'
import Carousel from '../../../../assets/images/carousel.png'
import Button from '../../../../components/button'
import { colors } from '../../../../assets/styles/colors'


export default function Feedback () {
    return (
        <FeedbackWrapper className='container'>
            <div className="innerDiv">
                <div className="contentWrap">
                    <p className="integration">TESTIMONIAL</p>
                    <h2 className="toolTitle">What They Say?</h2>
                    <p className="tooltext">Skilline has got more than 100k positive ratings from our users around the world.</p>
                    <p className="tooltext">Some of the students and teachers were greatly helped by the Skilline.</p>
                    <p className="tooltext">Are you too? Please give your assessment</p>
                    <div className="moreFeaturesWrap">
                        <Button
                            name={"Write your assessment"}
                            className="moreFeatures"
                            propsColor={colors.orange}
                            propsBackGround={"transparent"}
                            propsBorder={colors.orange}
                            borderWeight={"1px"}
                            opacity={0.7}
                        />
                    </div>
                </div>
                <img src={Carousel} alt="image" className="assestmentImg" />
            </div>
        </FeedbackWrapper>
    )
}
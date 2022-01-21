import { CloudsWrapper } from './style'
import CloudsImg from '../../../../assets/images/clouds.png'
import Button from '../../../../components/button'
import { colors } from '../../../../assets/styles/colors'


export default function Clouds () {
    return (
        <CloudsWrapper className='container'>
            <div className="innerDiv">
                <div className="contentWrap">
                    <p className="integration">INTEGRATIONS</p>
                    <h2 className="toolTitle">200+ educational tools and platform <span className="orange">integrations</span></h2>
                    <p className="tooltext">Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
                    <div className="moreFeaturesWrap">
                        <Button
                            name={"See All Integrations"}
                            className="moreFeatures"
                            propsColor={colors.orange}
                            propsBackGround={"transparent"}
                            propsBorder={colors.orange}
                            borderWeight={"1px"}
                            opacity={0.7}
                        />
                    </div>
                </div>
                <img src={CloudsImg} alt="image" className="assestmentImg" />
            </div>
        </CloudsWrapper>
    )
}
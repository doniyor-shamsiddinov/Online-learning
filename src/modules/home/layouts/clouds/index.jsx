import { CloudsWrapper } from './style'
import CloudsImg from '../../../../assets/images/clouds.png'
import Cloud1 from '../../../../assets/icons/cloud1.png'
import Cloud2 from '../../../../assets/icons/cloud2.png'
import Cloud3 from '../../../../assets/icons/cloud3.png'
import Cloud4 from '../../../../assets/icons/cloud4.png'
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
                <ul className="iconsWrap">
                    <li className="iconItem">
                        <img src={Cloud1} alt="icon" className="cloudIcon" />
                    </li>
                    <li className="iconItem">
                        <img src={Cloud2} alt="icon" className="cloudIcon" />
                    </li>
                    <li className="iconItem">
                        <img src={Cloud3} alt="icon" className="cloudIcon" />
                    </li>
                    <li className="iconItem">
                        <img src={Cloud4} alt="icon" className="cloudIcon" />
                    </li>
                </ul>
            </div>
        </CloudsWrapper>
    )
}
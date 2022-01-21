import { OneOnOneWrapper } from './style'
import OneOnOneImg from '../../../../assets/images/oneOn.png'
import Button from '../../../../components/button'
import { colors } from '../../../../assets/styles/colors'


export default function OneOnOne () {
    return (
        <OneOnOneWrapper className='container'>
            <div className="innerDiv">
                <div className="contentWrap">
                    <h2 className="toolTitle">One-on-One  <span className="orange">Discussions</span></h2>
                    <p className="tooltext">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
                </div>
                <img src={OneOnOneImg} alt="image" className="assestmentImg" />
            </div>
                <div className="moreFeatures">
                <Button
                    name={"See more features"}
                    className=""
                    propsColor={colors.orange}
                    propsBackGround={"transparent"}
                    propsBorder={colors.orange}
                    borderWeight={"1px"}
                    opacity={0.7}
                />
                </div>
        </OneOnOneWrapper>
    )
}
import { FeaturesWrapper } from './style'

import FeatureImg from '../../../../assets/images/features.png'

export default function Features () {
    return (
        <FeaturesWrapper className='container'>
            <h2 className="featuresTitle">Our <span className="orange">Features</span></h2>
            <p className="featuresSubTitle">This very extraordinary feature, can make learning activities more efficient</p>
            <div className="forReverse">
                <div className="featureWrap">
                    <h2 className="featureTitle">A <span className="orange">user interface</span> designed for the classroom</h2>
                    <p className="featureSubTitle icon1">
                        Teachers don’t get lost in the grid view and have a dedicated Podium space.
                    </p>
                    <p className="featureSubTitle icon2">
                        TA’s and presenters can be moved to the front of the class.
                    </p>
                    <p className="featureSubTitle icon3">
                        Teachers can easily see all students and class data at one time.
                    </p>
                </div>
                <img src={FeatureImg} alt="img" className="featureImg" />
            </div>
        </FeaturesWrapper>
    )
}
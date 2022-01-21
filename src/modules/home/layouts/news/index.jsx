import { NewsWrapper } from './style'
import { colors } from '../../../../assets/styles/colors'

import CardImg from '../../../../assets/images/newsCardImg.png'
import CardImg2 from '../../../../assets/images/newsCardImg2.png'
import CardImg3 from '../../../../assets/images/newsCardImg3.png'
import CardImg4 from '../../../../assets/images/newsCardImg4.png'


export default function News () {
    return (
        <NewsWrapper className='container'>
           <h2 className="newsTitle">Lastest News and Resources</h2>
           <p className="newsSubTitle">See the developments that have occurred to Skillines in the world</p>
           <div className="newsWrap">
                <a href="#" className="moreNews">
                    <img src={CardImg} alt="image" className="moreNewsImg" /> <br/>
                    <p className="newsCardStatus">NEWS</p>
                    <p className="newsCardTitle">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                    <p className="newsCardText">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <a href="#" className="newsCardLink">Read more</a>
                </a>

                <div className="topNewsWrap">
                    <a href="#" className="topNews">
                        <div className="leftPart">
                            <img src={CardImg2} alt="image" className="topNewsImg" />
                            <span className="topNewsStatus">PRESS RELEASE</span>
                        </div>
                        <div className="rightPart">
                            <p className="topNewsTitle">Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</p>
                            <p className="topNewsText">Class Technologies Inc., the company that created Class,...</p>
                        </div>
                    </a>
                    <a href="#" className="topNews">
                        <div className="leftPart">
                            <img src={CardImg3} alt="image" className="topNewsImg" />
                            <span className="topNewsStatus">NEWS</span>
                        </div>
                        <div className="rightPart">
                            <p className="topNewsTitle">Zoom’s earliest investors are betting millions on a better Zoom for schools</p>
                            <p className="topNewsText">Zoom was never created to be a consumer product. Nonetheless, the...</p>
                        </div>
                    </a>
                    <a href="#" className="topNews">
                        <div className="leftPart">
                            <img src={CardImg4} alt="image" className="topNewsImg" />
                            <span className="topNewsStatus">NEWS</span>
                        </div>
                        <div className="rightPart">
                            <p className="topNewsTitle">Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</p>
                            <p className="topNewsText">This year, investors have reaped big financial returns from betting on Zoom...</p>
                        </div>
                    </a>
                </div>
           </div>
        </NewsWrapper>
    )
}
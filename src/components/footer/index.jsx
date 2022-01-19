import { FooterWrapper } from './style'
import FooterLogo from '../../assets/icons/footerLogo.svg'
import Button from '../button'
import { colors } from '../../assets/styles/colors'

export default function Footer () {
    return (
        <FooterWrapper>
            <div className="footerInner container">
                <div className="footerLogo">
                    <img src={FooterLogo} alt="footer-logo-image" className="footerLogotip" />
                    <p className="virtualClass">
                        Virtual Class for Zoom
                    </p>
                </div>

                <div className="footerSubscribe">
                    <p className="subscribeTitle">
                        Subscribe to get our Newsletter
                    </p>

                    <div className="subscribeInputWrap">
                        <input type="email" className="subscribeInput" placeholder="Your Email" />
                            <Button
                                name={"Subscribe"}
                                className="subscribeBtn"
                                propsColor={colors.white}
                                propsBackGround={"linear-gradient(105.5deg, #545AE7 19.57%, #393FCF 78.85%)"}
                                borderColor={"transparent"}
                                borderWeight={0}
                                opacity={0.7}
                            />
                    </div>

                    <div className="footerCopyRight">
                        <div className="copyRightTitles">
                            <p className="copyRightTitle">Careers</p>
                            <p className="copyRightTitle">Privacy Policy</p>
                            <p className="copyRightTitle">Terms & Conditions</p>
                        </div>
                        <p className="copyRight">© 2021 Class Technologies Inc.</p>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}
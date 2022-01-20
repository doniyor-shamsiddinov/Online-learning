import { ClientWrapper } from './style'
import { colors } from '../../../../assets/styles/colors'

import Client from '../../../../assets/icons/client.svg'
import Client2 from '../../../../assets/icons/client2.svg'
import Client3 from '../../../../assets/icons/client3.svg'
import Client4 from '../../../../assets/icons/client4.svg'
import Client5 from '../../../../assets/icons/client5.svg'
import Client6 from '../../../../assets/icons/client6.svg'

export default function Clients () {
    return (
        <ClientWrapper>
            <h2 className="clientsTitle">
                Trusted by 5,000+ Companies Worldwide
            </h2>
            <div className="clientIcons">
                <a href="https://www.google.com/" target="_blank" className="clientLink">
                    <img src={Client} alt="icon" className="clientIcon" />
                </a>
                <a href="https://www.netflix.com/uz-ru/" target="_blank" className="clientLink">
                    <img src={Client2} alt="icon" className="clientIcon" />
                </a>
                <a href="https://www.airbnb.com/" className="clientLink" target="_blank">
                    <img src={Client3} alt="icon" className="clientIcon" />
                </a>
                <a href="https://www.amazon.com/" className="clientLink" target="_blank">
                    <img src={Client4} alt="icon" className="clientIcon amazon" />
                </a>
                <a href="https://www.facebook.com/" className="clientLink" target="_blank">
                    <img src={Client5} alt="icon" className="clientIcon" />
                </a>
                <a href="https://www.grab.com/sg/" className="clientLink" target="_blank">
                    <img src={Client6} alt="icon" className="clientIcon" />
                </a>
            </div>
        </ClientWrapper>
    )
}
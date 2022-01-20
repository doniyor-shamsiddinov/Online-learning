import { AllInOneWrapper } from './style'
import { colors } from '../../../../assets/styles/colors'

import Card from '../../components/allInOneCard'
import Icon from '../../../../assets/icons/allInOne1.svg'
import Icon2 from '../../../../assets/icons/allInOne2.svg'
import Icon3 from '../../../../assets/icons/allInOne3.svg'


export default function AllInOne () {
    return (
        <AllInOneWrapper className='container'>
            <h2 className="allInTitle">All-In-One <span className="orange">Cloud Software.</span></h2>
            <div className="allInCardWrap row justify-content-around">
                <Card className="col-xl-4 col-lg-4 col-md-12 mb-sm-5 col-sm-12"
                    icon={Icon}
                    title={"Online Billing, Invoicing, & Contracts"}
                    text={"Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"}
                />
                <Card className="col-xl-4 col-lg-4 col-md-12 mb-sm-5 col-sm-12"
                    icon={Icon2}
                    title={"Easy Scheduling & Attendance Tracking"}
                    text={"Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"}
                />
                <Card className="col-xl-4 col-lg-4 col-md-12 mb-sm-5 col-sm-12"
                    icon={Icon3}
                    title={"Customer Tracking"}
                    text={"Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization "}
                />
            </div>
        </AllInOneWrapper>
    )
}
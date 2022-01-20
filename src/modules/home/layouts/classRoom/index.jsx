import { ClassRoomWrapper } from './style'
import CircleBtn from '../../components/circleBtn'

export default function ClassRoom () {
    return (
        <ClassRoomWrapper className='container'>
            <div className="classRoomLeft">
                <h2 className="classRoomTitle">Everything you can do in a physical classroom, <span className="orange">you can do with Skilline</span></h2>
                <p className="classRoomText">Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <a href="#" className="classRoomLink">Learn more</a>
            </div>
            <div className="classRoomRight">
                <div className="classRoomIframe">
                    <CircleBtn className="classRoomCircleBtn"/>
                </div>
            </div>
        </ClassRoomWrapper>
    )
}
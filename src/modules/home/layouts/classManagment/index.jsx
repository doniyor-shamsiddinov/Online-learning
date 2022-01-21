import { ClassManagmentWrapper } from './style'
import ClassManagmentImg from '../../../../assets/images/classManagment.png'


export default function ClassManagment () {
    return (
        <ClassManagmentWrapper className='container'>
            <div className="contentWrap">
                <h2 className="toolTitle"><span className="orange">Class Management </span> Tools for Educators</h2>
                <p className="tooltext">Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
            </div>
            <img src={ClassManagmentImg} alt="image" className="assestmentImg" />
        </ClassManagmentWrapper>
    )
}
import { AssessmentsWrapper } from './style'
import AssessmentsImg from '../../../../assets/images/assestment.png'


export default function Assessments () {
    return (
        <AssessmentsWrapper className='container'>
            <div className="contentWrap">
                <h2 className="toolTitle">Assessments, <span className="orange">Quizzes,</span> Tests</h2>
                <p className="tooltext">Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.</p>
            </div>
            <img src={AssessmentsImg} alt="image" className="assestmentImg" />
        </AssessmentsWrapper>
    )
}
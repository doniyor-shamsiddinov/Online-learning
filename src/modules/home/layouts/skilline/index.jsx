import { SkillineWrapper } from './style'
import { colors } from '../../../../assets/styles/colors'
import Button from '../../../../components/button'

export default function Skilline () {
    return (
        <SkillineWrapper>
            <h2 className="skillineTitle">What is <span className="orange">Skilline?</span></h2>
            <p className="skillineText">
                Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
            </p>

            <div className="skillineCards">
                <div className="forInstructors">
                    <div className="contentCentered">
                        <p className="forInstructorsTitle">FOR INSTRUCTORS</p>
                        <Button
                            name={"Start a class today"}
                            className="skillineBtn"
                            propsColor={colors.white}
                            propsBackGround={"transparent"}
                            propsBorder={colors.white}
                            borderWeight={"1px"}
                            opacity={0.7}
                            hoverBackground={"rgba(35, 189, 238, 0.9)"}
                            hoverBorder={"rgba(35, 189, 238, 0.9)"}
                            opacity={1}
                        />
                    </div>
                </div>
                <div className="forStudents">
                    <div className="contentCentered">
                        <p className="forStudentsTitle">FOR STUDENTS</p>
                        <Button
                            name={"Enter access code"}
                            className="skillineBtn"
                            propsColor={colors.white}
                            propsBackGround={"transparent"}
                            propsBorder={colors.white}
                            borderWeight={"1px"}
                            opacity={0.7}
                            hoverBackground={"rgba(35, 189, 238, 0.9)"}
                            hoverBorder={"rgba(35, 189, 238, 0.9)"}
                            opacity={1}
                        />
                    </div>
                </div>
            </div>
        </SkillineWrapper>
    )
}
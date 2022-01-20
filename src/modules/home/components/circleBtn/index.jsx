import { CircleBtnWrapper } from './style'
import PlayBtn from '../../../../assets/icons/play.svg'

export default function CircleBtn (props) {
    const { className } = props
    return (
        <CircleBtnWrapper className={className}>
            <img src={PlayBtn} alt="play-img" className="playImg"/>
        </CircleBtnWrapper>
    )
}
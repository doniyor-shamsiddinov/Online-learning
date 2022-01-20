import { CircleBtnWrapper } from './style'
import PlayBtn from '../../../../assets/icons/play.svg'

export default function CircleBtn () {
    return (
        <CircleBtnWrapper>
            <img src={PlayBtn} alt="play-img" className="playImg"/>
        </CircleBtnWrapper>
    )
}
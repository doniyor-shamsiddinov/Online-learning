import { InOneCardWrapper } from './style'

export default function InOneCard (props) {
    const { icon, title, text, className } = props
    return (
        <InOneCardWrapper className={className}>
            <div className='allInOneCardInner'>
                <img src={icon} alt="icon" className="inOneCardImg" />
                <h3 className="inOneCardTitle">{title}</h3>
                <p className="inOneCardText">{text}</p>
            </div>
        </InOneCardWrapper>
    )
}
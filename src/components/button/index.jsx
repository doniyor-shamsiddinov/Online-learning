import { ButtonWrapper } from './style'

export default function ButtonComponent (props) {
    const { name, propsBackGround, hoverBackground, hoverColor, propsColor, onClick, className, propsBorder,hoverBorder,borderWeight, opacity="1", boxShadow } = props
    return (
       <ButtonWrapper
           className={className}
           onClick={onClick}
           propsColor={propsColor}
           propsBackGround={propsBackGround}
           hoverColor={hoverColor}
           hoverBackground={hoverBackground}
           borderColor={propsBorder}
           borderWeight={borderWeight}
           hoverBorder={hoverBorder}
           opacity={opacity}
           boxShadow={boxShadow}
       >{name}</ButtonWrapper>
    )
}
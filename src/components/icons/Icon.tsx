import styled from 'styled-components';
import SvgSprite from '../../accets/svg-sprite.svg';
import { theme } from '../../styles/Themes';

type IconsProps = {
    iconId: string;
    width?: string;
    height?: string;
    viewbox?: string;
    fill?: string;
}

export const Icon = (props: IconsProps) =>{
    return(
        <StyledSvg xmlns="http://www.w3.org/2000/svg" fill={props.fill || theme.color.font} width={props.width || "32"} height={props.height || "32"} viewBox={props.viewbox || '0,0,24,24'}>
            <use xlinkHref={`${SvgSprite}#${props.iconId}`} />
        </StyledSvg>
    )
}

const StyledSvg = styled.svg`
    transition: 0.2s;
    &:hover{
        fill: ${theme.color.hoverFont};
    }
`
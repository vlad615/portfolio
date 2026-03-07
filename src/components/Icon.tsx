import SvgSprite from '../accets/svg-sprite.svg';

type IconsProps = {
    iconId: string;
    width: string;
    heigth: string;
}

export const Icon = (props: IconsProps) =>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width || "32"} height={props.heigth || "32"}>
            <use xlinkHref={`${SvgSprite}#${props.iconId}`} />
        </svg>
    )
}
import { theme } from "./Themes";

type FrontProps = {
    weight?: number;
    color?: string;
    lineHeight?: number;
    maxSize?: number;
    minSize?: number;
}

export const font = (props: FrontProps) => `
    font-weight: ${props.weight || 400};
    color: ${props.color || theme.color.font};
    line-height: ${props.lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1370 - 360)*(${props.maxSize} - ${props.minSize}) + ${props.minSize}px);
`
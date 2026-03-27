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
    font-size: clamp(${props.minSize}px, 12px + 1vw, ${props.maxSize}px);;
`
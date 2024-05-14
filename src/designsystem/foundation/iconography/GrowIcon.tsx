import styled, {RuleSet} from "styled-components";
import {IconStyles, IconType} from "./IconType";

interface GrowIconProps {
    type: IconType,
    size: number,
    tint: string,
    customStyle: RuleSet
}

export const GrowIcon = (
    {
        type,
        size,
        tint,
        customStyle
    }: GrowIconProps
) => {

    const icon = IconStyles[type];

    return (
        <StyledSvg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         customStyle={customStyle}>
            {icon}
        </StyledSvg>
    )
};

export const StyledSvg = styled.svg<{ customStyle: RuleSet }>`
    ${({customStyle}) => customStyle}
`;
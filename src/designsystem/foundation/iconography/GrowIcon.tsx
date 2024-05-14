import React from "react";

export enum IconType {
    Send = "M3.42921 20.1759C3.33788 20.5869 3.76434 20.9198 4.14091 20.7316L20.3069 12.6486C20.6754 12.4643 20.6754 11.9384 20.3069 11.7541L4.14091 3.67113C3.76434 3.48285 3.33788 3.81582 3.42921 4.22681L4.82569 10.011C4.91764 10.4247 5.26041 10.7356 5.68115 10.7867L12.8774 12.1007C12.8825 12.1016 12.8882 12.1021 12.8934 12.1023C13.4979 12.1179 13.0018 12.2864 12.8851 12.3006L5.68115 13.616C5.26041 13.6671 4.91764 13.978 4.82569 14.3917L3.42921 20.1759Z"
}

interface GrowIconProps {
    type: IconType,
    width: string,
    height: string,
    tint: string
}

const GrowIcon = (
    {
        type,
        width,
        height,
        tint,
        ...props
    }: GrowIconProps
) => {
    return (
        <svg
            width={width}
            height={height}
            fill={tint}
            viewBox={"0 0 24 24"}
            {...props}
        >
            <path d={type}/>
        </svg>
    );
};

export default GrowIcon;
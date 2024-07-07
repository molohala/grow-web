import {useTheme} from "styled-components";

import GrowIcon, {IconType} from "@designsystem/foundation/iconography/GrowIcon";
import {AvatarImage, GrowAvatarStyle} from "@designsystem/component/avatar/GrowAvatar.style";

export enum AvatarType {
    ExtraSmall,
    Small,
    Medium,
    Large,
    ExtraLarge,
    XXL
}

interface GrowAvatarProps {
    type: AvatarType
    url?: string
}

const GrowAvatar = (
    {
        type,
        url
    }: GrowAvatarProps
) => {

    const theme = useTheme();

    let size;
    switch (type) {
        case AvatarType.ExtraSmall:
            size = 16;
            break;
        case AvatarType.Small:
            size = 24;
            break;
        case AvatarType.Medium:
            size = 32;
            break;
        case AvatarType.Large:
            size = 36;
            break;
        case AvatarType.ExtraLarge:
            size = 64
            break;
        case AvatarType.XXL:
            size = 128;
            break;
    }

    return (
        <>
            {!url
                ? <GrowAvatarStyle size={size}>
                    <GrowIcon type={IconType.Person} size={size * 0.625} tint={theme.avatarLabel}/>
                </GrowAvatarStyle>
                : <AvatarImage src={url} size={size}/>
            }
        </>
    );
};

export default GrowAvatar;
import {Column} from "@designsystem/util/StyledFlex";
import {GrowPalette} from "@designsystem/foundation/color/GrowPalette";
import GrowIcon, {IconType} from "@designsystem/foundation/iconography/GrowIcon";
import {GrowLightScheme} from "@designsystem/foundation/color/GrowColorSementic";

const IconPreview = () => {
    return (
        <Column>
            <GrowIcon type={IconType.AddFill} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.AddLine} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.AddRing} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.ArrowDown} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.ArrowLeft} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.ArrowRight} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.ArrowUp} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Chat} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Check} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.CloseFill} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.CLoseLine} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.CloseRing} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.DetailHorizontal} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.DetailVertical} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.ExpandDown} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.ExpandLeft} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.ExpandRight} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.ExpandUp} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.ExpandStopDown} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.ExpandStopLeft} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.ExpandStopRight} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.ExpandStopUp} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.HeartFill} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Hide} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Home} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Logout} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Moon} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Notification} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Person} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Ping} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Radio} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.RadioUnselected} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Send} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Setting} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Show} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Write} tint={GrowPalette.Primary70} size={30}/>
            <GrowIcon type={IconType.Github} tint={GrowLightScheme.github} size={30}/>
            <GrowIcon type={IconType.Baekjoon} tint={GrowLightScheme.baekjoon} size={30}/>
        </Column>
    );
};

export default IconPreview;

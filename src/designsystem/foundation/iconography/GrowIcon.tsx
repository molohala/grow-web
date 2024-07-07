import React from "react";
import AddFill from "@designsystem/foundation/iconography/icons/AddFill";
import AddLine from "@designsystem/foundation/iconography/icons/AddLine";
import AddRing from "@designsystem/foundation/iconography/icons/AddRing";
import ArrowDown from "@designsystem/foundation/iconography/icons/ArrowDown";
import ArrowLeft from "@designsystem/foundation/iconography/icons/ArrowLeft";
import ArrowRight from "@designsystem/foundation/iconography/icons/ArrowRight";
import ArrowUp from "@designsystem/foundation/iconography/icons/ArrowUp";
import Chat from "@designsystem/foundation/iconography/icons/Chat";
import Check from "@designsystem/foundation/iconography/icons/Check";
import CloseFill from "@designsystem/foundation/iconography/icons/CloseFill";
import CloseRing from "@designsystem/foundation/iconography/icons/CloseRing";
import DetailHorizontal from "@designsystem/foundation/iconography/icons/DetailHorizontal";
import CloseLine from "@designsystem/foundation/iconography/icons/CloseLine";
import DetailVertical from "@designsystem/foundation/iconography/icons/DetailVertical";
import ExpandDown from "@designsystem/foundation/iconography/icons/ExpandDown";
import ExpandLeft from "@designsystem/foundation/iconography/icons/ExpandLeft";
import ExpandRight from "@designsystem/foundation/iconography/icons/ExpandRight";
import ExpandStopDown from "@designsystem/foundation/iconography/icons/ExpandStopDown";
import Hide from "@designsystem/foundation/iconography/icons/Hide";
import ExpandStopLeft from "@designsystem/foundation/iconography/icons/ExpandStopLeft";
import ExpandStopRight from "@designsystem/foundation/iconography/icons/ExpandStopRight";
import ExpandStopUp from "@designsystem/foundation/iconography/icons/ExpandStopUp";
import ExpandUp from "@designsystem/foundation/iconography/icons/ExpandUp";
import HeartFill from "@designsystem/foundation/iconography/icons/HeartFill";
import Home from "@designsystem/foundation/iconography/icons/Home";
import Logout from "@designsystem/foundation/iconography/icons/Logout";
import Moon from "@designsystem/foundation/iconography/icons/Moon";
import Notification from "@designsystem/foundation/iconography/icons/Notification";
import Person from "@designsystem/foundation/iconography/icons/Person";
import Ping from "@designsystem/foundation/iconography/icons/Ping";
import Setting from "@designsystem/foundation/iconography/icons/Setting";
import Show from "@designsystem/foundation/iconography/icons/Show";
import Write from "@designsystem/foundation/iconography/icons/Write";
import Radio from "@designsystem/foundation/iconography/icons/Radio";
import RadioUnselected from "@designsystem/foundation/iconography/icons/RadioUnselected";
import Send from "@designsystem/foundation/iconography/icons/Send";
import Github from "@designsystem/foundation/iconography/icons/Github";
import Baekjoon from "@designsystem/foundation/iconography/icons/Baekjoon";

export enum IconType {
    AddFill,
    AddLine,
    AddRing,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    Chat,
    Check,
    CloseFill,
    CLoseLine,
    CloseRing,
    DetailHorizontal,
    DetailVertical,
    ExpandDown,
    ExpandLeft,
    ExpandRight,
    ExpandStopDown,
    ExpandStopLeft,
    ExpandStopRight,
    ExpandStopUp,
    ExpandUp,
    HeartFill,
    Hide,
    Home,
    Logout,
    Moon,
    Notification,
    Person,
    Ping,
    Radio,
    RadioUnselected,
    Send,
    Setting,
    Show,
    Write,
    Github,
    Baekjoon
}

interface GrowIconProps {
    type: IconType,
    tint?: string,
    size?: number
}

const GrowIcon = (
    {
        type,
        tint = 'black',
        size = 24,
    }: GrowIconProps
) => {
    switch (type) {
        case IconType.AddFill:
            return <AddFill fill={tint} width={size} height={size}/>;
        case IconType.AddLine:
            return <AddLine fill={tint} width={size} height={size}/>;
        case IconType.AddRing:
            return <AddRing fill={tint} width={size} height={size}/>;
        case IconType.ArrowDown:
            return <ArrowDown fill={tint} width={size} height={size}/>;
        case IconType.ArrowLeft:
            return <ArrowLeft fill={tint} width={size} height={size}/>;
        case IconType.ArrowRight:
            return <ArrowRight fill={tint} width={size} height={size}/>;
        case IconType.ArrowUp:
            return <ArrowUp fill={tint} width={size} height={size}/>;
        case IconType.Chat:
            return <Chat fill={tint} width={size} height={size}/>;
        case IconType.Check:
            return <Check fill={tint} width={size} height={size}/>;
        case IconType.CloseFill:
            return <CloseFill fill={tint} width={size} height={size}/>;
        case IconType.CLoseLine:
            return <CloseLine fill={tint} width={size} height={size}/>;
        case IconType.CloseRing:
            return <CloseRing fill={tint} width={size} height={size}/>;
        case IconType.DetailHorizontal:
            return <DetailHorizontal fill={tint} width={size} height={size}/>;
        case IconType.DetailVertical:
            return <DetailVertical fill={tint} width={size} height={size}/>;
        case IconType.ExpandDown:
            return <ExpandDown fill={tint} width={size} height={size}/>;
        case IconType.ExpandLeft:
            return <ExpandLeft fill={tint} width={size} height={size}/>;
        case IconType.ExpandRight:
            return <ExpandRight fill={tint} width={size} height={size}/>;
        case IconType.ExpandStopDown:
            return <ExpandStopDown fill={tint} width={size} height={size}/>;
        case IconType.ExpandStopLeft:
            return <ExpandStopLeft fill={tint} width={size} height={size}/>;
        case IconType.ExpandStopRight:
            return <ExpandStopRight fill={tint} width={size} height={size}/>;
        case IconType.ExpandStopUp:
            return <ExpandStopUp fill={tint} width={size} height={size}/>;
        case IconType.ExpandUp:
            return <ExpandUp fill={tint} width={size} height={size}/>;
        case IconType.HeartFill:
            return <HeartFill fill={tint} width={size} height={size}/>;
        case IconType.Hide:
            return <Hide fill={tint} width={size} height={size}/>;
        case IconType.Home:
            return <Home fill={tint} width={size} height={size}/>;
        case IconType.Logout:
            return <Logout fill={tint} width={size} height={size}/>;
        case IconType.Moon:
            return <Moon fill={tint} width={size} height={size}/>;
        case IconType.Notification:
            return <Notification fill={tint} width={size} height={size}/>;
        case IconType.Person:
            return <Person fill={tint} width={size} height={size}/>;
        case IconType.Ping:
            return <Ping fill={tint} width={size} height={size}/>;
        case IconType.Radio:
            return <Radio fill={tint} width={size} height={size}/>
        case IconType.RadioUnselected:
            return <RadioUnselected fill={tint} width={size} height={size}/>
        case IconType.Send:
            return <Send fill={tint} width={size} height={size}/>;
        case IconType.Setting:
            return <Setting fill={tint} width={size} height={size}/>;
        case IconType.Show:
            return <Show fill={tint} width={size} height={size}/>;
        case IconType.Write:
            return <Write fill={tint} width={size} height={size}/>;
        case IconType.Github:
            return <Github fill={tint} width={size} height={size}/>;
        case IconType.Baekjoon:
            return <Baekjoon fill={tint} width={size} height={size}/>;
    }
};

export default GrowIcon;
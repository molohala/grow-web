import AddFill from "./icons/AddFill";
import AddLine from "./icons/AddLine";
import React from "react";
import AddRing from "./icons/AddRing";
import ArrowDown from "./icons/ArrowDown";
import ArrowLeft from "./icons/ArrowLeft";
import ArrowRight from "./icons/ArrowRight";
import ArrowUp from "./icons/ArrowUp";
import Chat from "./icons/Chat";
import Check from "./icons/Check";
import CloseFill from "./icons/CloseFill";
import CloseRing from "./icons/CloseRing";
import DetailHorizontal from "./icons/DetailHorizontal";
import CloseLine from "./icons/CloseLine";
import DetailVertical from "./icons/DetailVertical";
import ExpandDown from "./icons/ExpandDown";
import ExpandLeft from "./icons/ExpandLeft";
import ExpandRight from "./icons/ExpandRight";
import ExpandStopDown from "./icons/ExpandStopDown";
import Hide from "./icons/Hide";
import ExpandStopLeft from "./icons/ExpandStopLeft";
import ExpandStopRight from "./icons/ExpandStopRight";
import ExpandStopUp from "./icons/ExpandStopUp";
import ExpandUp from "./icons/ExpandUp";
import HeartFill from "./icons/HeartFill";
import Home from "./icons/Home";
import Logout from "./icons/Logout";
import Moon from "./icons/Moon";
import Notification from "./icons/Notification";
import Person from "./icons/Person";
import Ping from "./icons/Ping";
import Setting from "./icons/Setting";
import Show from "./icons/Show";
import Write from "./icons/Write";
import Radio from "./icons/Radio";
import RadioUnselected from "./icons/RadioUnselected";
import Send from "./icons/Send";
import Github from "./icons/Github";
import Baekjoon from "./icons/Baekjoon";

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
import * as S from './SideBar.style';
import GrowIcon, {IconType} from "../../designsystem/foundation/iconography/GrowIcon";
import {css, useTheme} from "styled-components";
import Spacer from "../../designsystem/component/spacer/Spacer";
import {Guideline} from "../util/Guideline";
import {useContext} from "react";
import {ThemeContext, ThemeContextType} from "../../context/ThemeContext";

export type SideBarItem = {
    icon: IconType,
    label: string,
    link: string
};

interface SideBarProps {
    items: SideBarItem[];
}

const SideBar = (
    {
        items
    }: SideBarProps
) => {

    const theme = useTheme();
    const {isDarkTheme, setIsDarkTheme} = useContext<ThemeContextType>(ThemeContext);

    return (
        <S.Container>
            <S.ItemsContainer>
                {items.map(i => {
                    const selected = window.location.href === i.link
                    return (
                        <S.ItemContainer onClick={() => {
                            if (!selected) {
                                window.location.href = i.link;
                            }
                        }}>
                            <GrowIcon type={i.icon} tint={selected ? theme.bottomTabPrimary : theme.textDisabled}
                                      size={26}/>
                            <S.ItemLabel selected={selected}>{i.label}</S.ItemLabel>
                        </S.ItemContainer>
                    );
                })}
                <Spacer customStyle={css`
                    @media screen and (max-width: ${Guideline.Mobile}px) {
                        display: none;
                    }
                `}/>
                <S.ItemContainer onClick={() => {
                    setIsDarkTheme(!isDarkTheme);
                }}>
                    <GrowIcon type={IconType.Moon} tint={theme.textDisabled} size={26}/>
                    <S.ItemLabel selected={false}>다크모드</S.ItemLabel>
                </S.ItemContainer>
                <S.ItemContainer onClick={() => {
                }}>
                    <GrowIcon type={IconType.Setting} tint={theme.textDisabled}
                              size={26}/>
                    <S.ItemLabel selected={false}>설정</S.ItemLabel>
                </S.ItemContainer>
            </S.ItemsContainer>
        </S.Container>
    )
};

export default SideBar;
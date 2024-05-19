import * as S from './SideBar.style';
import GrowIcon, {IconType} from "../../designsystem/foundation/iconography/GrowIcon";
import {useTheme} from "styled-components";

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

    return (
        <S.Container>
            <S.ItemsContainer>
                {items.map(i => {
                    const selected = window.location.href === i.link
                    return (
                        <S.ItemContainer selected={selected} onClick={() => {
                            if (!selected) {
                                window.location.href = i.link;
                            }
                        }}>
                            <GrowIcon type={i.icon} tint={selected ? theme.bottomTabPrimary : theme.textDisabled}
                                      size={26}/>
                            {i.label}
                        </S.ItemContainer>
                    );
                })}
            </S.ItemsContainer>
            <S.ItemsContainer>
                <S.ItemContainer selected={false} onClick={() => {
                }}>
                    <GrowIcon type={IconType.Setting} tint={theme.textDisabled}
                              size={26}/>
                    설정
                </S.ItemContainer>
            </S.ItemsContainer>
        </S.Container>
    )
};

export default SideBar;
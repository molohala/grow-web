import React from "react";

import * as S from "@ui/template/MainTemplate.style";
import SideBar from "@ui/sidebar/SideBar";

import {IconType} from "@designsystem/foundation/iconography/GrowIcon";

import Config from "@config/Config";

interface MainTemplateProps {
    children: React.ReactNode;
}

const MainTemplate = (
    {
        children
    }: MainTemplateProps
) => {
    return (
        <S.Container>
            <SideBar items={[
                {
                    icon: IconType.Home,
                    label: '홈',
                    link: `${Config.BASE_URL}/`
                },
                {
                    icon: IconType.Chat,
                    label: '포럼',
                    link: `${Config.BASE_URL}/forum`
                },
                {
                    icon: IconType.Person,
                    label: '프로필',
                    link: `${Config.BASE_URL}/profile`
                }
            ]}/>
            {children}
        </S.Container>
    );
}

export default MainTemplate;
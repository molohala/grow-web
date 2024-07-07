import styled from "styled-components";

import FlexLayout from "@designsystem/util/FlexLayout";
import {Fonts, Font} from "@designsystem/foundation/text/Fonts";

const style = {
    Container: styled.div`
        ${FlexLayout({columnGap: '8px'})};
        padding: 12px;
    `,
    InfoContainer: styled.div`
        ${FlexLayout({flexDirection: 'column'})};
    `,
    UserInfoContainer: styled.div`
        ${FlexLayout({columnGap: '4px', alignItems: 'center'})};
    `,
    WriterName: styled.div`
        color: ${({theme}) => theme.textNormal};
        ${Fonts[Font.BodyB]};
    `,
    CreatedAt: styled.div`
        color: ${({theme}) => theme.textAlt};
        ${Fonts[Font.LabelM]};
    `,
    CommentContent: styled.p`
        ${FlexLayout({})};
        color: ${({theme}) => theme.textNormal};
        ${Fonts[Font.BodyR]};
        //width: 100%;
        word-break: break-word;
    `
};

export default style;
import styled from "styled-components";
import {FlexLayout} from "../../designsystem/util/FlexLayout";
import {GrowTypographies, TypographyType} from "../../designsystem/foundation/text/GrowTypographies";

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
        ${GrowTypographies[TypographyType.BodyB]};
    `,
    CreatedAt: styled.div`
        color: ${({theme}) => theme.textAlt};
        ${GrowTypographies[TypographyType.LabelM]};
    `,
    CommentContent: styled.p`
        ${FlexLayout({})};
        color: ${({theme}) => theme.textNormal};
        ${GrowTypographies[TypographyType.BodyR]};
        //width: 100%;
        word-break: break-word;
    `
};

export default style;
import styled, {RuleSet} from "styled-components";
import {FlexLayout} from "../../util/FlexLayout";

export const Container = styled.div<{
    $customStyle?: RuleSet
}>`
    ${props => props.$customStyle};
    ${FlexLayout({})};
    flex: 1;
`;
import * as S from "./GrowTextField.style";
import GrowIcon, {IconType} from "../../foundation/iconography/GrowIcon";
import {useTheme} from "styled-components";
import {useState} from "react";
import {isDisabled} from "@testing-library/user-event/dist/utils";

export interface GrowTextFieldProps {
    hint: string,
    text: string,
    onChange: (text: string) => void,
    isSecured?: boolean,
    isEnabled?: boolean
}

const GrowTextField = (
    {
        hint,
        text,
        onChange,
        isSecured = false,
        isEnabled = true
    }: GrowTextFieldProps
) => {
    const theme = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [showText, setShowText] = useState(false);

    const textColor = isEnabled ? theme.textNormal : theme.textFieldTextDisabled;
    const iconColor = isEnabled ? theme.textAlt : theme.textFieldTextDisabled;
    const strokeColor = !isEnabled ? theme.textFieldSecondaryDisabled : isFocused ? theme.textFieldPrimary : theme.textFieldSecondary;
    const placeHolderColor = isEnabled ? theme.textAlt : theme.textFieldTextDisabled;

    return (
        <S.GrowTextFieldStyle strokeColor={strokeColor}>
            <S.Input
                type={isSecured ? 'password' : 'text'}
                onChange={event => {
                    onChange(event.target.value);
                }}
                placeholderColor={placeHolderColor}
                placeholder={hint}
                onFocus={() => {
                    setIsFocused(true);
                }}
                onBlur={() => {
                    setIsFocused(false);
                }}
                textColor={textColor}
            />
            <S.TrailingIconButton show={text !== ''}>
                <GrowIcon type={IconType.Send} tint={iconColor} width={'24px'} height={'24px'}/>
            </S.TrailingIconButton>
        </S.GrowTextFieldStyle>
    );
};

export default GrowTextField;
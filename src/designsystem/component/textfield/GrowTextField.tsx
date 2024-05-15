import * as S from "./GrowTextField.style";
import GrowIcon, {IconType} from "../../foundation/iconography/GrowIcon";
import {RuleSet, useTheme} from "styled-components";
import {useState} from "react";

export interface GrowTextFieldProps {
    hint: string,
    text: string,
    onChange: (text: string) => void,
    isSecured?: boolean,
    isEnabled?: boolean,
    customStyle?: RuleSet;
}

const GrowTextField = (
    {
        hint,
        text,
        onChange,
        isSecured = false,
        isEnabled = true,
        customStyle,
    }: GrowTextFieldProps
) => {
    const theme = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [showText, setShowText] = useState(false);

    const textColor = isEnabled ? theme.textNormal : theme.textFieldTextDisabled;
    const iconColor = isEnabled ? theme.textAlt : theme.textFieldTextDisabled;
    const strokeColor = !isEnabled ? theme.textFieldSecondaryDisabled : isFocused ? theme.textFieldPrimary : theme.textFieldSecondary;
    const placeHolderColor = isEnabled ? theme.textAlt : theme.textFieldTextDisabled;

    const iconType = !isSecured ? IconType.CloseFill : showText ? IconType.Show : IconType.Hide;

    return (
        <S.GrowTextFieldStyle customStyle={customStyle} strokeColor={strokeColor}>
            <S.Input
                value={text}
                disabled={!isEnabled}
                type={showText ? 'password' : 'text'}
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
            <S.TrailingIconButton isEnabled={isEnabled} onClick={() => {
                if (isSecured) {
                    setShowText(i => !i);
                } else {
                    onChange('');
                }
            }} show={text !== ''}>
                <GrowIcon type={iconType} tint={iconColor} size={24}/>
            </S.TrailingIconButton>
        </S.GrowTextFieldStyle>
    );
};

export default GrowTextField;
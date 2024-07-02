import * as S from "./GrowTextArea.style";
import {RuleSet, useTheme} from "styled-components";
import {useState} from "react";

export interface GrowTextFieldProps {
    hint: string,
    text: string,
    onChange: (text: string) => void,
    isEnabled?: boolean,
    customStyle?: RuleSet;
}

const GrowTextArea = (
    {
        hint,
        text,
        onChange,
        isEnabled = true,
        customStyle,
    }: GrowTextFieldProps
) => {
    const theme = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    const textColor = isEnabled ? theme.textNormal : theme.textFieldTextDisabled;
    const strokeColor = !isEnabled ? theme.textFieldSecondaryDisabled : isFocused ? theme.textFieldPrimary : theme.textFieldSecondary;
    const placeHolderColor = isEnabled ? theme.textAlt : theme.textFieldTextDisabled;

    return (
        <S.GrowTextAreaStyle customStyle={customStyle} strokeColor={strokeColor}>
            <S.Input
                value={text}
                disabled={!isEnabled}
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
        </S.GrowTextAreaStyle>
    );
};

export default GrowTextArea;
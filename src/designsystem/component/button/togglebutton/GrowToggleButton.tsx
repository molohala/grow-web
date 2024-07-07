import * as S from "@designsystem/component/button/togglebutton/GrowToggleButton.style";

interface GrowToggleButtonProps {
    checked: boolean;
    onClick: () => void;
}

const GrowToggleButton = (
    {
        checked,
        onClick
    }: GrowToggleButtonProps
) => {
    return (
        <S.GrowToggleButtonStyle checked={checked} onClick={onClick}>
            <S.Indicator/>
        </S.GrowToggleButtonStyle>
    );
}

export default GrowToggleButton;
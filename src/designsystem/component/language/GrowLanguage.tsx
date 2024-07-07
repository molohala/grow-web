import {GrowLanguageStyle} from "@designsystem/component/language/GrowLanguage.style";

interface GrowLanguageProps {
    text: string
}

const GrowLanguage = (
    {
        text
    }: GrowLanguageProps
) => {
    return (
        <GrowLanguageStyle>
            {text}
        </GrowLanguageStyle>
    );
};

export default GrowLanguage
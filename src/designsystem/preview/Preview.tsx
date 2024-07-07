import {useContext, useState} from "react";
import {css, useTheme} from "styled-components";

import {DarkThemeContext, DarkThemeContextType} from "@provider/theme/DarkThemeContext";

import {Column, Row} from "@designsystem/util/StyledFlex";
import GrowButton from "@designsystem/component/button/button/GrowButton";
import {ButtonType} from "@designsystem/component/button/type/ButtonType";
import GrowLoader from "@designsystem/component/loader/GrowLoader";
import GrowDivider, {DividerType} from "@designsystem/component/divider/GrowDivider";
import GrowTextButton from "@designsystem/component/button/textbutton/GrowTextButton";
import GrowTabButton from "@designsystem/component/button/tabbutton/GrowTabButton";
import GrowToggleButton from "@designsystem/component/button/togglebutton/GrowToggleButton";
import {ShadowType} from "@designsystem/foundation/shadow/GrowShadow";
import GrowTextField from "@designsystem/component/textfield/GrowTextField";
import {IconType} from "@designsystem/foundation/iconography/GrowIcon";
import GrowAvatar, {AvatarType} from "@designsystem/component/avatar/GrowAvatar";
import GrowLanguage from "@designsystem/component/language/GrowLanguage";
import GrowLikeButton from "@designsystem/component/button/likebutton/GrowLikeButton";
import GrowRadioButton from "@designsystem/component/button/radiobutton/GrowRadioButton";
import GrowTextArea from "@designsystem/component/textarea/GrowTextArea";

import {ShadowRectangle} from "./ShadowRectangle";

const Preview = () => {

    const theme = useTheme();
    const {isDarkTheme, setIsDarkTheme} = useContext<DarkThemeContextType>(DarkThemeContext);
    const [text, setText] = useState("");

    return (
        <Row $columnGap={8} padding={'8px'} $customStyle={css`background-color: ${theme.background}`}>
            <Column $rowGap={8}>
                <GrowButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Large}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Medium}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Small}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`}
                            isEnabled={false}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Large} isEnabled={false}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Medium} isEnabled={false}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Small} isEnabled={false}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.CTA}
                            customStyle={css`width: 200px;`}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Large}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Medium}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Small}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.CTA}
                            customStyle={css`width: 200px;`} isEnabled={false}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Large}
                            isEnabled={false}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Medium}
                            isEnabled={false}/>
                <GrowButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Small}
                            isEnabled={false}/>
            </Column>
            <Column $rowGap={8}>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.CTA} $customStyle={css`width: 200px;`}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Large}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Medium}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Small}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.CTA} $customStyle={css`width: 200px;`}
                                isEnabled={false}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Large} isEnabled={false}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Medium} isEnabled={false}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Small} isEnabled={false}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.CTA}
                                $customStyle={css`width: 200px;`}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Large}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Medium}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Small}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.CTA}
                                $customStyle={css`width: 200px;`} isEnabled={false}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Large}
                                isEnabled={false}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Medium}
                                isEnabled={false}/>
                <GrowTextButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Small}
                                isEnabled={false}/>
            </Column>
            <Column $rowGap={8}>
                <GrowTabButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send}/>
                <GrowTabButton onClick={() => {
                }} text={'시작하기'} leadingIcon={IconType.Send} isEnabled={false}/>
                <GrowTabButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send}/>
                <GrowTabButton onClick={() => {
                }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} isEnabled={false}/>
            </Column>
            <Column $rowGap={8}>
                <GrowLikeButton like={313} isLiked={true} onClick={() => {
                }}/>
                <GrowLikeButton like={312} isLiked={false} onClick={() => {
                }}/>
            </Column>
            <Column $rowGap={8}>
                <GrowToggleButton checked={isDarkTheme} onClick={() => setIsDarkTheme(!isDarkTheme)}/>
            </Column>
            <Column $rowGap={8}>
                <GrowRadioButton text={'시작하기'} onClick={() => {
                }} isSelected={true}/>
                <GrowRadioButton text={'시작하기'} onClick={() => {
                }} isSelected={false}/>
            </Column>
            <GrowLoader/>
            <Column $rowGap={8}>
                <GrowTextField hint={'아이디를 입력해주세요'} text={text} onChange={text => setText(text)}/>
                <GrowTextField hint={'아이디를 입력해주세요'} text={text} isSecured={true} onChange={text => setText(text)}/>
                <GrowTextField hint={'아이디를 입력해주세요'} text={text} isEnabled={false} isSecured={true}
                               onChange={text => setText(text)}/>
            </Column>
            <Column $rowGap={8}>
                <GrowTextArea
                    hint={'내용을 입력해주세요'}
                    text={text}
                    onChange={text => setText(text)}
                    customStyle={css`
                        height: 100px;
                    `}/>
            </Column>
            <Column $rowGap={8}>
                <GrowAvatar type={AvatarType.ExtraSmall}/>
                <GrowAvatar type={AvatarType.Small}/>
                <GrowAvatar type={AvatarType.Medium}/>
                <GrowAvatar type={AvatarType.Large}/>
                <GrowAvatar type={AvatarType.ExtraLarge}/>
                <GrowAvatar type={AvatarType.XXL}/>
                <GrowAvatar type={AvatarType.ExtraSmall}
                            url={'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'}/>
                <GrowAvatar type={AvatarType.Small}
                            url={'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'}/>
                <GrowAvatar type={AvatarType.Medium}
                            url={'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'}/>
                <GrowAvatar type={AvatarType.Large}
                            url={'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'}/>
                <GrowAvatar type={AvatarType.ExtraLarge}
                            url={'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'}/>
                <GrowAvatar type={AvatarType.XXL}
                            url={'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'}/>
            </Column>
            <Column $rowGap={8}>
                <ShadowRectangle shadowType={ShadowType.EvBlack1}/>
                <ShadowRectangle shadowType={ShadowType.EvBlack2}/>
                <ShadowRectangle shadowType={ShadowType.EvBlack3}/>
            </Column>
            <Column $customStyle={css`background: ${theme.backgroundAlt}`} $rowGap={8}>
                <GrowLanguage text={'Swift'}/>
                <GrowLanguage text={'Python'}/>
                <GrowLanguage text={'C++'}/>
                <GrowLanguage text={'Kotlin'}/>
            </Column>
            <Column $rowGap={8} $customStyle={css`flex: 1`}>
                <GrowDivider type={DividerType.Thick}/>
                <GrowDivider type={DividerType.Thin}/>
            </Column>
        </Row>
    );
};

export default Preview;
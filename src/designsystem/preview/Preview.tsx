import {Column, Row} from "../util/StyledFlex";
import {css, useTheme} from "styled-components";
import GrowButton from "../component/button/button/GrowButton";
import {IconType} from "../foundation/iconography/GrowIcon";
import {ButtonType} from "../component/button/type/ButtonType";
import GrowLoader from "../component/loader/GrowLoader";
import GrowDivider, {DividerType} from "../component/divider/GrowDivider";
import GrowTextButton from "../component/button/textbutton/GrowTextButton";
import GrowTabButton from "../component/button/tabbutton/GrowTabButton";
import GrowToggleButton from "../component/button/togglebutton/GrowToggleButton";
import {ShadowRectangle} from "./ShadowRectangle";
import {ShadowType} from "../foundation/shadow/GrowShadow";
import {useContext, useState} from "react";
import {ThemeContext} from "../../context/ThemeContext";
import GrowTextField from "../component/textfield/GrowTextField";

const Preview = () => {

    const theme = useTheme();
    // @ts-ignore
    const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
    const [text, setText] = useState("");

    return (
        <Row columnGap={8} padding={'8px'} customStyle={css`background-color: ${theme.background}`}>
            <Column rowGap={8}>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`}/>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Large}/>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Medium}/>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Small}/>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`} isEnabled={false}/>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Large} isEnabled={false}/>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Medium} isEnabled={false}/>
                <GrowButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Small} isEnabled={false}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Large}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Medium}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Small}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`} isEnabled={false}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Large} isEnabled={false}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Medium} isEnabled={false}/>
                <GrowButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Small} isEnabled={false}/>
            </Column>
            <Column rowGap={8}>
                <GrowTextButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Large}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Medium}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Small}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`} isEnabled={false}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Large} isEnabled={false}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Medium} isEnabled={false}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} type={ButtonType.Small} isEnabled={false}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Large}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Medium}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Small}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.CTA} customStyle={css`width: 200px;`} isEnabled={false}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Large} isEnabled={false}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Medium} isEnabled={false}/>
                <GrowTextButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Small} isEnabled={false}/>
            </Column>
            <Column rowGap={8}>
                <GrowTabButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send}/>
                <GrowTabButton onClick={() => {}} text={'시작하기'} leadingIcon={IconType.Send} isEnabled={false}/>
                <GrowTabButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send}/>
                <GrowTabButton onClick={() => {}} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} isEnabled={false}/>
            </Column>
            <Column rowGap={8}>
                <GrowToggleButton checked={isDarkTheme} onClick={() => setIsDarkTheme(!isDarkTheme)} />
            </Column>
            <GrowLoader/>
            <Column rowGap={8}>
                <GrowTextField hint={'아이디를 입력해주세요'} text={text} onChange={text => setText(text)}/>
            </Column>
            <Column rowGap={8}>
                <ShadowRectangle shadowType={ShadowType.EvBlack1}/>
                <ShadowRectangle shadowType={ShadowType.EvBlack2}/>
                <ShadowRectangle shadowType={ShadowType.EvBlack3}/>
            </Column>
            <Column rowGap={8} customStyle={css`flex: 1`}>
                <GrowDivider type={DividerType.Thick}/>
                <GrowDivider type={DividerType.Thin}/>
            </Column>
        </Row>
    );
};

export default Preview;
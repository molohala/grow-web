import {Column, Row} from "../util/StyledFlex";
import {css, useTheme} from "styled-components";
import GrowButton from "../component/button/GrowButton";
import {IconType} from "../foundation/iconography/GrowIcon";
import {ButtonType} from "../component/button/ButtonType";
import GrowLoader from "../component/loader/GrowLoader";
import GrowDivider, {DividerType} from "../component/divider/GrowDivider";

const Preview = () => {

    const theme = useTheme();

    return (
        <Column rowGap={8} padding={'8px'} customStyle={css`background-color: ${theme.background}`}>
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
            }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Large} isEnabled={false}/>
            <GrowButton onClick={() => {
            }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Medium} isEnabled={false}/>
            <GrowButton onClick={() => {
            }} text={'시작하기'} isLoading={true} leadingIcon={IconType.Send} type={ButtonType.Small} isEnabled={false}/>
            <GrowLoader/>
            <Row alignSelf={'stretch'}>
                <GrowDivider type={DividerType.Thick}/>
            </Row>
            <Column alignSelf={'stretch'}>
                <GrowDivider type={DividerType.Thin}/>
            </Column>
        </Column>
    );
};

export default Preview;
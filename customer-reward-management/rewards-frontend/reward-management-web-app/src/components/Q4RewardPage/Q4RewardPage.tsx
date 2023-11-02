/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from "react";
import { Checkbox, FormControlLabel, Button, Skeleton } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Card1Image from "src/assets/images/4RewardPage_Card_1.png";
import { styled } from "@mui/material/styles";
import BrandImgImageImage from "src/assets/images/4RewardPage_brand_img.png";
import BannerTop from "src/components/BannerTop/BannerTop";
import Footer1 from "src/components/Footer1/Footer1";
import { Q4RewardPageProps } from "src/types";
import useQ4RewardPage from "src/components/Q4RewardPage/useQ4RewardPage";

const ScreenDesktop: any = styled("div")(({ theme }: any) => ({
  backgroundColor: theme.palette["Other"]["Divider"],
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: "100%",
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: "auto",
}));

const BannerTop1: any = styled(BannerTop)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Banner: any = styled("div", {
  shouldForwardProp: (prop: any) => !["data"].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: data.currentVariant === "ScreenMobile" ? `10px` : `10px 70px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `11px 0px 0px 0px`,
  overflow: `hidden`,
}));

const CardChoreo: any = styled("div")(({ theme }: any) => ({
  backgroundColor: theme.palette["Background"]["Background"],
  border: `1px solid rgba(176, 176, 176, 1)`,
  boxSizing: `border-box`,
  borderRadius: `12px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `10px 0px`,
  flex: `1`,
  margin: `0px`,
  overflow: `hidden`,
}));

const Content: any = styled("div", {
  shouldForwardProp: (prop: any) => !["data"].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === "ScreenMobile" ? `column` : `row`,
  justifyContent:
    data.currentVariant === "ScreenMobile" ? `center` : `flex-start`,
  alignItems: data.currentVariant === "ScreenMobile" ? `flex-start` : `center`,
  padding: `20px 20px 20px 30px`,
  boxSizing: `border-box`,
  alignSelf: data.currentVariant === "ScreenMobile" ? "unset" : `stretch`,
  flex: `1`,
  margin: `0px`,
}));

const Card1: any = styled("img")({
  height: `109.82px`,
  width: `188px`,
  margin: `0px`,
});

const Details: any = styled("div", {
  shouldForwardProp: (prop: any) => !["data"].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === "ScreenMobile" ? `column` : `row`,
  justifyContent:
    data.currentVariant === "ScreenMobile" ? `flex-start` : `space-between`,
  alignItems: data.currentVariant === "ScreenMobile" ? `flex-end` : `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: data.currentVariant === "ScreenMobile" ? "unset" : `1`,
  margin:
    data.currentVariant === "ScreenMobile"
      ? `34px 0px 0px 0px`
      : `0px 0px 0px 34px`,
}));

const Top: any = styled("div", {
  shouldForwardProp: (prop: any) => !["data"].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: data.currentVariant === "ScreenMobile" ? "unset" : `1`,
  margin: `0px`,
  alignSelf: data.currentVariant === "ScreenMobile" ? `stretch` : "unset",
}));

const Text: any = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const TitleTop: any = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Title: any = styled("div")(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette["Text"]["Primary"],
  fontStyle: theme.typography["Typography"]["H5"].fontStyle,
  fontFamily: theme.typography["Typography"]["H5"].fontFamily,
  fontWeight: theme.typography["Typography"]["H5"].fontWeight,
  fontSize: theme.typography["Typography"]["H5"].fontSize,
  letterSpacing: theme.typography["Typography"]["H5"].letterSpacing,
  lineHeight: theme.typography["Typography"]["H5"].lineHeight,
  textDecoration: theme.typography["Typography"]["H5"].textDecoration,
  textTransform: theme.typography["Typography"]["H5"].textTransform,
  flex: `1`,
  margin: `0px`,
}));

const Points: any = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `19px 0px 0px 0px`,
});

const AvailablePoints: any = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Details1: any = styled("div")(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette["Text"]["Primary"],
  fontStyle: theme.typography["Typography"]["H4"].fontStyle,
  fontFamily: theme.typography["Typography"]["H4"].fontFamily,
  fontWeight: theme.typography["Typography"]["H4"].fontWeight,
  fontSize: theme.typography["Typography"]["H4"].fontSize,
  letterSpacing: theme.typography["Typography"]["H4"].letterSpacing,
  lineHeight: theme.typography["Typography"]["H4"].lineHeight,
  textDecoration: theme.typography["Typography"]["H4"].textDecoration,
  textTransform: theme.typography["Typography"]["H4"].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Details2: any = styled("div")(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette["Text"]["Primary"],
  fontStyle: theme.typography["Typography"]["Body 2"].fontStyle,
  fontFamily: theme.typography["Typography"]["Body 2"].fontFamily,
  fontWeight: theme.typography["Typography"]["Body 2"].fontWeight,
  fontSize: theme.typography["Typography"]["Body 2"].fontSize,
  letterSpacing: theme.typography["Typography"]["Body 2"].letterSpacing,
  lineHeight: theme.typography["Typography"]["Body 2"].lineHeight,
  textDecoration: theme.typography["Typography"]["Body 2"].textDecoration,
  textTransform: theme.typography["Typography"]["Body 2"].textTransform,
  alignSelf: `stretch`,
  margin: `4px 0px 0px 0px`,
}));

const Frame4: any = styled("div", {
  shouldForwardProp: (prop: any) => !["data"].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: data.currentVariant === "ScreenMobile" ? "unset" : `191px`,
  margin: data.currentVariant === "ScreenMobile" ? `28px 0px 0px 0px` : `0px`,
  height: data.currentVariant === "ScreenMobile" ? `42px` : "unset",
}));

const GiftCard: any = styled("div", {
  shouldForwardProp: (prop: any) => !["data"].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding:
    data.currentVariant === "ScreenMobile"
      ? `10px 10px 100px 10px`
      : `10px 70px 100px 70px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `11px 0px 0px 0px`,
  overflow: `hidden`,
}));

const CardContainer: any = styled("div", {
  shouldForwardProp: (prop: any) => !["data"].includes(prop.toString()),
})(({ theme, data }: any) => ({
  backgroundColor: theme.palette["Background"]["Background"],
  border: `1px solid rgba(176, 176, 176, 1)`,
  boxSizing: `border-box`,
  borderRadius: `12px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === "ScreenMobile" ? `column` : `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `40px 0px`,
  flex: `1`,
  margin: `0px`,
  overflow: `hidden`,
}));

const Content1: any = styled("div", {
  shouldForwardProp: (prop: any) => !["data"].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.currentVariant === "ScreenMobile" ? `column` : `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 20px 0px 30px`,
  boxSizing: `border-box`,
  flex: data.currentVariant === "ScreenMobile" ? "unset" : `1`,
  margin: `0px`,
  alignSelf: data.currentVariant === "ScreenMobile" ? `stretch` : "unset",
}));

const BrandImg: any = styled("div", {
  shouldForwardProp: (prop: any) => !["data"].includes(prop.toString()),
})(({ data }: any) => ({
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  // width: `183px`,
  // height: `100px`,
  margin: `0px`,
  overflow: `hidden`,
  // backgroundImage: data.reward?.logoUrl,
}));

const Details3: any = styled("div", {
  shouldForwardProp: (prop: any) => !["data"].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: data.currentVariant === "ScreenMobile" ? "unset" : `1`,
  margin:
    data.currentVariant === "ScreenMobile"
      ? `34px 0px 0px 0px`
      : `0px 0px 0px 34px`,
  alignSelf: data.currentVariant === "ScreenMobile" ? `stretch` : "unset",
}));

const Text1: any = styled("div", {
  shouldForwardProp: (prop: any) => !["data"].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
  alignSelf: data.currentVariant === "ScreenMobile" ? `stretch` : "unset",
}));

const TitleTop1: any = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Title1: any = styled("div")(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette["Text"]["Primary"],
  fontStyle: theme.typography["Typography"]["H5"].fontStyle,
  fontFamily: theme.typography["Typography"]["H5"].fontFamily,
  fontWeight: theme.typography["Typography"]["H5"].fontWeight,
  fontSize: theme.typography["Typography"]["H5"].fontSize,
  letterSpacing: theme.typography["Typography"]["H5"].letterSpacing,
  lineHeight: theme.typography["Typography"]["H5"].lineHeight,
  textDecoration: theme.typography["Typography"]["H5"].textDecoration,
  textTransform: theme.typography["Typography"]["H5"].textTransform,
  flex: `1`,
  margin: `0px`,
}));

const Details4: any = styled("div", {
  shouldForwardProp: (prop: any) => !["data"].includes(prop.toString()),
})(({ data }: any) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: data.currentVariant === "ScreenMobile" ? `0px` : `0px 210px 0px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
}));

const Value: any = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Points1: any = styled("div")(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette["Text"]["Primary"],
  fontStyle: theme.typography["Typography"]["H3"].fontStyle,
  fontFamily: theme.typography["Typography"]["H3"].fontFamily,
  fontWeight: theme.typography["Typography"]["H3"].fontWeight,
  fontSize: theme.typography["Typography"]["H3"].fontSize,
  letterSpacing: theme.typography["Typography"]["H3"].letterSpacing,
  lineHeight: theme.typography["Typography"]["H3"].lineHeight,
  textDecoration: theme.typography["Typography"]["H3"].textDecoration,
  textTransform: theme.typography["Typography"]["H3"].textTransform,
  margin: `0px`,
}));

const Points2: any = styled("div")(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette["Text"]["Primary"],
  fontStyle: theme.typography["Typography"]["H3"].fontStyle,
  fontFamily: theme.typography["Typography"]["H3"].fontFamily,
  fontWeight: theme.typography["Typography"]["H3"].fontWeight,
  fontSize: theme.typography["Typography"]["H3"].fontSize,
  letterSpacing: theme.typography["Typography"]["H3"].letterSpacing,
  lineHeight: theme.typography["Typography"]["H3"].lineHeight,
  textDecoration: theme.typography["Typography"]["H3"].textDecoration,
  textTransform: theme.typography["Typography"]["H3"].textTransform,
  margin: `0px 0px 0px 10px`,
}));

const TotalPoints: any = styled("div")({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `19px 0px 0px 0px`,
});

const Points3: any = styled("div")(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette["Text"]["Primary"],
  fontStyle: theme.typography["Typography"]["H6"].fontStyle,
  fontFamily: theme.typography["Typography"]["H6"].fontFamily,
  fontWeight: theme.typography["Typography"]["H6"].fontWeight,
  fontSize: theme.typography["Typography"]["H6"].fontSize,
  letterSpacing: theme.typography["Typography"]["H6"].letterSpacing,
  lineHeight: theme.typography["Typography"]["H6"].lineHeight,
  textDecoration: theme.typography["Typography"]["H6"].textDecoration,
  textTransform: theme.typography["Typography"]["H6"].textTransform,
  margin: `0px`,
}));

const Points4: any = styled("div")(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette["Text"]["Primary"],
  fontStyle: theme.typography["Typography"]["H6"].fontStyle,
  fontFamily: theme.typography["Typography"]["H6"].fontFamily,
  fontWeight: theme.typography["Typography"]["H6"].fontWeight,
  fontSize: theme.typography["Typography"]["H6"].fontSize,
  letterSpacing: theme.typography["Typography"]["H6"].letterSpacing,
  lineHeight: theme.typography["Typography"]["H6"].lineHeight,
  textDecoration: theme.typography["Typography"]["H6"].textDecoration,
  textTransform: theme.typography["Typography"]["H6"].textTransform,
  margin: `0px 0px 0px 10px`,
}));

const Details5: any = styled("div")(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette["Text"]["Primary"],
  fontStyle: theme.typography["Typography"]["Body 2"].fontStyle,
  fontFamily: theme.typography["Typography"]["Body 2"].fontFamily,
  fontWeight: theme.typography["Typography"]["Body 2"].fontWeight,
  fontSize: theme.typography["Typography"]["Body 2"].fontSize,
  letterSpacing: theme.typography["Typography"]["Body 2"].letterSpacing,
  lineHeight: theme.typography["Typography"]["Body 2"].lineHeight,
  textDecoration: theme.typography["Typography"]["Body 2"].textDecoration,
  textTransform: theme.typography["Typography"]["Body 2"].textTransform,
  alignSelf: `stretch`,
  margin: `19px 0px 0px 0px`,
}));

const FormControlLabel1: any = styled(FormControlLabel, {
  shouldForwardProp: (prop: any) => !["data"].includes(prop.toString()),
})(({ theme, data }: any) => ({
  margin: `19px 0px 0px 0px`,
  color: theme.palette["Text"]["Primary"],
  fontStyle: theme.typography["Typography"]["Body 2"].fontStyle,
  fontFamily: theme.typography["Typography"]["Body 2"].fontFamily,
  fontWeight: theme.typography["Typography"]["Body 2"].fontWeight,
  fontSize: theme.typography["Typography"]["Body 2"].fontSize,
  letterSpacing: theme.typography["Typography"]["Body 2"].letterSpacing,
  lineHeight: theme.typography["Typography"]["Body 2"].lineHeight,
  textDecoration: theme.typography["Typography"]["Body 2"].textDecoration,
  textTransform: theme.typography["Typography"]["Body 2"].textTransform,
}));

const ButtonContained: any = styled(Button, {
  shouldForwardProp: (prop: any) => !["data"].includes(prop.toString()),
})(({ theme, data }: any) => ({
  width: `294px`,
  margin: `19px 0px 0px 0px`,
  color: theme.palette["Primary"]["Contrast"],
  fontStyle: theme.typography["Components"]["Button Font - Large"].fontStyle,
  fontFamily: theme.typography["Components"]["Button Font - Large"].fontFamily,
  fontWeight: theme.typography["Components"]["Button Font - Large"].fontWeight,
  fontSize: theme.typography["Components"]["Button Font - Large"].fontSize,
  letterSpacing:
    theme.typography["Components"]["Button Font - Large"].letterSpacing,
  lineHeight: theme.typography["Components"]["Button Font - Large"].lineHeight,
  textDecoration:
    theme.typography["Components"]["Button Font - Large"].textDecoration,
  textTransform:
    theme.typography["Components"]["Button Font - Large"].textTransform,
}));

const Footer11: any = styled(Footer1)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `11px 0px 0px 0px`,
}));

function Q4RewardPage(props: Q4RewardPageProps): JSX.Element {
  const { data, fns } = useQ4RewardPage();

  return (
    <ScreenDesktop className={props.className}>
      <Helmet>
        <title>Q4RewardPage</title>
      </Helmet>
      <BannerTop1 />
      <Banner data={data}>
        <CardChoreo>
          <Content data={data}>
            <Card1 src={Card1Image} loading="lazy" alt={"Card 1"} />
            <Details data={data}>
              <Top data={data}>
                <Text>
                  <TitleTop>
                    <Title>{`Horizon Loyalty Rewards`}</Title>
                  </TitleTop>
                  <Points>
                    <AvailablePoints>
                      <Details1>
                        {data.isCardDetailsLoading ? (
                          <Skeleton
                            variant="rounded"
                            sx={{ width: "118px", height: "34px" }}
                          />
                        ) : (
                          data.cardDetails?.rewardPoints
                        )}
                      </Details1>
                      <Details2>{`Available Points`}</Details2>
                    </AvailablePoints>
                  </Points>
                </Text>
              </Top>
              <Frame4 data={data}></Frame4>
            </Details>
          </Content>
        </CardChoreo>
      </Banner>
      <GiftCard data={data}>
        {data.isRewardLoading ? (
          <Skeleton
            variant="rounded"
            sx={{ width: "1588px", height: "381px" }}
          />
        ) : (
          <CardContainer data={data}>
            <Content1 data={data}>
              <BrandImg data={data}>
                <img
                  src={data.reward?.logoUrl}
                  alt={`${data.reward?.name} logo`}
                />
              </BrandImg>
              <Details3 data={data}>
                <Text1 data={data}>
                  <TitleTop1>
                    <Title1>{data.reward?.name}</Title1>
                  </TitleTop1>
                  <Details4 data={data}>
                    <Value>
                      <Points1>{`Value:`}</Points1>
                      <Points2>{`$${data.reward?.value}`}</Points2>
                    </Value>
                    <TotalPoints>
                      <Points3>{`Total Points:`}</Points3>
                      <Points4>{data.reward?.totalPoints}</Points4>
                    </TotalPoints>
                    <Details5>{data.reward?.description}</Details5>
                    <FormControlLabel1
                      control={
                        <Checkbox
                          size={"small"}
                          color={"primary"}
                          disabled={false}
                          indeterminate={false}
                          checked={data.isAgreementChecked}
                          onChange={(event) =>
                            fns.setIsAgreementChecked(event.target.checked)
                          }
                        ></Checkbox>
                      }
                      label={"I agree to the terms & conditions"}
                    />
                    <ButtonContained
                      variant="contained"
                      size={"large"}
                      color={"primary"}
                      disabled={!data.isAgreementChecked}
                      onClick={() => fns.handleConfirmedRewardsClick()}
                      data={data}
                    >
                      {"REDEEM"}
                    </ButtonContained>
                  </Details4>
                </Text1>
              </Details3>
            </Content1>
          </CardContainer>
        )}
      </GiftCard>
      <Footer11 />
    </ScreenDesktop>
  );
}

export default Q4RewardPage;
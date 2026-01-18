import { SectionContainer } from "./SectionContainer";
import { Box, Stack, Center, Grid } from "styled-system/jsx";
import { H2 } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";
import StrataVideo from "~/assets/StrataVideo.mp4";
import { css } from "styled-system/css";
import { Switch, Match } from "solid-js";
import headset from "~/assets/headset.png";
import mobile from "~/assets/mobile.png";
import web from "~/assets/web.png";
import glasses from "~/assets/glasses.png";

export const DesignEasily = () => {
    return (
        <SectionContainer>
            <Stack maxWidth="1720px" margin="0 auto" gap={12}>
                <Stack gap={2}>
                    <H2>Spatial design made simple</H2>
                    <Text color="fg.muted" textAlign="center">
                        With Strata, any designer can prototype and share in
                        minutes.
                    </Text>
                </Stack>
                <Box
                    marginX={{ base: "0", sm: "4vw", md: "10%" }}
                    marginBottom="4"
                    padding="1px"
                >
                    <a
                        href={StrataVideo}
                        target="_blank"
                        aria-label="Strata demo video"
                    >
                        <video
                            src={StrataVideo}
                            autoplay
                            loop
                            muted
                            playsinline
                            class={css({
                                width: "100%",
                                margin: "0 auto",
                                borderRadius: "lg",
                                boxShadow: "0px 0px 12px rgb(36, 36, 36)",
                            })}
                        />
                    </a>
                </Box>
            </Stack>
        </SectionContainer>
    );
};

export const ShareEasily = () => {
    const Platforms = (props: { platform: "Web" | "Mobile" | "Headset" | "Glasses" }) => {
        return (
            <Box position="relative" margin="0 auto">
                <Center width="100%" height="100%">
                    <Stack gap="4" alignItems="center">
                        <Switch>
                            <Match when={props.platform === "Web"}>
                                <img src={web.src} alt="Web" width={160} height={160} />
                                <Text>All major browsers</Text>
                            </Match>
                            <Match when={props.platform === "Mobile"}>
                                <img src={mobile.src} alt="Mobile" width={160} height={160} />
                                <Text>Android & iOS</Text>
                            </Match>
                            <Match when={props.platform === "Headset"}>
                                <img src={headset.src} alt="Headset" width={160} height={160} />
                                <Text>HorizonOS, VisionOS, Android XR</Text>
                            </Match>
                            <Match when={props.platform === "Glasses"}>
                                <img src={glasses.src} alt="Glasses" width={160} height={160} />
                                <Text>Snap Spectacles & Andriod XR</Text>
                            </Match>
                        </Switch>
                    </Stack>
                </Center>
            </Box>
        );
    };
    return (
        <SectionContainer>
            <Stack
                margin="0 auto"
                justifyContent="center"
                gap={8}
            >
                <Stack gap={2}>
                    <H2>Share with anyone easily</H2>
                    <Text color="fg.muted" textAlign="center">
                        Access your spatial design through the same URL from any
                        device, no download.
                    </Text>
                </Stack>
                <Grid
                    paddingY="10"
                    paddingX="8"
                    gap={8}
                    rowGap="20"
                    sm={{
                        paddingTop: "12",
                        paddingBottom: "20",
                        paddingX: "0",
                    }}
                    gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", '2xl': "repeat(4, 1fr)" }}
                    marginX={{ base: "0", md: "4vw", lg: "18%", '2xl': "10%" }}
                >
                    <Platforms platform="Web" />
                    <Platforms platform="Mobile" />
                    <Platforms platform="Headset" />
                    <Platforms platform="Glasses" />
                </Grid>
            </Stack>
        </SectionContainer>
    );
};

import { SectionContainer } from "./SectionContainer";
import { Box, Stack, Center } from "styled-system/jsx";
import { H2 } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";
import StrataScreenShot from "~/assets/StrataScreenshot.png";
import StrataVideo from "~/assets/StrataVideo.mp4";
import { css } from "styled-system/css";
import { Switch, Match } from "solid-js";
import { Chromium, Smartphone, RectangleGoggles } from "lucide-solid";

export const DesignEasily = () => {
    return (
        <SectionContainer>
            <Stack maxWidth="1280px" margin="0 auto" gap={12}>
                <Stack gap={2}>
                    <H2>Spatial design made simple</H2>
                    <Text color="fg.muted" textAlign="center">
                        With Strata, any designer can prototype and share in
                        minutes.
                    </Text>
                </Stack>
                <Box
                    marginX="0"
                    marginBottom="4"
                    padding="1px"
                    sm={{ marginX: "4vw" }}
                    md={{ marginX: "10vw" }}
                >
                    <video
                        src={StrataVideo}
                        autoplay
                        loop
                        muted
                        playsinline
                        class={css({
                            maxWidth: "1280px",
                            width: "100%",
                            margin: "0 auto",
                            borderRadius: "lg",
                            boxShadow: "0px 0px 24px rgb(36, 36, 36)",
                        })}
                    />
                </Box>
            </Stack>
        </SectionContainer>
    );
};

export const ShareEasily = () => {
    const Platforms = (props: { platform: "Web" | "Mobile" | "Headset" }) => {
        return (
            <Box position="relative" width="40" height="40" margin="0 auto">
                <Center width="100%" height="100%">
                    <Stack gap="4" alignItems="center">
                        <Switch>
                            <Match when={props.platform === "Web"}>
                                <Chromium size={40} strokeWidth={1.92} />
                            </Match>
                            <Match when={props.platform === "Mobile"}>
                                <Smartphone size={40} />
                            </Match>
                            <Match when={props.platform === "Headset"}>
                                <RectangleGoggles size={40} />
                            </Match>
                        </Switch>
                        <Text>{props.platform}</Text>
                    </Stack>
                </Center>
                <svg
                    viewBox="0 0 80 80"
                    preserveAspectRatio="none"
                    class={css({
                        position: "absolute",
                        inset: "0",
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                    })}
                >
                    <defs>
                        <linearGradient
                            id="grad1"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                style="stop-color:rgba(255,255,255,0.08)"
                            ></stop>
                            <stop
                                offset="50%"
                                style="stop-color:rgba(255,255,255,0.04)"
                            ></stop>
                            <stop
                                offset="100%"
                                style="stop-color:rgba(255,255,255,0.02)"
                            ></stop>
                        </linearGradient>

                        {/* Stroke gradient: similar to radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d) */}
                        <radialGradient
                            id="strokeGrad"
                            cx="0"
                            cy="0"
                            r="56"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0%" style="stop-color:#ffffff"></stop>
                            <stop
                                offset="100%"
                                style="stop-color:#0c0d0d"
                            ></stop>
                        </radialGradient>
                    </defs>
                    <path
                        d="M 0,40 C 0,0 0,0 40,0 L 40,0 C 80,0 80,0 80,40 C 80,80 80,80 40,80 L 40,80 C 0,80 0,80 0,40 Z"
                        fill="url(#grad1)"
                        stroke="url(#strokeGrad)"
                        stroke-width="1"
                        vector-effect="non-scaling-stroke"
                        class="notification-path glass-effect"
                    ></path>
                    <path
                        d="M 0,40 C 0,0 0,0 40,0 L 40,0 C 80,0 80,0 80,40 C 80,80 80,80 40,80 L 40,80 C 0,80 0,80 0,40 Z"
                        fill="url(#grad1)"
                        stroke="rgba(255,255,255,0.15)"
                        stroke-width="1"
                        class="notification-path glass-effect"
                    ></path>
                </svg>
            </Box>
        );
    };
    return (
        <SectionContainer>
            <Stack
                maxWidth="1280px"
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
                <Stack
                    width="100%"
                    maxWidth="680px"
                    margin="0 auto"
                    justifyContent="center"
                    paddingY="10"
                    paddingX="8"
                    flexWrap="wrap"
                    gap={12}
                    sm={{
                        flexDirection: "row",
                        paddingTop: "12",
                        paddingBottom: "20",
                        paddingX: "0",
                        justifyContent: "space-between",
                    }}
                >
                    <Platforms platform="Web" />
                    <Platforms platform="Mobile" />
                    <Platforms platform="Headset" />
                </Stack>
            </Stack>
        </SectionContainer>
    );
};

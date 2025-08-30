import { SectionContainer } from "./SectionContainer";
import { Box, Stack, HStack } from "styled-system/jsx";
import { H2 } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";
import StrataScreenShot from "~/assets/StrataScreenshot.png";
import { css } from "styled-system/css";
import { Switch, Match } from "solid-js";
import { Chromium, Smartphone, RectangleGoggles } from "lucide-solid";

export const DesignEasily = () => {
    return (
        <SectionContainer>
            <Stack maxWidth="1200px" margin="0 auto" gap={8}>
                <Stack gap={3}>
                    <H2>Spatial design made simple</H2>
                    <Text color="fg.muted" textAlign="center">
                        With Strata, any designer can prototype and share in
                        minutes.
                    </Text>
                </Stack>
                <Box
                    marginX="0"
                    sm={{ marginX: "4vw" }}
                    md={{ marginX: "10vw" }}
                >
                    <img
                        src={StrataScreenShot.src}
                        alt="Spatial design made simple"
                        class={css({
                            maxWidth: "1200px",
                            width: "100%",
                            margin: "0 auto",
                            borderRadius: "md",
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
            <Stack gap="2.5" alignItems="center" width="20">
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
        );
    };
    return (
        <SectionContainer>
            <Stack maxWidth="1200px" margin="0 auto" gap={8}>
                <Stack gap={3}>
                    <H2>Share with anyone easily</H2>
                    <Text color="fg.muted" textAlign="center">
                        Access your spatial design through the same URL from any
                        device, no download.
                    </Text>
                </Stack>
                <HStack
                    width="100%"
                    maxWidth="480px"
                    margin="0 auto"
                    justifyContent="center"
                    paddingY="10"
                    paddingX="8"
                    flexWrap="wrap"
                    gap={12}
                    sm={{paddingY: "20", paddingX: "0", justifyContent: "space-between"}}
                >
                    <Platforms platform="Web" />
                    <Platforms platform="Mobile" />
                    <Platforms platform="Headset" />
                </HStack>
            </Stack>
        </SectionContainer>
    );
};

import { createSignal, For, Show } from "solid-js";
import { Tabs } from "~/components/ui/tabs";
import { Stack, Box } from "styled-system/jsx";
import { H2 } from "~/components/ui/heading";
import { css } from "styled-system/css";
import { Button } from "../ui/button";
import { STRATA_APP_URL } from "~/constants";
import { SectionContainer } from "./SectionContainer";
import { Text } from "../ui/text";
import { Kbd } from "../ui/kbd";

export const Examples = () => {
    const [selectedExample, setSelectedExample] = createSignal("1");

    const ExampleTabs = (props: Tabs.RootProps) => {
        const options = [
            { id: "1", label: "1" },
            { id: "2", label: "2" },
            { id: "3", label: "3" },
            { id: "4", label: "4" },
        ];
        return (
            <Tabs.Root value={selectedExample()} {...props}>
                <Tabs.List width="fit-content" margin="0 auto">
                    <For each={options}>
                        {(option) => (
                            <Tabs.Trigger
                                value={option.id}
                                paddingBottom="1"
                                paddingInline="0 !important"
                                onClick={() => setSelectedExample(option.id)}
                            >
                                {option.label}
                            </Tabs.Trigger>
                        )}
                    </For>
                    <Tabs.Indicator backgroundColor="fg.default" />
                </Tabs.List>
                <Tabs.Content value="1" width="100%" paddingTop="0 !important">
                    <Iframe id="1" />
                    <IframeHint />
                </Tabs.Content>
                <Tabs.Content value="2" width="100%" paddingTop="0 !important">
                    <Iframe id="2" />
                    <IframeHint />
                </Tabs.Content>
                <Tabs.Content value="3" width="100%" paddingTop="0 !important">
                    <Iframe id="3" />
                    <IframeHint />
                </Tabs.Content>
                <Tabs.Content value="4" width="100%" paddingTop="0 !important">
                    <Iframe id="4" />
                    <IframeHint />
                </Tabs.Content>
                <Tabs.Content value="5" width="100%" paddingTop="0 !important">
                    <Iframe id="5" />
                    <IframeHint />
                </Tabs.Content>
            </Tabs.Root>
        );
    };
    const IframeHint = () => (
        <Text
            textAlign="center"
            marginTop="5"
            marginBottom="2"
            color="fg.muted"
        >
            <Kbd>Drag</Kbd> to look around and press <Kbd>W</Kbd> <Kbd>A</Kbd>{" "}
            <Kbd>S</Kbd> <Kbd>D</Kbd> keys to move
        </Text>
    );
    const Iframe = (props: { id: string }) => {
        const src = `${STRATA_APP_URL}/examples/${props.id}/embed`;
        return (
            <Show when={selectedExample() === props.id}>
                <iframe
                    src={src}
                    allowfullscreen
                    allow="vr; xr; gamepad; fullscreen; accelerometer; gyroscope; autoplay;"
                    class={css({
                        maxWidth: "1280px",
                        width: "100%",
                        aspectRatio: "2/3",
                        display: "block",
                        margin: "0 auto",
                        marginTop: "8",
                        borderRadius: "lg",
                        boxShadow: "0px 0px 12px rgb(36, 36, 36)",
                        sm: {
                            aspectRatio: "16/9",
                        },
                    })}
                ></iframe>
            </Show>
        );
    };

    return (
        <SectionContainer>
            <Stack maxWidth="1280px" margin="0 auto" gap={7}>
                <H2>Explore the latest examples</H2>
                <Stack
                    marginX="0"
                    marginBottom="4"
                    gap={6}
                    sm={{ marginX: "4vw" }}
                    md={{ marginX: "10vw" }}
                >
                    <ExampleTabs size="md" />
                    <Box width="fit-content" margin="0 auto">
                        <a
                            href={
                                `${STRATA_APP_URL}/examples/${selectedExample()}/view`
                            }
                            target="_blank"
                        >
                            <Button
                                variant="subtle"
                                colorPalette="white"
                                size="md"
                            >
                                Open Example
                            </Button>
                        </a>
                    </Box>
                </Stack>
            </Stack>
        </SectionContainer>
    );
};

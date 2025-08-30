import { createSignal, For } from "solid-js";
import { Tabs } from "~/components/ui/tabs";
import { Stack, Box } from "styled-system/jsx";
import { H2 } from "~/components/ui/heading";
import { css } from "styled-system/css";
import { Button } from "../ui/button";
import { STRATA_URL } from "~/constants";
import { SectionContainer } from "./SectionContainer";
import { Text } from "../ui/text";
import { Kbd } from "../ui/kbd";

export const Examples = () => {
    const [selectedExample, setSelectedExample] = createSignal("1");

    const ExampleTabs = (props: Tabs.RootProps) => {
        const options = [
            { id: "1", label: "Example 1" },
            { id: "2", label: "Example 2" },
        ];
        return (
            <Tabs.Root defaultValue={selectedExample()} {...props}>
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
                    <IframeHint />
                    <Iframe src={STRATA_URL + "examples/1/embed"} />
                </Tabs.Content>
                <Tabs.Content value="2" width="100%" paddingTop="0 !important">
                    <IframeHint />
                    <Iframe src={STRATA_URL + "examples/2/embed"} />
                </Tabs.Content>
            </Tabs.Root>
        );
    };
    const IframeHint = () => (
        <Text textAlign="center" marginY="5" color="fg.muted">
            <Kbd>Drag</Kbd> to look around and press <Kbd>W</Kbd> <Kbd>A</Kbd>{" "}
            <Kbd>S</Kbd> <Kbd>D</Kbd> keys to move
        </Text>
    );
    const Iframe = (props: { src: string }) => {
        return (
            <iframe
                src={props.src}
                allowfullscreen
                allow="vr; xr; gamepad; fullscreen; accelerometer; gyroscope; autoplay;"
                class={css({
                    maxWidth: "1200px",
                    aspectRatio: "2/3",
                    display: "block",
                    margin: "0 auto",
                    marginTop: "2",
                    borderRadius: "md",
                    sm: {
                        aspectRatio: "16/9",
                    },
                })}
            ></iframe>
        );
    };

    return (
        <SectionContainer>
            <Stack maxWidth="1200px" margin="0 auto" gap={7}>
                <H2>Explore the latest examples</H2>
                <Stack
                    marginX="0"
                    gap={6}
                    sm={{ marginX: "4vw" }}
                    md={{ marginX: "10vw" }}
                >
                    <ExampleTabs size="md" />
                    <Box width="fit-content" margin="0 auto">
                        <a
                            href={
                                STRATA_URL +
                                "examples/" +
                                selectedExample() +
                                "/edit"
                            }
                            target="_blank"
                        >
                            <Button variant="subtle" colorPalette="white" size="md">
                                Open Editor
                            </Button>
                        </a>
                    </Box>
                </Stack>
            </Stack>
        </SectionContainer>
    );
};

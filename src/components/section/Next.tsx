import { Stack, Box, Grid, GridItem } from "styled-system/jsx";
import { H2, H3 } from "../ui/heading";
import { SectionContainer } from "./SectionContainer";
import { Text } from "../ui/text";
import { Show } from "solid-js";

type TimelineSide = "left" | "right";

type TimelineItemData = {
    title: string;
    description: string;
    status?: string;
    side: TimelineSide;
};

const timelineItems: TimelineItemData[] = [
    {
        title: "Smart Object Layouts",
        description: "No more alignment headaches",
        status: "Coming Soon",
        side: "right",
    },
    {
        title: "Real-time Collaboration",
        description: "Design together in real time",
        status: "Coming Soon",
        side: "left",
    },
    {
        title: "Animation",
        description: "Graceful transition between states",
        status: "Coming Soon",
        side: "right",
    },
    {
        title: "Immersive Authoring",
        description: "Design and collaborate immersively",
        status: "Coming Soon",
        side: "left",
    },
];

const Pill = (props: { value: string }) => (
    <Box
        width="fit-content"
        display="inline-block"
        paddingX="2.5"
        height="28px"
        borderRadius="full"
        background="rgba(255, 255, 255, 0.06)"
        border="1px solid rgba(255, 255, 255, 0.16)"
    >
        <Text fontSize="xs" color="fg.muted" lineHeight="28px">
            {props.value}
        </Text>
    </Box>
);

const TimelineItem = (props: { item: TimelineItemData }) => {
    const { item } = props;
    const isLeft = item.side === "left";

    const CenterDot = () => {
        return (
            <Box
                position="absolute"
                left="50%"
                top="14px"
                transform="translate(-50%, -50%)"
                width="2.5"
                height="2.5"
                borderRadius="full"
                background="border.default"
                zIndex={2}
            />
        );
    };

    return (
        <Grid columns={2} position="relative">
            <Show when={isLeft} fallback={<GridItem colSpan={1} />}>
                <GridItem colSpan={1}>
                    <Stack alignItems="flex-end" gap={3} paddingRight="36px">
                        {item.status ? <Pill value={item.status} /> : null}
                        <Stack gap={0.5}>
                            <H3 textAlign="right" margin="0">
                                {item.title}
                            </H3>
                            <Text color="fg.muted" textAlign="right">
                                {item.description}
                            </Text>
                        </Stack>
                    </Stack>
                </GridItem>
            </Show>

            <CenterDot />

            <Show when={!isLeft} fallback={<GridItem colSpan={1} />}>
                <GridItem colSpan={1}>
                    <Stack gap={3} paddingLeft="36px">
                        {item.status ? <Pill value={item.status} /> : null}
                        <Stack gap={0.5}>
                            <H3 textAlign="left" margin="0">
                                {item.title}
                            </H3>
                            <Text color="fg.muted" textAlign="left">
                                {item.description}
                            </Text>
                        </Stack>
                    </Stack>
                </GridItem>
            </Show>
        </Grid>
    );
};

const VerticalLine = () => {
    return (
        <Box
            position="absolute"
            left="50%"
            top="14px"
            height="428px"
            width="2px"
            transform="translateX(-50%)"
            background="border.default"
            zIndex={1}
        />
    );
};

export const Next = () => {
    return (
        <SectionContainer>
            <Stack maxWidth="1200px" margin="0 auto" gap={12}>
                <Stack gap={3}>
                    <H2>What's next</H2>
                    <Text color="fg.muted" textAlign="center">
                        Strata is constantly growing just like the possibilities
                        of what you can achieve.
                    </Text>
                </Stack>

                <Box position="relative" maxWidth="1200px" margin="0 auto">
                    <VerticalLine />

                    <Stack gap={12}>
                        {timelineItems.map((item) => (
                            <Box position="relative">
                                <TimelineItem item={item} />
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Stack>
        </SectionContainer>
    );
};

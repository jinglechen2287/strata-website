import type { ParentProps } from "solid-js";
import { Stack, Box } from "styled-system/jsx";

const SectionBg = () => {
    return (
        <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="240px"
            zIndex={0}
            background="linear-gradient(180deg, #313131 0%, rgba(41, 41, 41, 0.88) 25%, rgba(25, 25, 25, 0.00) 100%)"
        />
    );
};

export const SectionContainer = (props: ParentProps) => {
    return (
        <Stack width="100%" margin="0 auto" paddingY="60px" paddingX={8} position="relative">
            <SectionBg />
            <Box zIndex={1}>{props.children}</Box>
        </Stack>
    );
};

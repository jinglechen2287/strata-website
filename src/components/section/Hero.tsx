import { H1 } from "~/components/ui/heading";
import { Stack, HStack, Box, Center } from "styled-system/jsx";
import { Check } from "lucide-solid";
import { Text } from "~/components/ui/text";
import PrimaryButton from "~/components/ui/primaryButton";

export const Hero = () => {
    return (
        <Stack gap={10} paddingTop="120px" paddingBottom="160px" paddingX={8}>
            <Stack gap={5}>
                <H1>Create and Share XR Prototypes in Minutes</H1>
                <Stack
                    justifyContent="center"
                    gap={2}
                    sm={{ flexDirection: "row", gap: 6 }}
                >
                    <Highlight text="Web-based" />
                    <Highlight text="Real-time" />
                    <Highlight text="Designer-friendly" />
                </Stack>
            </Stack>
            <Center marginX="-8">
                <Box margin="0 auto">
                    <PrimaryButton />
                </Box>
            </Center>
        </Stack>
    );
};

const Highlight = (props: { text: string }) => {
    return (
        <HStack gap={1.5} justifyContent="center">
            <Check color="#b4b4b4" />
            <Text size="lg" fontWeight="medium" color="fg.muted">
                {props.text}
            </Text>
        </HStack>
    );
};

import { H1 } from "~/components/ui/heading";
import { Stack, HStack, Box } from "styled-system/jsx";
import { Check } from "lucide-solid";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { STRATA_APP_URL } from "~/constants";

export const Hero = () => {
    return (
        <Stack gap={10} paddingTop="120px" paddingBottom="160px">
            <Stack gap={5}>
                <H1>Create and share spatial designs in minutes.</H1>
                <HStack justifyContent="center" gap={6}>
                    <Highlight text="Web-based" />
                    <Highlight text="Real-time" />
                    <Highlight text="Designer-friendly" />
                </HStack>
            </Stack>
            <Box margin="0 auto">
                <a href={STRATA_APP_URL} target="_blank">
                    <Button variant="solid" size="lg" width="fit-content">
                        Get Started
                    </Button>
                </a>
            </Box>
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

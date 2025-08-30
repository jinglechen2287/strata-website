import { Box, Stack, Center } from "styled-system/jsx";
import { Text } from "~/components/ui/text";
import { Link } from "~/components/ui/link";
import { H2 } from "../ui/heading";
import { Button } from "../ui/button";
import { STRATA_APP_URL } from "~/constants";

const FooterBg = () => {
    return (
        <Box
            position="absolute"
            bottom="0"
            left="0"
            width="100%"
            height="320px"
            zIndex={0}
            background="linear-gradient(180deg, rgba(25, 25, 25, 0.00) 0%, #000 100%)"
        />
    );
};

export const Footer = () => {
    return (
        <footer>
            <Stack maxWidth="1200px" margin="0 auto" paddingY="120px" gap={12}>
                <Stack gap={3}>
                    <H2>Ready to Strata?</H2>
                    <Text color="fg.muted" textAlign="center">
                        Love to see what you can build!
                    </Text>
                </Stack>

                <Stack gap={2} alignItems="center">
                    <a href={STRATA_APP_URL} target="_blank">
                        <Button variant="solid" size="lg" width="fit-content">
                            Get Started
                        </Button>
                    </a>
                    <Text textAlign="center" size="sm">
                        {"it's free :)"}
                    </Text>
                </Stack>
            </Stack>
            <Stack
                margin="0 auto"
                paddingY="5"
                borderTopWidth="1px"
                borderTopStyle="solid"
                borderTopColor="border.muted"
            >
                <Text textAlign="center" color="fg.muted">
                    Made by{" "}
                    <Link
                        href="https://www.linkedin.com/in/jingle-chen/"
                        color="fg.muted"
                        target="_blank"
                    >
                        Jingle
                    </Link>
                    . All rights reserved.
                </Text>
            </Stack>
        </footer>
    );
};

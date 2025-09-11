import { Box, Stack } from "styled-system/jsx";
import { Text } from "~/components/ui/text";
import { Link } from "~/components/ui/link";
import { H2 } from "../ui/heading";
import PrimaryButton from "~/components/ui/primaryButton";

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
            <Stack maxWidth="1280px" margin="0 auto" paddingY="120px" gap={12}>
                <Stack gap={3}>
                    <H2>Ready to Strata?</H2>
                    <Text color="fg.muted" textAlign="center">
                        Love to see what you can build!
                    </Text>
                </Stack>

                <Stack gap={2} alignItems="center">
                    <PrimaryButton />
                    <Text textAlign="center" size="sm" marginTop="-6">
                        {"it's free :)"}
                    </Text>
                </Stack>
            </Stack>
            <Box
                borderTopWidth="1px"
                borderTopStyle="solid"
                borderTopColor="border.muted"
            >
                <Stack
                    flexDirection="column"
                    gap={8}
                    maxWidth="1280px"
                    margin="0 auto"
                    paddingY="5"
                    paddingX="8"
                    justifyContent="space-between"
                    sm={{ flexDirection: "row" }}
                    xl={{ paddingX: "0" }}
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
                    <Stack
                        flexDirection="column"
                        sm={{ flexDirection: "row", gap: 8 }}
                        justifyContent="center"
                    >
                        <Link
                            href="/privacy-policy"
                            color="fg.muted"
                            fontWeight="normal"
                            marginX="auto"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms-of-service"
                            color="fg.muted"
                            fontWeight="normal"
                            marginX="auto"
                        >
                            Terms of Service
                        </Link>
                    </Stack>
                </Stack>
            </Box>
        </footer>
    );
};

import { PinInput } from "@ark-ui/solid/pin-input";
import { Index, createSignal } from "solid-js";
import { css } from "styled-system/css";
import { Stack, Center, HStack } from "styled-system/jsx";
import { H1 } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";
import { STRATA_APP_URL } from "~/constants";
import { Button } from "~/components/ui/button";

export const ViewInput = () => {
    const [pinValue, setPinValue] = createSignal("");
    const [isComplete, setIsComplete] = createSignal(false);

    const handleChange = (details: {
        value: string[];
        valueAsString: string;
    }) => {
        setPinValue(details.valueAsString);
        setIsComplete(details.valueAsString.length === 6);
    };

    const handleConfirm = () => {
        if (pinValue().length === 6) {
            window.location.href = `${STRATA_APP_URL}/redirect/${pinValue()}`;
        }
    };

    return (
        <Stack gap={10} paddingTop="120px" paddingBottom="160px" paddingX={8}>
            <Stack gap={5}>
                <H1>View Prototype</H1>
                <Text color="fg.muted" textAlign="center" size="lg">
                    Enter the 6-digit code
                </Text>
            </Stack>

            <Center>
                <Stack gap={6} alignItems="center">
                    <PinInput.Root
                        
                        placeholder="•"
                        onValueChange={handleChange}
                    >
                        <PinInput.Label
                            class={css({
                                srOnly: true,
                            })}
                        >
                            Project Code
                        </PinInput.Label>
                        <HStack gap={{ base: 2, sm: 3 }}>
                            <Index each={[0, 1, 2, 3, 4, 5]}>
                                {(index) => (
                                    <PinInput.Input
                                        index={index()}
                                        class={css({
                                            width: { base: "48px", sm: "64px" },
                                            height: {
                                                base: "60px",
                                                sm: "80px",
                                            },
                                            fontSize: {
                                                base: "24px",
                                                sm: "32px",
                                            },
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            background:
                                                "linear-gradient(to bottom, #1a1a1a, #0d0d0d)",
                                            border: "1px solid",
                                            borderColor: "#333",
                                            borderRadius: "12px",
                                            color: "white",
                                            outline: "none",
                                            transition: "all 0.2s ease",
                                            caretColor: "white",
                                            _focus: {
                                                borderColor: "white",
                                                boxShadow:
                                                    "0 0 20px rgba(255, 255, 255, 0.2)",
                                            },
                                            _hover: {
                                                borderColor: "white",
                                            },
                                            "&::placeholder": {
                                                color: "#444",
                                            },
                                        })}
                                    />
                                )}
                            </Index>
                        </HStack>
                    </PinInput.Root>
                    <Button
                        variant="subtle"
                        size="2xl"
                        borderRadius="xl"
                        marginTop="10"
                        onClick={handleConfirm}
                        disabled={!isComplete()}
                    >
                        Confirm
                    </Button>
                </Stack>
            </Center>
        </Stack>
    );
};

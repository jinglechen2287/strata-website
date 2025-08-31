import { STRATA_URL } from "~/constants";
import { Button } from "~/components/ui/button";
import { HStack } from "styled-system/jsx";

export const Header = () => {
    return (
        <header>
            <HStack justify="space-between" alignItems="center" paddingX={8} paddingY={4}>
                <a href="/"><img src="/strataLogo.svg" alt="Strata" style={{ "width": "60px" }} /></a>
                <a href={STRATA_URL} target="_blank"><Button variant="outline">Get Started</Button></a>
            </HStack>
        </header>
    );
};
import { For } from "solid-js";
import * as StyledTabs from "~/components/ui/styled/tabs";

export const Tabs = (props: StyledTabs.RootProps) => {
    const options = [
        { id: "react", label: "React" },
        { id: "solid", label: "Solid" },
        { id: "svelte", label: "Svelte" },
        { id: "vue", label: "Vue" },
    ];
    return (
        <StyledTabs.Root defaultValue="react" {...props}>
            <StyledTabs.List>
                <For each={options}>
                    {(option) => (
                        <StyledTabs.Trigger
                            value={option.id}
                            disabled={option.id === "svelte"}
                        >
                            {option.label}
                        </StyledTabs.Trigger>
                    )}
                </For>
                <StyledTabs.Indicator />
            </StyledTabs.List>
            <StyledTabs.Content value="react">
                Know React? Check out Solid!
            </StyledTabs.Content>
            <StyledTabs.Content value="solid">
                Know Solid? Check out Svelte!
            </StyledTabs.Content>
            <StyledTabs.Content value="svelte">
                Know Svelte? Check out Vue!
            </StyledTabs.Content>
            <StyledTabs.Content value="vue">
                Know Vue? Check out React!
            </StyledTabs.Content>
        </StyledTabs.Root>
    );
};

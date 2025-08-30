import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import {
    Button as StyledButton,
    type ButtonProps as StyledButtonProps,
} from "./styled/button";

interface ButtonLoadingProps {
    loading?: boolean;
    loadingText?: JSX.Element;
}

export interface ButtonProps extends StyledButtonProps, ButtonLoadingProps {}

export const Button = (props: ButtonProps) => {
    const [localProps, rest] = splitProps(props, [
        "loading",
        "disabled",
        "loadingText",
        "children",
    ]);
    const trulyDisabled = () => localProps.loading || localProps.disabled;

    return (
        <StyledButton disabled={trulyDisabled()} {...rest}>
            <Show when={localProps.loading} fallback={localProps.children}>
                {localProps.loadingText || "Loading..."}
            </Show>
        </StyledButton>
    );
};

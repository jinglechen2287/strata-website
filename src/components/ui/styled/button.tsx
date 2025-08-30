import { ark } from "@ark-ui/solid";
import type { ComponentProps } from "solid-js";
import { button } from "styled-system/recipes";
import { styled } from "styled-system/jsx";

export type ButtonProps = ComponentProps<typeof Button>;
export const Button = styled(ark.button, button);

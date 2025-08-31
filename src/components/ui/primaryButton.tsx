import { css } from "styled-system/css";

export default function PrimaryButton() {
    return (
        <div
            class={css({
                position: "relative",
                display: "inline-block",
                borderRadius: "33px",
            })}
        >
            <div
                aria-hidden="true"
                class={css({
                    transform: "scale(0.55)",
                    transformOrigin: "center",
                    display: "block",
                    background:
                        "conic-gradient(purple, deepskyblue, cyan, green, yellow, orange, red)",
                    filter: "blur(30px)",
                    opacity: 1,
                    position: "absolute",
                    inset: "10px",
                    borderRadius: "3px",
                    zIndex: 0,
                    pointerEvents: "none",
                })}
            />
            <button
                class={css({
                    transform: "scale(0.5)",
                    transformOrigin: "center",
                    transition: "transform 0.1s ease-in-out",
                    backgroundColor: "rgb(255 255 255 / 0.3)",
                    padding: "15px",
                    borderRadius: "33px",
                    border: "none",
                    position: "relative",
                    boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent",
                    zIndex: 1,
                    _hover: {
                        transform: "scale(0.53)",
                    },
                    _active: {
                        transform: "scale(0.5)",
                    },
                    "&:hover:active": {
                        transform: "scale(0.5)",
                    },
                    _after: {
                        content: '""',
                        display: "block",
                        background:
                            "linear-gradient(to bottom,rgb(255 255 255 / 0.5) 0%,rgb(255 255 255 / 0.5) 2px,rgb(100 100 100 / 0.1) 30%,rgb(100 100 100 / 0.1) 70%,rgb(255 255 255 / 0.5) 99%,rgb(255 255 255 / 0.5) 100%)",
                        position: "absolute",
                        inset: "-1.5px",
                        borderRadius: "33px",
                        zIndex: 6,
                    },
                })}
            >
                <span
                    class={css({
                        position: "relative",
                        display: "inline-block",
                        background:
                            "linear-gradient(to bottom, #424242, #343434)",
                        borderRadius: "18px",
                        fontSize: "42px",
                        color: "white",
                        paddingY: "15px",
                        paddingX: "20px",
                        borderStyle: "solid",
                        borderTopColor: "#5b5b5bff",
                        borderBottomColor: "#282828ff",
                        borderYWidth: "1px",
                        boxShadow: "0 8px 10px rgb(0 0 0 / 0.3)",
                        zIndex: 10,
                    })}
                >
                    <span
                        class={css({
                            display: "block",
                            paddingY: "12px",
                            paddingX: "30px",
                            borderRadius: "50px",
                            background:
                                "linear-gradient(to bottom, #2d2d2dff, #424242)",
                            zIndex: 10,
                            fontWeight: "semibold",
                        })}
                    >
                        Get Started
                    </span>
                </span>
            </button>
        </div>
    );
}

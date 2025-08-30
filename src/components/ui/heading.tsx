import { Heading, type HeadingProps } from "./styled/heading";

export const H1 = (props: HeadingProps) => {
    return (
        <Heading
            as="h1"
            size="6xl"
            textAlign="center"
            maxWidth="760px"
            margin="0 auto"
            {...props}
        />
    );
};

export const H2 = (props: HeadingProps) => {
    return (
        <Heading
            as="h2"
            size="4xl"
            textAlign="center"
            maxWidth="1200px"
            margin="0 auto"
            {...props}
        />
    );
};

export const H3 = (props: HeadingProps) => {
    return (
        <Heading
            as="h3"
            size="lg"
            textAlign="center"
            maxWidth="1200px"
            margin="0 auto"
            {...props}
        />
    );
};

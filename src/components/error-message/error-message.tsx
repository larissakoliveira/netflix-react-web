import { Error } from "./error-message.styled";

export default function ErrorMessage(props: any) {
    const { message, ...restProps } = props;

    return (
    <Error {...restProps}>
        {message}
    </Error>
    )
}
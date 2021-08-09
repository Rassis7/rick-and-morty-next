import styled, {css} from "styled-components";

export const Text = styled.p<{color: string}>`
    align-self: center;
    width: 5rem;
    font-size: 0,8rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
    text-align: center;

    text-transform: uppercase;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${props => !!props.color && css`
        color: var(--gray-500);
        background-color: var(--${props.color}-200);
        filter: brightness(0.3);
    `};
`
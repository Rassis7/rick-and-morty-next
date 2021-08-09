import styled from "styled-components";
import NextImage from "next/image";

export const Container = styled.div<{width: number}>`
    background-color: var(--gray-700);
    color: var(--white);
    padding: 1rem;
    margin: 1rem;

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: ${props => props.width}rem;

    &:hover {
        background-color: var(--gray-800);
    }
`

export const Image = styled(NextImage)`
    border-radius: 50%;
    border: none;
`

export const Description = styled.article<{widthParent: number}>`
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    max-width: ${props => props.widthParent / 2}rem;
    text-align: center;
`

export const Title = styled.h1`
    color: var(--purple-500);
    font-weight: 600;
    font-size: 1.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 0.3rem;
`

export const Subtitle = styled.h3`
    color: var(--gray-500);
    font-size: 1rem;
    white-space: nowrap;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 0.3rem;
`


export const Status = styled.p`
    align-self: center;
    width: 5rem;
    background-color: var(--green-200);
    color: var(--gray-500);
    filter: brightness(0.3);
    font-size: 0,8rem;
    font-weight: 700;
    margin-bottom: 0.3rem;

    text-transform: uppercase;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`
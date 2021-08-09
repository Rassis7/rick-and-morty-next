import styled from "styled-components";
import NextImage from "next/image";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const Title = styled.h1`
    color: var(--purple-500);
    font-weight: 800;
    font-size: 2rem;
    margin: 1rem 0.5rem;
`

export const Status = styled.p`
    align-self: center;
    width: 5rem;
    background-color: var(--green-200);
    color: var(--gray-500);
    filter: brightness(0.3);
    font-size: 0,8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;

    text-transform: uppercase;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
`

export const Text = styled.h4`
    color: var(--gray-500);
    font-size: 1rem;
    white-space: nowrap;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
`

export const Image  = styled(NextImage)`
    border-radius: 1rem;
`


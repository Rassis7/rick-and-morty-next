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


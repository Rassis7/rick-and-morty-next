import { Character } from "../../types/character";
import { Container, Description, Image, Subtitle, Title, Status } from "./styles";
import Link from "next/link";

const CARD_WIDTH = 25
export function Card ({ image, location, name, specie, status}: Character) {
    const URL = location.url.replace('https://rickandmortyapi.com/api/location/', '')
    return (
        <Container width={CARD_WIDTH}>
            <Image src={image} alt={name} layout="fixed" width="100" height="100" />
            <Description widthParent={CARD_WIDTH}>
                <Title>{name}</Title>
                <Subtitle>{specie}</Subtitle>
                <Subtitle>
                    <Link as="a" href={`/location/${URL}`}>
                        {location.name}
                    </Link>
                </Subtitle>
                <Status>{status}</Status>
            </Description>
        </Container>
    )
}
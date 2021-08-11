import { Character } from "../../types/character";
import { Container, Description, Image, Subtitle, Title } from "./styles";
import Link from "next/link";
import { Status } from "../status";


const CARD_WIDTH = 25
export function Card ({ id, image, location, name, specie, status}: Character) {
    const URL = location.url.replace('https://rickandmortyapi.com/api/location/', '')
    return (
        <Container width={CARD_WIDTH}>
            <Image src={image} alt={name} layout="fixed" width="100" height="100" />
            <Description widthParent={CARD_WIDTH}>
                <Title>
                <Link href={`/character/${id}`}>
                    {name}
                </Link>
                </Title>
                <Subtitle>{specie}</Subtitle>
                <Subtitle>
                    {location.name}
                </Subtitle>
                <Status value={status}/>
            </Description>
        </Container>
    )
}
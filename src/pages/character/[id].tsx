import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { get } from "../../services/api/fetch";
import { Character as CharacterType,  } from "../../types/character";
import { Container, Status, Title, Text, Image } from "./styles";
import { useRouter } from "next/dist/client/router";

export default function Character() {
  const {query} = useRouter()  
  const [character, setCharacter] = useState<CharacterType>()
    
  const getCharacters = useCallback(async () => {
    if(!query.id) return;
    const url = `https://rickandmortyapi.com/api/character/${query.id}`
    const data = await get<CharacterType>(url)
    setCharacter(data)
  },[query])

  useEffect(() => {
    getCharacters()
  }, [getCharacters])


    console.log(character);
    
    if (!character) return null;

    return (
        <>
        <Head>
            <title>{character.name} | Rick And Morty</title>
        </Head>
        <Container>
            <Image src={character.image} alt={character.name} width="200" height="200" />
            <Title>{character.name}</Title>
            <Status>{character.status}</Status>
            <Text>{character.specie}</Text>
            <Text>{character.gender}</Text>
            <Text>{`Origem: ${character.origin.name}`}</Text>
            <Text>{`Localização: ${character.location.name}`}</Text>
        </Container>
        </>
    )
}
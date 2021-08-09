import Head from "next/head";
import { Character as CharacterType, CharacterResponse  } from "../../types/character";
import { Container, Status, Title, Text, Image } from "../../styles/character-page";
import { useRouter } from "next/dist/client/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { get } from '../../services/api/fetch'

export default function Character({character}: {character: CharacterType}) {
  const { isFallback } = useRouter()  

    if (isFallback) return <Title>Carregando...</Title>;

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

export const getStaticPaths: GetStaticPaths = async () => {
    const characters = await get<CharacterResponse>('https://rickandmortyapi.com/api/character?page=1')
    const paths = characters.results.map((character) => ({
      params: { id: character.id.toString() },
    }))
  
    return { paths, fallback: true }
}


export const getStaticProps: GetStaticProps = async ({params}) => {
  const url = `https://rickandmortyapi.com/api/character/${params.id}`
  const data = await get<CharacterType>(url)
 
  return {
    props: {
      character: data
    },
    revalidate: 20
  }
}
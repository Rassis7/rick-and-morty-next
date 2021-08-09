import { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { get } from '../services/api/fetch'
import { Character, CharacterResponse } from '../types/character'
import { Card } from '../components/card'



export default function Home() {
  const [page] = useState(1)
  const [characters, setCharacters] = useState<Character[]>()

  const getCharacters = useCallback(async () => {
    let currentPage = page < 1 ? 1 : page
    const url = `https://rickandmortyapi.com/api/character?page=${currentPage}`
    const data = await get<CharacterResponse>(url)
    setCharacters(data.results)
  },[page])

  useEffect(() => {
    getCharacters()
  }, [getCharacters])

  return (
    <>
    <Head>
      <title>Personagens | Rick And Morty</title>
    </Head>

    <div style={{display: 'flex', alignItems:'center', flexDirection:'column', width: '100%'}}>
    <h1 style={{marginTop: '2rem'}}>NextJS - Rick and Morty</h1>
    {!!characters && characters.map(character => <Card key={character.name} {...character}/> )}
    </div>
    </>
  )
}

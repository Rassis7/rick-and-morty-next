import { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { get } from '../services/api/fetch'
import { Character, CharacterResponse } from '../types/character'
import { Card } from '../components/card'



export default function Home() {
  const [page, setPage] = useState(1)
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

    {!!characters && characters.map(character => <Card key={character.name} {...character}/> )}
    </>
  )
}

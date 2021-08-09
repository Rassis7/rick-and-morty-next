import Head from 'next/head'
import { get } from '../services/api/fetch'
import {  CharacterResponse } from '../types/character'
import { Card } from '../components/card'
import { GetServerSideProps } from 'next'



export default function Home({ results }: CharacterResponse) {
  if(!results || !results.length) return null;
  
  return (
    <>
    <Head>
      <title>Personagens | Rick And Morty</title>
    </Head>

    {!!results && results.map(character => <Card key={character.name} {...character}/> )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () =>  {
  const url = `https://rickandmortyapi.com/api/character?page=1`
  const data = await get<CharacterResponse>(url)
  return {
    props: {
      results: data.results
     }
  }
}

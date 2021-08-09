export interface Character {
    id: number
    name: string
    image: string
    status: string
    specie: string
    location: {
      name: string
      url: string
    }
  }

export interface CharacterResponse {
    results: Character[]
}
  
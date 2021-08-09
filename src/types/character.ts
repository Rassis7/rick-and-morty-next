export interface Character {
    id: number
    name: string
    image: string
    status: string
    specie: string
    gender: string
    created: string
    origin: {
      name: string
      url: string
    }
    location: {
      name: string
      url: string
    }
  }

export interface CharacterResponse {
    results: Character[]
}
  
export interface IListPianoChords {
  type: string,
  chords: [
    {
      name: string,
      keys: [
        {
          name: string
        }
      ]
    }
  ]
}
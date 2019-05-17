import { pianoChords } from "./pianoChords";
import { IListPianoChords } from "../model/IListPianoChords";

let listPianoChords: [IListPianoChords] = pianoChords.pianoChords;

export function getPianoChords(chord: string) {
  if (chord !== null && typeof(chord) === 'string') {
    return listPianoChords.filter( (pianoChords: IListPianoChords) => pianoChords.type = chord);
  } else {
    return null
  }
} 

export function getAllPianoChords(): [IListPianoChords] {
  return listPianoChords
}

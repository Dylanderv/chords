import { Component, h, State } from '@stencil/core';
import { IListPianoChords } from '../../model/IListPianoChords';
import { getAllPianoChords } from '../../helpers/pianoChordsHelper';
import { IChord } from '../../model/IChord';


@Component({
  tag: 'app-chords',
  styleUrl: 'app-chords.css'
})
export class AppChords {
  @State() pianoChords: [IListPianoChords]
  @State() selectedChordType: IListPianoChords = null;
  @State() selectedChord: IChord = null;

  componentWillLoad() {
    this.initComponent();
  }
  
  initComponent() {
    this.pianoChords = getAllPianoChords();
    console.log(this.pianoChords)
  }

  handleSelectChordType(ev) {
    this.selectedChordType = this.pianoChords.find(chordType => chordType.type === ev.detail);
  }

  handleSelectChord(ev) {
    this.selectedChord = this.selectedChordType.chords.find(chord => chord.name === ev.detail);
  }

  render() {
    return (
      <div>

        <app-selector onSelectedChanged={ev => this.handleSelectChordType(ev)} list={this.pianoChords.map(typedChords => typedChords.type)}></app-selector>

        {this.selectedChordType === null ? "" : 
          <app-selector onSelectedChanged={ev => this.handleSelectChord(ev)} list={this.selectedChordType.chords.map(chord => chord.name)}></app-selector>}


        {this.selectedChord === null ? "" : <app-chord chord={this.selectedChord}></app-chord>}

      </div>
    );
  }
}

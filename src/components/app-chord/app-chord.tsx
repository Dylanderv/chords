import { Component, h, Prop } from '@stencil/core';
import { IChord } from '../../model/IChord';


@Component({
  tag: 'app-chord',
  styleUrl: 'app-chord.css'
})
export class AppChord {

  @Prop() chord: IChord;

  render() {
    return (
      <div>
        <p>Hello AppChord!</p>
        <p>{this.chord.name}</p>
      </div>
    );
  }
}

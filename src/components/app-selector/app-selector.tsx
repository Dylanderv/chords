import { Component, h, Prop, State, EventEmitter, Event } from '@stencil/core';

@Component({
    tag: 'app-selector',
    styleUrl: 'app-selector.css'
})
export class AppSelector {

  @Prop() list: string[];
  @State() currentList: string[] = null;
  @State() currentlySelectedElement: HTMLSpanElement = null;
  @Event() selectedChanged: EventEmitter;

  componentWillLoad() {
    this.currentList = this.list;
  }

  componentWillUpdate() {
    if (this.currentList[0] !== this.list[0]) {
      console.log('salut')
      if (this.currentlySelectedElement !== null) this.currentlySelectedElement.classList.remove('selected');
      this.currentList = this.list;
    }
  }

  handleSelect(ev: MouseEvent, element: string) {
    if (this.currentlySelectedElement !== null) {
      this.currentlySelectedElement.classList.remove('selected');
    }
    this.currentlySelectedElement = (ev.target as HTMLSpanElement);
    this.currentlySelectedElement.classList.add('selected');
    this.selectedChanged.emit(element);
  }

  render() {
    return (
      <div>
        <hr></hr>
        {this.currentList.map((element: string) => {
          return (
            <span onClick={(ev) => this.handleSelect(ev, element)}>{element}</span>
          )}
        )}
        <hr></hr>
      </div>
    );
  }
}

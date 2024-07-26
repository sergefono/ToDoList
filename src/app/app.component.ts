import { Component } from '@angular/core';
import { List } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDoList';
  public listLabel = '';
  public itemContent = '';
  public lists: List[] = [];

  public addList(): void {
    if (this.listLabel) {
      this.lists.push({
        label: this.listLabel,
        items: [],
      });
      this.listLabel = '';
    }
  }

  public addItem(list: List): void {
    if (this.itemContent) {
      list.items.push({
        content: this.itemContent,
      });
      this.itemContent = '';
    }
  }

  public switchItem($event: {
    src: {
      itemIndex: number;
      listIndex: number;
    };
    dst: {
      itemIndex: number;
      listIndex: number;
    };
  }): void {
    [
      this.lists[$event.src.listIndex].items[$event.src.itemIndex],
      this.lists[$event.dst.listIndex].items[$event.dst.itemIndex],
    ] = [
      this.lists[$event.dst.listIndex].items[$event.dst.itemIndex],
      this.lists[$event.src.listIndex].items[$event.src.itemIndex],
    ];
    /*  const tmp = this.lists[$event.src.listIndex].items[$event.src.itemIndex];
    this.lists[$event.src.listIndex].items[$event.src.itemIndex] =
      this.lists[$event.dst.listIndex].items[$event.dst.itemIndex];
    this.lists[$event.dst.listIndex].items[$event.dst.itemIndex] = tmp; */
  }
}

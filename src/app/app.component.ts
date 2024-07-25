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

  public switchItem($event: { srcIndex: number; dstIndex: number }): void {
    const tmp = this.lists[0].items[$event.srcIndex];
    this.lists[0].items[$event.srcIndex] = this.lists[0].items[$event.dstIndex];
    this.lists[0].items[$event.dstIndex] = tmp;
  }
}

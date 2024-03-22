import { Component, Input } from '@angular/core';

import { NgFor } from '@angular/common';

@Component({
  selector: 'unordered-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './unordered-list.component.html',
  styleUrl: './unordered-list.component.css',
})
export class UnorderedListComponent {
  @Input() title: string = '';
  @Input() itemsList: string[] = [];
}

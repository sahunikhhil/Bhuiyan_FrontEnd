import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  listSelector: string = 'list1'; // Default selection
  selectedValue: string | undefined;

  list1: any[] = [
    { text: 'Option 1', value: 1 },
    { text: 'Option 2', value: 2 },
    { text: 'Option 3', value: 3 }
  ];

  list2: any[] = [
    { text: 'Option A', value: 10 },
    { text: 'Option B', value: 20 },
    { text: 'Option C', value: 30 }
  ];
}

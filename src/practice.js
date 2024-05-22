// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';

// @Component({
//     selector: 'app-your-component',
//     templateUrl: './your-component.html',
//     styleUrls: ['./your-component.css']
// })
// export class YourComponent implements OnInit {
//     form: FormGroup;
//     list1 = [{ value: '1', text: 'Option 1' }, { value: '2', text: 'Option 2' }]; // Example data
//     list2 = [{ value: 'A', text: 'Option A' }, { value: 'B', text: 'Option B' }]; // Example data

//     ngOnInit() {
//         this.form = new FormGroup({
//             listSelector: new FormControl(''),  // Radio buttons
//             selectedItem: new FormControl({ value: '', disabled: true }) // Dropdown, initially disabled
//         });

//         // Update the dropdown based on radio selection
//         this.form.get('listSelector').valueChanges.subscribe(value => {
//             this.form.get('selectedItem').enable();
//             if (!value) {
//                 this.form.get('selectedItem').disable();
//             }
//         });
//     }
// }





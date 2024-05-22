import { Component } from '@angular/core';
import { BhuiyanService } from '../bhuiyan.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  gram = "चयनित ग्राम-";
  khasara = ", खसरा-";
  selectedGram: string = '';
  selectedKhasara = ''
  // villages: string[] = ['मडेली', 'कचना', 'जी-जामगांव', 'बिरेझर', 'अभनपुर'];

  onClick(name: string) {
    console.log(name + " button is pressed.")
  }

  viilage: any[] = [];

}

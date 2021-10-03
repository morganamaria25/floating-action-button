import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogBtnOneComponent} from "./components/dialog-btn-one/dialog-btn-one.component";
import {DialogBtnTwoComponent} from "./components/dialog-btn-two/dialog-btn-two.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Floating Action Button';


  // Morgana Maria
  // Floating Action Button
  // 03.10.2021

  public openbtn: boolean = false;

  constructor(public dialog: MatDialog) {}

  clickBtn(){
    this.openbtn = !this.openbtn;
  }
// Utilizei o MatDialog do angular material
// para sinalizar qual botão foi acionado
// I used Angular Material's MatDialog
// to signal which button was pressed

// Aqui é a chamada do primeiro Dialog
// Here is the call of the first Dialog

  dialogBtnOne() {
    this.dialog.open(DialogBtnOneComponent);
  }

  dialogBtnTwo() {
    this.dialog.open(DialogBtnTwoComponent);
  }

}

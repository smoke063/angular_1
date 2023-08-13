import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ThemeInfo} from "../../interfaces/theme-info.interface";

@Component({
  selector: 'card-info',
  templateUrl: 'card-info.component.html',
  styleUrls: ['card-info.component.css'],
})
export class CardInfoComponent {
 constructor(@Inject(MAT_DIALOG_DATA) public data: ThemeInfo) {}

}

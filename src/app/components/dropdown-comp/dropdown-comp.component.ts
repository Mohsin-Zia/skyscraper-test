
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-dropdown-comp',
  templateUrl: './dropdown-comp.component.html',
  styleUrls: ['./dropdown-comp.component.css']
})
export class DropdownCompComponent {
  @Input() myInputData: any | undefined;
  @Input() index: any | undefined;

  ngOnInit() {
    console.log(this.myInputData);
  }
  
}

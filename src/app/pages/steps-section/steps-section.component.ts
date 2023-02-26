import { Component } from '@angular/core';

@Component({
  selector: 'app-steps-section',
  templateUrl: './steps-section.component.html',
  styleUrls: ['./steps-section.component.css']
})
export class StepsSectionComponent {
  openDropdown: number | null = null;
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  myData = 'Hello, world!';

  stepsData = [
  {title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",img:"../../../assets/images/stepsimage1.svg"}, 
  {title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",img:"../../../assets/images/stepsimage2.svg"},
  {title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",img:"../../../assets/images/stepsimage3.svg"},
  {title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",img:"../../../assets/images/stepsimage4.svg"},
  {title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",img:"../../../assets/images/stepsimage5.svg"},
  {title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",img:"../../../assets/images/stepsimage6.svg"}
  ];
}

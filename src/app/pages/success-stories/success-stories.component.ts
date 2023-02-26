import { Component } from '@angular/core';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css']
})
export class SuccessStoriesComponent {

   sucessData = [
    {
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Integer enim.",
    image:"../../../assets/images/sucessImage1.png",
    title:"Lorem Ipsum",
    para:"Lorem ipsum dolor sit dolor sit"
  },
  {
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Integer enim.",
    image:"../../../assets/images/sucessImage2.png",
    title:"Lorem Ipsum",
    para:"Lorem ipsum dolor sit dolor sit"
  },
  {
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Integer enim.",
    image:"../../../assets/images/sucessImage3.png",
    title:"Lorem Ipsum",
    para:"Lorem ipsum dolor sit dolor sit"
  },
  {
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Integer enim.",
    image:"../../../assets/images/sucessImage4.png",
    title:"Lorem Ipsum",
    para:"Lorem ipsum dolor sit dolor sit"
  },
  {
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Integer enim.",
    image:"../../../assets/images/sucessImage5.png",
    title:"Lorem Ipsum",
    para:"Lorem ipsum dolor sit dolor sit"
  }
  ]
}

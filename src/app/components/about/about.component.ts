import { NgClass, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  imports: [NgClass, NgSwitch,NgSwitchCase, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true
})
export class AboutComponent implements OnInit{
  isOpen:boolean = false;
  optionChoosed: string = "mim";
  textContent:any[] = [];
  constructor(private service: AboutService){}
  ngOnInit(): void {
    this.textContent = this.service.getAboutContent();
  }
  openOverlay(){
    this.isOpen = true;
  }

  closeOverlay(){
    this.isOpen = false;
  }

  getContentSection(postion:number){
    return this.textContent[postion];
  }

  downloadCV(){

  }
}

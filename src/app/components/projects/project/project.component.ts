import { Component, Input } from '@angular/core';
import { project } from '../../../models/project';
import { NgFor, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [NgFor, SlicePipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  standalone:true
})
export class ProjectComponent {
  @Input() project:project = {
    id: 0,
    status: "",
    name: '',
    shortDescription: '',
    longDescription: '',
    imgProject:"",
    urlDeploy: '',
    languages: ['', ''],
    languagesImgs: ["", ""]
  }
}

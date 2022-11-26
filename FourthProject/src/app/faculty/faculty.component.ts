import { Faculty } from './../faculty';
import { Component } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],
})
export class FacultyComponent {
  data: Faculty[] = [];
  constructor(private __api: ApiFacultyService) {}
  ngOnInit() {
    this.__api.getAllFaculties().subscribe((res: any) => {
      this.data = res;
      // console.log(this.data);
    });
  }
}

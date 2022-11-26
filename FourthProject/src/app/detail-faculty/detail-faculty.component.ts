import { Faculty } from './../faculty';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';

@Component({
  selector: 'app-detail-faculty',
  templateUrl: './detail-faculty.component.html',
  styleUrls: ['./detail-faculty.component.css'],
})
export class DetailFacultyComponent {
  id = 0;
  data: Faculty = new Faculty();
  constructor(
    private __activatedRoute: ActivatedRoute,
    private __api: ApiFacultyService,
    private __router: Router
  ) {}
  ngOnInit() {
    this.id = this.__activatedRoute.snapshot.params['id'];
    this.__api.getFacultyById(this.id).subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }

  delete() {
    this.__api.deleteStudentById(this.id).subscribe((res) => {
      this.__router.navigate(['faculties']);
    });
  }
}

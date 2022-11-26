import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiFacultyService } from '../api-faculty.service';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css'],
})
export class AddFacultyComponent {
  id = -1;
  constructor(
    private __api: ApiFacultyService,
    private __router: Router,
    private __activatedRoute: ActivatedRoute
  ) {}
  myForm = new FormGroup({
    FacultyName: new FormControl('', Validators.required),
    FacultyDesignation: new FormControl('', Validators.required),
    FacultyEducationQualification: new FormControl('', Validators.required),
    FacultyExperience: new FormControl('', Validators.required),
    FacultyWorkingSince: new FormControl('', Validators.required),
    FacultyImage: new FormControl('', Validators.required),
  });

  ngOnInit() {
    if (this.__activatedRoute.snapshot.params['id'] != null) {
      this.id = this.__activatedRoute.snapshot.params['id'];
      this.__api.getFacultyById(this.id).subscribe((res: any) => {
        this.myForm.controls.FacultyName.setValue(res.FacultyName);
        this.myForm.controls.FacultyDesignation.setValue(
          res.FacultyDesignation
        );
        this.myForm.controls.FacultyEducationQualification.setValue(
          res.FacultyEducationQualification
        );
        this.myForm.controls.FacultyExperience.setValue(res.FacultyExperience);
        this.myForm.controls.FacultyWorkingSince.setValue(
          res.FacultyWorkingSince
        );
        this.myForm.controls.FacultyImage.setValue(res.FacultyExperience);
      });
    }
  }
  insert() {
    if (this.id > 0) {
      this.__api.updateFaculty(this.id, this.myForm.value).subscribe(() => {
        this.__router.navigate(['faculties']);
      });
    } else {
      this.__api.insertFaculty(this.myForm.value).subscribe(() => {
        this.__router.navigate(['faculties']);
      });
    }
  }
}

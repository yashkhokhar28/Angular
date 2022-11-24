import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css'],
})
export class AddfacultyComponent {
  myForm = new FormGroup({
    FacultyName: new FormControl(''),
    FacultyDesignation: new FormControl(''),
    FacultyEducationQualification: new FormControl(''),
    FacultyExperience: new FormControl(''),
    FacultyWorkingSince: new FormControl(''),
    FacultyImage: new FormControl(''),
  });

  faculties: Faculty[] = [];

  idToEdit = -1;

  insert() {
    if (this.idToEdit < 0) {
      this.faculties.push(<Faculty>this.myForm.value);
    } else {
      this.faculties[this.idToEdit] = <Faculty>this.myForm.value;
    }

    this.myForm.controls.FacultyName.setValue('');
    this.myForm.controls.FacultyDesignation.setValue('');
    this.myForm.controls.FacultyEducationQualification.setValue('');
    this.myForm.controls.FacultyExperience.setValue('');
    this.myForm.controls.FacultyWorkingSince.setValue('');
    this.myForm.controls.FacultyImage.setValue('');
    this.idToEdit = -1;
  }

  delete(i: any) {
    this.faculties.splice(i, 1);
  }
  setValueForEdit(i: any) {
    this.idToEdit = i;
    this.myForm.controls.FacultyName.setValue(this.faculties[i].FacultyName);
    this.myForm.controls.FacultyDesignation.setValue(
      this.faculties[i].FacultyDesignation
    );
    this.myForm.controls.FacultyEducationQualification.setValue(
      this.faculties[i].FacultyEducationQualification
    );
    this.myForm.controls.FacultyExperience.setValue(
      this.faculties[i].FacultyExperience
    );
    this.myForm.controls.FacultyWorkingSince.setValue(
      this.faculties[i].FacultyWorkingSince
    );
    this.myForm.controls.FacultyImage.setValue(this.faculties[i].FacultyImage);
  }
}

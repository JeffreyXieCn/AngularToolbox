import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validator';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  forbiddenProjectnames = ['Test', 'Temp', 'aaa', 'abc'];

  projectFormSubmitted = false;

  constructor() {}

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectname: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      email: new FormControl(null, [Validators.required, Validators.email], CustomValidators.asyncForbiddenEmails),
      projectstatus: new FormControl('Critical')
    });
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectnames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  onSubmit() {
    this.projectFormSubmitted = true;
  }
}

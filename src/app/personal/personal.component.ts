import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class PersonalComponent implements OnInit {
  // This is the inferred type of the form
  form!: FormGroup<{
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
    gender: FormControl<string | null>;
  }>;
  genderOptions: string[] = [
    'Female',
    'Male',
    'Non-binary',
    'Gender non-conforming',
    'Prefer not to say',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { loanData } from '../data/loan/loanData';
import { ageRangeValidator } from '../validator/ageValidator';
import { LoanService } from '../loan.service'
import { PERIODDATA } from '../data/period/periodData';
import { Period } from '../data/period/period';

@Component({
  selector: 'app-cicilan',
  templateUrl: './cicilan.component.html',
  styleUrls: ['./cicilan.component.css']
})

export class CicilanComponent implements OnInit {
  loan = loanData;
  period: Period[];
  isHidden = false;
  form: any;

  constructor(
    private fb: FormBuilder,
    private loanService: LoanService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      loan: ['', Validators.required],
      period: ['', Validators.required],
      fullName: ['', [Validators.required, Validators.maxLength(50)]],
      bornDate: ['', [Validators.required, ageRangeValidator(70)]],
      gender1: ['', Validators.required],
    });
    this.getPeriod()
    // console.log(this.period)
  }

  onSubmit() {
    this.isHidden = true
  }

  getPeriod(): void {
    // this.period = this.loanService.getPeriod()
    this.loanService.getPeriod()
      .subscribe(period => this.period = period)
  }

}

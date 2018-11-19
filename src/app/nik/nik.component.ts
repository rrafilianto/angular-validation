import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { nikValidator } from '../validator/nikValidator';

@Component({
  selector: 'app-nik',
  templateUrl: './nik.component.html',
  styleUrls: ['./nik.component.css']
})
export class NikComponent implements OnInit {
  ktpNo: any
  @Input() formData: any
  allData: any
  showData = false
  
  constructor() { }

  ngOnInit() {
    this.ktpNo = new FormControl('', [Validators.required, Validators.maxLength(16), nikValidator(this.formData.gender1, this.formData.bornDate)])
  }

  onClick() {
    this.formData.ktpNo = this.ktpNo.value
    this.allData = this.formData
    this.showData = true;
  }
}

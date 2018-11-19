import { Component, OnInit, Input } from '@angular/core';
import { LoanService} from './../loan.service';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  @Input() allData: any
  public viewData: any
  public period: any
  public getForm: any
  private form = {
    id: '',
    title: ''
  }

  constructor(
    private loanService: LoanService,
  ) { }

  ngOnInit() {
    this.viewData = [
      {name: 'Jumlah Pinjaman', value: "Rp. " + this.allData.loan + " juta"},
      {name: 'Periode Pinjaman', value: this.allData.period + " bulan"},
      {name: 'Nama', value: this.allData.fullName},
      {name: 'Tanggal Lahir', value: this.allData.bornDate},
      {name: 'Jenis Kelamin', value: this.allData.gender1 == "male" ? "Laki-laki" : "Perempuan"},
      {name: 'Periode Pinjaman', value: this.allData.period},
      {name: 'Nomor KTP', value: this.allData.ktpNo},
    ]

  }

  getPeriod() {
    this.loanService.getPeriod()
      .subscribe(period => this.period = period)
  }

  getData() {
    this.loanService.getData()
      .subscribe(
        response => this.getForm = response,
        error => console.log(error),
      )
  }

  postData() {
    this.loanService.postData(this.form)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      )
  }

  onKeyId(event: any) {
    this.form.id = event.target.value;
  }

  onKeyName(event: any) {
    this.form.title = event.target.value;
  }

  onClick() {
    this.postData()
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { SalonlarService } from 'src/app/services/salonlar.service';
import { salonlar } from 'src/app/models/salonlar.model';


@Component({
  selector: 'app-salonlar',
  templateUrl: './salonlar.component.html',
  styleUrls: ['./salonlar.component.css']
})
export class salonlarComponent implements OnInit {

  salonlar$: salonlar[];  

  constructor(private service:SalonlarService) { }

  ngOnInit() {
    return this.service.getSalonlar()
    .subscribe(data =>this.salonlar$ = data)
  
  }

  

/*
  public delete(id: number) {
      this.service.delete(id)
        .subscribe(data => {
        console.log(data);
        this.getAll();
        },
          error => console.log(error));
        
  }  

  public refresh(): void {
      window.location.reload();
  }  
 
  //INSERT
  newValue(): void {
    this.submitted = false;
    this.scity = new Scity();
  }

  save() {
    this.service.create(this.scity)//************************************* 
      .subscribe(data => console.log(data), error => console.log(error));
    this.scity = new Scity();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  //  this.refresh();
    this.service.refreshList();
  }

*/
}

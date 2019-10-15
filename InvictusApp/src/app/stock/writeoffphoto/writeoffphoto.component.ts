import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

//hier begin die kak
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
// import { AddProduct } from '../shared/add-product.model';
import { ProductService } from '../shared/product.service'
import { HttpClient } from '@angular/common/http';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { filter } from 'minimatch';
import { stringify } from '@angular/compiler/src/util';
import { JsonPipe } from '@angular/common';
//hier eindig die kak

@Component({
  selector: 'app-writeoffphoto',
  templateUrl: './writeoffphoto.component.html',
  styleUrls: ['./writeoffphoto.component.scss']
})
export class WriteoffphotoComponent implements OnInit {

  myObject: any;

  public data2 = {};

  updateProdID: any;

  urlString: string;

  constructor(private http: HttpClient, private myProdServ: ProductService, private formBuilder: FormBuilder,
    //PopUp Construtor\
    public dialogRef: MatDialogRef<WriteoffphotoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {



    this.myProdServ.myMethod$.subscribe((data2) => {
      console.log('this is data2: ', data2);
      this.updateProdID = data2;

      this.myProdServ.getWriteOffByID(this.updateProdID).subscribe(res => {
        this.myObject = res;
        console.log('WriteOFF: ', this.myObject);
        this.urlString = this.myObject.WriteOffProdImage;
        console.log('url', this.urlString);
      });

    });

  }


  ClosePopUp() {

    this.dialogRef.close();
  }

  ngOnInit() {
  }

}

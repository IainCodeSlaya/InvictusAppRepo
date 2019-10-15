import { Component, OnInit, ViewChild } from '@angular/core';


// Sort
import { MatSort } from '@angular/material/sort';
// PopUp
import { MatDialog } from '@angular/material/dialog';
import { WriteoffphotoComponent } from '../writeoffphoto/writeoffphoto.component';

//DataSource
import { MatTableDataSource } from '@angular/material';

import { ProductService } from '../shared/product.service';
import { AddWriteOffStockComponent } from '../add-write-off-stock/add-write-off-stock.component';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-all-write-off-stock',
  templateUrl: './all-write-off-stock.component.html',
  styleUrls: ['./all-write-off-stock.component.scss']
})
export class AllWriteOffStockComponent implements OnInit {

  myDate = Date.now()
  public data: Array<any>;
  //Sort
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private mySerivce: ProductService,
    //Pop-Up Dialog
    public dialog: MatDialog) { }

      //Open Add Product Pop-Up
  openAddWriteOffPopUp(): void {
    const dialogRef = this.dialog.open(AddWriteOffStockComponent, {
    });

    //Close Pop-up
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }


  openwriteoffImage(id: number): void {
    const dialogRef = this.dialog.open(WriteoffphotoComponent, {});
    this.mySerivce.myMethod(id);
    //Close Dialog
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  dataSource;
  res: Object;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {

    this.mySerivce.WriteOff().subscribe((res: Type[]) => {
      this.res = res;
      console.log('RES', res);

      this.dataSource = new MatTableDataSource(res);
      console.log(this.dataSource)

      //Sort
      this.dataSource.sort = this.sort;
    });

  }

  displayedColumns: string[] = ['ProductName', 'WriteOffStockUnits', 'WriteOffDate', 'WriteOffStockReason', 'actions'];
}


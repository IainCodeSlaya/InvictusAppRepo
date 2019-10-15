import { Component, OnInit, ViewChild } from '@angular/core';
import { AddWriteOffStockComponent } from 'src/app/stock/add-write-off-stock/add-write-off-stock.component';
import { ProductService } from 'src/app/stock/shared/product.service';
import { MatSort, MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { WriteoffphotoComponent } from 'src/app/stock/writeoffphoto/writeoffphoto.component';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-all-write-off-stock',
  templateUrl: './all-write-off-stock.page.html',
  styleUrls: ['./all-write-off-stock.page.scss'],
})
export class AllWriteOffStockPage implements OnInit {


  constructor(private mySerivce: ProductService,
              public dialog: MatDialog) { }

  myDate = Date.now();
  public data: Array<any>;
  Type = [];
  // Sort
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource;
  res: Object;

  displayedColumns: string[] = ['ProductName', 'WriteOffStockUnits', 'WriteOffDate', 'WriteOffStockReason', 'actions'];

      // Open Add Product Pop-Up
  openAddWriteOffPopUp(): void {
    const dialogRef = this.dialog.open(AddWriteOffStockComponent, {
    });

    // Close Pop-up
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }


  openwriteoffImage(id: number): void {
    const dialogRef = this.dialog.open(WriteoffphotoComponent, {});
    this.mySerivce.myMethod(id);
    // Close Dialog
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {

    this.mySerivce.WriteOff().subscribe((res: Type[]) => {
      this.res = res;
      console.log('RES', res);

      this.dataSource = new MatTableDataSource(res);
      console.log(this.dataSource);

      // Sort
      this.dataSource.sort = this.sort;
    });

  }
}

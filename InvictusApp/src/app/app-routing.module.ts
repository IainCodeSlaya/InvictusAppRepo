import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//import { allWriteOffStock } from ;
//import { AllWriteOffStockComponent } from './all-write-off-stock/all-write-off-stock.component';
//import { AddWriteOffStockComponent } from './add-write-off-stock/add-write-off-stock.component';

// import { AllWriteOffStockComponent } from './stock/all-write-off-stock/all-write-off-stock.component';
// import { AddWriteOffStockComponent } from './stock/add-write-off-stock/add-write-off-stock.component';
// import { WriteoffphotoComponent } from './stock/writeoffphoto/writeoffphoto.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'allWriteOffStock', component: AllWriteOffStockComponent},
  // { path: 'addWriteOffStock', component: AddWriteOffStockComponent},
  // // { path: 'addWriteOffStock', component: AddWriteOffStockComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  // { path: 'writeoffphoto', component: WriteoffphotoComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })


  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

//Components









// const routes: Routes = [

//   { path: 'allWriteOffStock', component: AllWriteOffStockComponent},
//   { path: 'addWriteOffStock', component: AddWriteOffStockComponent},
//   // { path: 'addWriteOffStock', component: AddWriteOffStockComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
//   { path: 'writeoffphoto', component: WriteoffphotoComponent},


  
//   // otherwise redirect to home
//   { path: '**', redirectTo: '' },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes, { useHash: true })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



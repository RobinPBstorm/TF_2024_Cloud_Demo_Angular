import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { DemoInputOutputComponent } from './components/demo-input-output/demo-input-output.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';

const routes: Routes = [
  { path: '', redirectTo: 'demo2', pathMatch: 'full'},
  { path: 'demo1', component: Demo1Component},
  { path: 'demo2', component: Demo2Component},
  { path: 'demo-directive', component: DemoDirectiveComponent},
  { path: 'demo-input-output', component: DemoInputOutputComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }

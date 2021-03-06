import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { AgregarPageModule } from '../pages/agregar/agregar.module';



@NgModule({
  declarations: [
    ListasComponent
  ],
  exports:[
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ]
})
export class ComponentsModule { }

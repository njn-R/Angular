import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatNativeDateModule } from '@angular/material/core';

const CustomMaterialUIComponent = [
  MatButtonModule, MatIconModule, MatDividerModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule

]

@NgModule({
  
  declarations: [],
  imports: [CustomMaterialUIComponent],
  exports: [CustomMaterialUIComponent]
})
export class MaterialUIModule { }

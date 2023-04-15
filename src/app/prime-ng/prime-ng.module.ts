import { NgModule } from '@angular/core';

/* PrimeNg */
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    SplitButtonModule,
    TableModule
  ]
})
export class PrimeNgModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BlockRoutingModule } from './block-routing.module';

import { BlocksComponent } from './blocks/blocks.component';
import { BlockComponent } from './block/block.component';
import { InformationComponent } from './block/information/information.component';
import { DataComponent } from './block/data/data.component';
import { TransactionsComponent } from './block/transactions/transactions.component';

@NgModule({
  imports: [
    SharedModule,
    BlockRoutingModule
  ],
  declarations: [
    BlocksComponent,
    BlockComponent,
    InformationComponent,
    DataComponent,
    TransactionsComponent
  ]
})
export class BlockModule { }

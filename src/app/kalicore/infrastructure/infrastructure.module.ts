import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  providers: [MessageService],
  declarations: [],
  imports: [CommonModule, ToastModule],
  exports: [],
})
export class InfrastructureModule {}

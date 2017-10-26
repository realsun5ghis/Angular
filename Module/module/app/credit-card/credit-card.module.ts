import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card.component';
import { CreditCardService } from './credit-card.service';
import { CreditCardMaskPipe } from './credit-card-mask.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CreditCardComponent,
    CreditCardMaskPipe
  ],
  providers: [CreditCardService],
  exports: [CreditCardComponent]
})
export class CreditCardModule { }

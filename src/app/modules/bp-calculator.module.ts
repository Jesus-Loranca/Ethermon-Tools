import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing.module';
import { BpCalculatorComponent } from '../components/bp-calculator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [BpCalculatorComponent],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [BpCalculatorComponent],
})

export class BpCalculatorModule {}

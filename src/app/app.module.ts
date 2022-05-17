import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BpCalculatorComponent } from './bp-calculator/bp-calculator.component';
import { EncyclopediaComponent } from './encyclopedia/encyclopedia.component';

@NgModule({
	declarations: [AppComponent, BpCalculatorComponent, EncyclopediaComponent],
	imports: [BrowserModule, FormsModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

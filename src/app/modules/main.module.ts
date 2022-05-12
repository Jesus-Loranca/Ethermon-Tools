import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing.module';
import { AppComponent } from '../components/main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

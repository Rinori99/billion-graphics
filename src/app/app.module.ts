import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './charts/bars/bar-chart.component';
import { ForbesService } from './services/forbes.service';
import { MoneyPipe } from './pipes/money.pipe';
import { MonthPipe } from './pipes/month.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    MoneyPipe,
    MonthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    ForbesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

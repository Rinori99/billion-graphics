import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private readonly MAX_CHART_WIDTH: number = 1200;
  private readonly DEFAULT_CHART_WIDTH: number = 800;
  private readonly MAX_CHART_HEIGHT: number = 1200;
  private readonly DEFAULT_CHART_HEIGHT: number = 500;

  public currentYear: number = new Date().getFullYear();
  public currentMonth: number = new Date().getMonth();
  public chartWidth: number = this.DEFAULT_CHART_WIDTH;
  public chartHeight: number = this.DEFAULT_CHART_HEIGHT;

  ngOnInit(): void {
    this.calculateChartWidth();
  }

  @HostListener("window:resize", ["$event"])
  public onResize(): void {
    this.calculateChartWidth();
  }

  private calculateChartWidth(): void {
    this.chartWidth = Math.min(window.innerWidth * 0.9, this.MAX_CHART_WIDTH);
    this.chartHeight = Math.min(window.innerHeight * 0.6, this.MAX_CHART_HEIGHT);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "money"
})
export class MoneyPipe implements PipeTransform {

    private readonly ONE_TRILLION: number = 1000000000000;
    private readonly ONE_BILLION: number = 1000000000;
    private readonly ONE_MILLION: number = 1000000;
    private readonly ONE_THOUSAND: number = 1000;
    
    transform(value: number, ...args: any[]): string {
        let displayNumber: number;
        if (value >= this.ONE_TRILLION) {
            displayNumber = this.round(value / this.ONE_TRILLION);
            return `$${displayNumber}T`;
        } else if (value >= this.ONE_BILLION) {
            displayNumber = this.round(value / this.ONE_BILLION);
            return `$${displayNumber}B`;
        } else if (value >= this.ONE_MILLION) {
            displayNumber = this.round(value / this.ONE_MILLION);
            return `$${displayNumber}M`;
        } else if (value >= this.ONE_THOUSAND) {
            displayNumber = this.round(value / this.ONE_THOUSAND);
            return `$${displayNumber}K`;
        } else {
            displayNumber = value;
            return `$${displayNumber}`;
        }
    }

    private round(num: number): number {
        return Math.round(num * 10) / 10;
    }
}

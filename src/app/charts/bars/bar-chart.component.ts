import { Component, Input, OnInit } from "@angular/core";
import { ForbesService } from "../../services/forbes.service";
import Person from "../../models/person.model";

@Component({
    selector: 'bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit {

    private readonly DEFAULT_CHART_WIDTH: number = 800;
    private readonly DEFAULT_CHART_HEIGHT: number = 500;

    @Input()
    public height: number = this.DEFAULT_CHART_HEIGHT;

    @Input()
    public width: number = this.DEFAULT_CHART_WIDTH;

    public richestPeopleLoaded: boolean = false;
    public richestPeople: BarPerson[] = [];
    public maxNetWorth: number = 0;

    constructor(private readonly forbesService: ForbesService) {
    }

    ngOnInit(): void {
        this.richestPeopleLoaded = false;
        this.forbesService.findTopRichest().subscribe((richestPeople) => {
            richestPeople.sort((person1, person2) => {
                return person2.netWorth - person1.netWorth;
            });
            this.maxNetWorth = richestPeople[0].netWorth;
            this.richestPeople = richestPeople.map((person) => {
                return {
                    ...person,
                    relativeNetWorthScore: (person.netWorth / this.maxNetWorth) * 100
                } as BarPerson;
            });
            this.richestPeopleLoaded = true;
        });
    }

    openWikipediaPage(person: BarPerson): void {
        const url: string = `https://www.forbes.com/profile/${person.firstName.toLocaleLowerCase()}-${person.lastName.toLowerCase()}`;
        window.open(url, "_blank");
    }
}

interface BarPerson extends Person {
    relativeNetWorthScore: number;
}
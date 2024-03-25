import { Injectable } from "@angular/core";
import Person from "../models/person.model";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ForbesService {

    private richPeople: Person[] = [
        { firstName: "Bernard", lastName: "Arnault", netWorth: 225700000000, sourceOfWealth: "LVMH" },
        { firstName: "Jeff", lastName: "Bezos", netWorth: 196900000000, sourceOfWealth: "Amazon" },
        { firstName: "Elon", lastName: "Musk", netWorth: 192600000000, sourceOfWealth: "Tesla, SpaceX" },
        { firstName: "Mark", lastName: "Zuckerberg", netWorth: 178600000000, sourceOfWealth: "Meta" },
        { firstName: "Larry", lastName: "Ellison", netWorth: 157300000000, sourceOfWealth: "Oracle" },
        { firstName: "Warren", lastName: "Buffett", netWorth: 136100000000, sourceOfWealth: "Berkshire Hathaway" },
        { firstName: "Bill", lastName: "Gates", netWorth: 131700000000, sourceOfWealth: "Microsoft" },
        { firstName: "Steve", lastName: "Ballmer", netWorth: 126400000000, sourceOfWealth: "Microsoft" },
        { firstName: "Larry", lastName: "Page", netWorth: 125700000000, sourceOfWealth: "Google" },
        { firstName: "Sergey", lastName: "Brin", netWorth: 120900000000, sourceOfWealth: "Google" },
    ]

    public findTopRichest(size?: number): Observable<Person[]> {
        return of(this.richPeople);
    }
}
import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/Observable";


@Injectable()
export class ContentsService {

    teamRef: AngularFireList<any>;// = "";
    private _team: Observable<any>;

    constructor(private db: AngularFireDatabase) {
        this.teamRef = db.list("static_contents/team");
        this._team = this.teamRef.valueChanges();
    }

    get team(): Observable<any> {
        return this._team;
    }
}

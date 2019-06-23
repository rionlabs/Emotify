import {Component, OnInit} from '@angular/core';
import {EmoticonsService} from "../../service/emoticons.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Tag} from "../../models/Tag";


@Component({
    selector: 'app-nav-bar',
    template: `
        <mat-toolbar color="primary">
            <mat-toolbar-row>
                <div class="container" id="logo-container">
                    <div class="row">
                        <div class="center col s12">
                            <span id="emotify-logo">emotify</span>
                        </div>
                    </div>
                </div>
            </mat-toolbar-row>
            <mat-toolbar-row>
                <div class="container">
                    <div class="row">
                        <div class="col l8 offset-l2 m10 offset-m1 s12">
                            <input matInput id="search-input" #searchBox class="z-depth-4" type="search"
                                   placeholder="Search"
                                   [matAutocomplete]="auto" (keyup)="setQuery(searchBox.value)"
                                   (keyup.enter)="onEnter(searchBox.value)">
                            <mat-autocomplete #auto="matAutocomplete">
                                <mat-option *ngFor="let tag of filteredTags | async"
                                            [value]="tag.key">{{tag.key}}</mat-option>
                            </mat-autocomplete>
                        </div>
                    </div>
                </div>
            </mat-toolbar-row>

        </mat-toolbar>
    `,
    styles: [`
        #logo-container {
            padding-top: 12px;
        }

        #emotify-logo {
            font-family: 'Josefin Sans', sans-serif;
            font-size: 2.5rem;
        }

        .row {
            margin-bottom: 0;
        }

        #search-input {
            background-color: #FFF;
            border-width: 0;
            height: 3rem;
            border-radius: 1.5rem;
            padding-right: 1.5rem;
            padding-left: 1.5rem;
            max-width: -webkit-fill-available;
            -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        #search-input:focus {
            -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
            box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
        }

        #search-input:hover {
            -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
        }
    `]
})
export class NavBarComponent implements OnInit {

    private _allTags: Observable<Array<Tag>>;
    private previousQuery: string = "";
    private currentQuery: string = "";

    filteredTags: Observable<Array<Tag>>;

    constructor(private emoticonsService: EmoticonsService) {
    }

    ngOnInit() {
        this._allTags = this.emoticonsService.getTags();
        this.filteredTags = this._allTags
    }

    setQuery(query) {
        this.currentQuery = query.toLowerCase();
        if (this.previousQuery == this.currentQuery) {
            return
        }
        this.previousQuery = this.currentQuery;
        this.filteredTags = this._allTags.pipe(
            map(tags => {
                return tags.filter((tag) => {
                    return tag.key.includes(this.currentQuery)
                })
            })
        );
    }

    onEnter(tag) {
        this.emoticonsService.setActiveTag(tag);
    }
}

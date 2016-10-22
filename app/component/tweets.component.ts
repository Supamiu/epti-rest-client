import {Component, Input, OnInit} from "@angular/core";
import {ApiService} from "../service/api.service";
import {AuthService} from "../service/auth.service";
@Component({
    moduleId: module.id,
    selector: 'tweets',
    templateUrl: 'tweets.component.html'
})
export class TweetsComponent implements OnInit {
    @Input() friendId: number;

    tweets: any[];

    constructor(private api: ApiService, private auth: AuthService) {
    }

    ngOnInit(): void {
        this.api.get<any>('/users/' + this.auth.getUserId() + "/friends/" + this.friendId + "/tweets").subscribe(tweets => {
            this.tweets = tweets;
        })
    }
}
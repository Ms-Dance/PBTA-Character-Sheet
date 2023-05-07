import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() {

    }
    public GameSelected(selected: any): void {
        if (selected && selected.target && selected.target.value) {
            switch (selected.target.value) {
                case "motw":
                    break;
                case "masks":
                    break;
            }
        }
    }
}

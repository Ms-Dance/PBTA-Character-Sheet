import { AfterViewInit, Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, DoCheck {

    public Bars = faChevronRight;
    public ShowGameSelectMenu: boolean = false;
    public ShowGameSelectMenuOld: boolean = false;
    public HasInit: boolean = false;

    constructor(private _router: Router) {
        let motw: string = localStorage.getItem("ShowGameSelectMenu") ?? "";
        if (motw) {
            this.ShowGameSelectMenu = JSON.parse(motw);
            this.Bars = this.ShowGameSelectMenu ? faChevronRight : faChevronLeft;
        }
    }
    public GameSelected(selected: any): void {
        if (selected && selected.target && selected.target.value) {
            switch (selected.target.value) {
                case "motw":
                    this._router.navigate(['/motw']);
                    break;
                case "masks":
                    this._router.navigate(['/mask']);
                    break;
            }
        }
    }

    public ngDoCheck() {
        /* Automaticly save the current state of the sheet in local storage. */
        if (this.HasInit && this.ShowGameSelectMenuOld != this.ShowGameSelectMenu) {
            this.ShowGameSelectMenuOld = this.ShowGameSelectMenu;
            localStorage.setItem("ShowGameSelectMenu", JSON.stringify(this.ShowGameSelectMenu));
        }
    }

    public ngAfterViewInit(): void {
        this.HasInit = true;
    }
    public HeadingChange(): void {
        this.ShowGameSelectMenu = !this.ShowGameSelectMenu
        this.Bars = this.ShowGameSelectMenu ? faChevronRight : faChevronLeft;
    }
}

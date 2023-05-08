import { AfterViewInit, Component, DoCheck, ElementRef, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { MotwCharacter } from './motw.model';

@Component({
    selector: 'app-motw',
    templateUrl: './motw.component.html',
    styleUrls: ['./motw.component.css']
})
export class MotwComponent implements AfterViewInit, DoCheck {

    @ViewChild('notes') Notes: any;

    public HasInit: boolean = false;
    public NotesHeight: number = 300;
    public Character: MotwCharacter = new MotwCharacter();
    public OldCharacter: MotwCharacter = new MotwCharacter();

    constructor() {
        let motw: string = localStorage.getItem("motw") ?? "";
        if (motw) {
            this.Character = JSON.parse(motw);
        }
    }

    public ngDoCheck() {
        /* Automaticly save the current state of the sheet in local storage. */
        if (this.HasInit && JSON.stringify(this.Character) != JSON.stringify(this.OldCharacter)) {
            this.OldCharacter = Object.assign({}, this.Character);
            localStorage.setItem("motw", JSON.stringify(this.Character));
        }
    }

    public ngAfterViewInit(): void {
        this.HasInit = true;
    }
    public ResizeTextarea(): void {
        console.log(this.Notes);
        this.NotesHeight = 0;
        this.NotesHeight = this.Notes.scrollHeight;
    }
}

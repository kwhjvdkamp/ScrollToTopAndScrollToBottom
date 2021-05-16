import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
    selector: 'app-scroll-to-bottom',
    templateUrl: './scroll-to-bottom.component.html',
    styleUrls: ['./scroll-to-bottom.component.css']
})
export class ScrollBottomComponent implements OnInit {

    public windowScrolled: boolean;

    private factor: number = 10 ^ 2;

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) {
        // ? Want to know something about the current document
        console.log(`constructor ${this.document.URL}`);
    }

    /**
     * @param $event object passed from Html */
    @HostListener('window:scroll', ['$event']) onWindowScroll($event: any) {
        console.log(`Scrolling! @HostListener(...) ${$event}`);
        if (window.pageYOffset >= 20) {
            // ? sets the visibility of the 'scroll button' to show the button to smoothly 'fly' to bottom
            this.windowScrolled = true;
            console.log(`[X] Host listening | window.pageYOffset: ${(Math.round(window.pageYOffset * this.factor) / this.factor)}`);
        }
        else if (window.pageYOffset < 20) {
            // ? sets the visibility of the 'scroll button' to hide because the window.pageYOffset has flown within reach
            this.windowScrolled = false;
            console.log(`[Y] Host listening | window.pageYOffset: ${(Math.round(window.pageYOffset * this.factor) / this.factor)}`);
        }
    }

    ngOnInit(): void {
        // ? Want to know something about the current document
        console.log(`ngOnInit() ${this.document.baseURI}`);
    }

    /**
     * Called from Html
     * Looks for element with the Id 'lowest diversion' and
     * passed on properties onto that element via method 'scrollIntoView'
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView */
    public scrollToBottom() {
        console.log(`scrollToBottom() | window.pageYOffset (this.windowScrolled): ${(Math.round(window.pageYOffset * 10 ^ 2) / 10 ^ 2)}-(${this.windowScrolled})---![CLICKED-DOWN]!`);
        let element = document.getElementById("lowest-diversion");
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

}
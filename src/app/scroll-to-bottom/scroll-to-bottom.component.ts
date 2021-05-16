import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

@Component({
    selector: 'app-scroll-to-bottom',
    templateUrl: './scroll-to-bottom.component.html',
    styleUrls: ['./scroll-to-bottom.component.css']
})
export class ScrollBottomComponent implements OnInit {

    public windowScrolledToBottom: boolean;

    faAngleDoubleDown = faAngleDoubleDown;

    constructor(
        registry: MatIconRegistry,
        sanitizer: DomSanitizer
    ) {
        // ? Want to know something about the current document
        // console.log(`constructor ${this.document.URL}`);

        // ?
        const svg = icon(faAngleDoubleDown).html.join('');
        registry.addSvgIconLiteral(
            'angle-double-down',
            sanitizer.bypassSecurityTrustHtml(svg)
        );
    }

    /**
     * @param $event object passed from Html */
    @HostListener('window:scroll', ['$event']) onWindowScroll($event: any) {
        // console.log(`Scrolling! @HostListener(...) ${$event}`);

        // ? sets the visibility of the 'scroll button' to show the button to smoothly 'fly' to bottom
        this.windowScrolledToBottom = true;

        const documentElementByIdOffSetHeight: number = document.getElementById('main').offsetHeight;
        const windowInnerHeight: number = window.innerHeight;
        const windowPageYOffset: number = Math.ceil(window.pageYOffset);
        // console.log(`document.body.offsetHeight: ${documentElementByIdOffSetHeight}`);
        // console.log(`window.innerHeight: ${windowInnerHeight}`);
        // console.log(`Math.ceil(window.pageYOffset): ${windowPageYOffset}`);
        // console.log(`window.innerHeight + Math.ceil(window.pageYOffset): ${windowInnerHeight + windowPageYOffset}`);

        if (documentElementByIdOffSetHeight <= (windowInnerHeight + windowPageYOffset)) {
            // console.log(`Arrived the bottom!\r\n`
            //     + `document.body.offsetHeight: ${documentElementByIdOffSetHeight}\r\n`
            //     + `(window.innerHeight: ${windowInnerHeight} + Math.ceil(window.pageYOffset): ${windowPageYOffset}) = ${windowInnerHeight + windowPageYOffset}`);
            this.windowScrolledToBottom = false;
        }
    }

    ngOnInit(): void {
        this.windowScrolledToBottom = true;

        // ? Want to know something about the current document?
        // console.log(`ngOnInit() ${this.document.baseURI}`);
    }

    /**
     * Called from Html
     * Looks for element with the Id 'lowest diversion' and
     * passed on properties onto that element via method 'scrollIntoView'
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView */
    public scrollToBottom() {
        // console.log(`scrollToBottom() | window.pageYOffset (this.windowScrolledToBottom): ${(Math.ceil(window.pageYOffset))}-(${this.windowScrolledToBottom})---![CLICKED-DOWN]!`);
        let element = document.getElementById("lowest-diversion");
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

}

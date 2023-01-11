import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

@Component({
    selector: 'app-scroll-to-top',
    templateUrl: './scroll-to-top.component.html',
    styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollTopComponent implements OnInit {

    public windowScrolledToTop: boolean;

    faAngleDoubleUp = faAngleDoubleUp;

    constructor(
        registry: MatIconRegistry,
        sanitizer: DomSanitizer
    ) {
        // ?
        const svg = icon(faAngleDoubleUp).html.join('');
        registry.addSvgIconLiteral(
            'angle-double-up',
            sanitizer.bypassSecurityTrustHtml(svg)
        );
    }

    // /**
    //  * @param $event object passed from Html */
    // @HostListener('window:scroll', ['$event']) onWindowScroll($event: any) {
    //     // console.log(`Scrolling! @HostListener(...) ${$event}`);

    //     // ? sets the visibility of the 'scroll button' to show the button to smoothly 'fly' to bottom
    //     this.windowScrolledToTop = true;

    //     // https://stackoverflow.com/questions/43218680/document-getelementbyidid-may-be-null : use of '!'
    //     const documentElementByIdOffSetHeight: number = document.getElementById('main')!.offsetHeight;
    //     const windowInnerHeight: number = window.innerHeight;
    //     const windowPageYOffset: number = Math.ceil(window.pageYOffset);
    //     const divider: string = '-----';
    //     // console.log(`document.body.offsetHeight: ${documentElementByIdOffSetHeight}`);
    //     // console.log(`window.innerHeight: ${windowInnerHeight}`);
    //     // console.log(`Math.ceil(window.pageYOffset): ${windowPageYOffset}`);
    //     // console.log(`window.innerHeight + Math.ceil(window.pageYOffset): ${windowInnerHeight + windowPageYOffset}`);
    //     // console.log(`${divider}`);

    //     if (windowPageYOffset < 1) {
    //         console.log(`Arrived at the TOP !\r\n`
    //             + `${divider}\r\n`
    //             + `document.body.offsetHeight: ${documentElementByIdOffSetHeight}\r\n`
    //             + `(window.innerHeight: ${windowInnerHeight} + Math.ceil(window.pageYOffset): ${windowPageYOffset}) = ${windowInnerHeight + windowPageYOffset}`);
    //         this.windowScrolledToTop = false;
    //     }

    // }

    ngOnInit(): void {
        this.windowScrolledToTop = true;
    }

    /**
     * Called from Html
     * Looks for element with the Id 'highest-diversion'
     * Passed properties onto that element via method 'scrollIntoView'
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView */
    public scrollToTop(): void {
        // console.log(`scrollToBottom() | window.pageYOffset (this.windowScrolledToTop): ${(Math.ceil(window.pageYOffset))}`
        // + `(${this.windowScrolledToTop})---![CLICKED-DOWN]!`);
        const element = document.getElementById('highest-diversion')!;
        element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }

}

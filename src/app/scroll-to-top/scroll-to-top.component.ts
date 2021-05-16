// import { Component, OnInit, Inject, HostListener } from '@angular/core';
// // import { DOCUMENT } from "@angular/common";
// import { MatIconRegistry } from '@angular/material/icon';
// import { DomSanitizer } from '@angular/platform-browser';

// import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
// // import { faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons';
// import { icon } from '@fortawesome/fontawesome-svg-core';

// @Component({
//     selector: 'app-scroll-to-top',
//     templateUrl: './scroll-to-top.component.html',
//     styleUrls: ['./scroll-to-top.component.css']
// })
// export class ScrollTopComponent implements OnInit {

//     public windowScrolled: boolean;

//     // faFontAwesomeFlag = faFontAwesomeFlag;
//     faAngleDoubleUp = faAngleDoubleUp;

//     constructor(
//         // @Inject(DOCUMENT) private document: Document) { }

//         registry: MatIconRegistry,
//         sanitizer: DomSanitizer
//     ) {
//         // ? Want to know something about the current document
//         // console.log(`constructor ${this.document.URL}`);

//         // ?
//         const svg = icon(faAngleDoubleUp).html.join('');
//         registry.addSvgIconLiteral(
//             'angle-double-up',
//             sanitizer.bypassSecurityTrustHtml(svg)
//         );
//     }

//     /**
//  * @param $event object passed from Html */
//     @HostListener('window:scroll', ['$event']) onWindowScroll($event: any) {
//         // console.log(`Scrolling! @HostListener(...) ${$event}`);

//         // ? sets the visibility of the 'scroll button' to show the button to smoothly 'fly' to bottom
//         this.windowScrolled = true;

//         const documentElementByIdOffSetHeight: number = document.getElementById('main').offsetHeight;
//         const windowInnerHeight: number = window.innerHeight;
//         const windowPageYOffset: number = Math.ceil(window.pageYOffset);
//         // console.log(`document.body.offsetHeight: ${documentElementByIdOffSetHeight}`);
//         // console.log(`window.innerHeight: ${windowInnerHeight}`);
//         // console.log(`Math.ceil(window.pageYOffset): ${windowPageYOffset}`);
//         // console.log(`window.innerHeight + Math.ceil(window.pageYOffset): ${windowInnerHeight + windowPageYOffset}`);

//         if (documentElementByIdOffSetHeight <= (windowInnerHeight + windowPageYOffset)) {
//             // console.log(`Arrived the bottom!\r\n`
//             //     + `document.body.offsetHeight: ${documentElementByIdOffSetHeight}\r\n`
//             //     + `(window.innerHeight: ${windowInnerHeight} + Math.ceil(window.pageYOffset): ${windowPageYOffset}) = ${windowInnerHeight + windowPageYOffset}`);
//             this.windowScrolled = false;
//         }
//     }

//     ngOnInit(): void {
//         this.windowScrolled = true;

//         // ? Want to know something about the current document?
//         // console.log(`ngOnInit() ${this.document.baseURI}`);
//     }

//     /**
//      * Called from Html
//      * Looks for element with the Id 'highest diversion' and
//      * passed on properties onto that element via method 'scrollIntoView'
//      * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView */
//     public scrollToTop() {
//         // console.log(`scrollToBottom() | window.pageYOffset (this.windowScrolled): ${(Math.ceil(window.pageYOffset))}-(${this.windowScrolled})---![CLICKED-DOWN]!`);
//         let element = document.getElementById("highest-diversion");
//         element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
//     }

// }

import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-scroll-bottom',
  templateUrl: './scroll-bottom.component.html',
  styleUrls: ['./scroll-bottom.component.css']
})
export class ScrollBottomComponent {

  windowScrolled: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  @HostListener("window:scroll", [])

  onWindowScroll() {

    if ( window.pageYOffset ) {
        this.windowScrolled = true;
        // console.log(`scroll-bottom.component-|-window.pageYOffset (this.windowScrolled): ${(Math.round(window.pageYOffset*10^2)/10^2)} (${this.windowScrolled})`);
    } 
    else if ( this.windowScrolled && window.pageYOffset 
      || window.pageYOffset < 10 ) {
        this.windowScrolled = false;
        // console.log(`scroll-bottom.component-|-window.pageYOffset (this.windowScrolled): ${(Math.round(window.pageYOffset*10^2)/10^2)} (${this.windowScrolled})`);
    }
  } 
  
  scrollToBottom() {                                   
    // console.log(`scroll-bottom.component-|-window.pageYOffset (this.windowScrolled): ${(Math.round(window.pageYOffset*10^2)/10^2)}-(${this.windowScrolled})---![CLICKED-DOWN]!`);
    let element = document.getElementById("lowest-diversion");
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    // element.scrollIntoView();
    // element.scrollIntoView(false);
    // element.scrollIntoView({block: "end"});
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

}
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {

  windowScrolled: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document) { }

  @HostListener("window:scroll", [])

  onWindowScroll() {

    if ( window.pageYOffset 
      || document.documentElement.scrollTop 
      || document.body.scrollTop > 100 ) {       
        this.windowScrolled = true;
        // console.log(`scroll-top.component----|-window.pageYOffset (this.windowScrolled): ${(Math.round(window.pageYOffset*10^2)/10^2)} (${this.windowScrolled})`);
    } 
    else if ( this.windowScrolled && window.pageYOffset 
      || document.documentElement.scrollTop 
      || document.body.scrollTop < 10 ) {        
        this.windowScrolled = false;
        // console.log(`scroll-top.component----|-window.pageYOffset (this.windowScrolled): ${(Math.round(window.pageYOffset*10^2)/10^2)} (${this.windowScrolled})`);
    }
  } 
  
  scrollToTop() {

    (function smoothscroll() {
      var currentScroll = 
      document.documentElement.scrollTop 
        || document.body.scrollTop; 

      // console.log(`scroll-top.component----|-window.pageYOffset (this.windowScrolled): ${(Math.round(window.pageYOffset*10^2)/10^2)}-xxxxxxx---![CLICKED-UP]!`);

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, 
          currentScroll - 
          (currentScroll / 8)
        );
      }
    })();
  }

  ngOnInit() {
  }

}
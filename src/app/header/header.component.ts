import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
    var window_height = $(window).height();
    var sidebar_height = $(".sidebar").css("min-height", $(window).height() - 100 + "px");
    //Set the min-height of the content and sidebar based on the
    //the height of the document.
    if ($("body").hasClass("fixed")) {
      $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
      // $(".content").css('min-height', window_height - $('.main-footer').outerHeight());
    } else {
      var postSetWidth;
      if (window_height >= sidebar_height) {
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);
        postSetWidth = window_height - neg;
      } else {
        $(".content-wrapper, .right-side").css('min-height', sidebar_height);
        postSetWidth = sidebar_height;
      }



    }
  }

}

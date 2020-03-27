import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stay-home",
  templateUrl: "./stay-home.component.html",
  styleUrls: ["./stay-home.component.scss"]
})
export class StayHomeComponent implements OnInit {
  public lottieConfig: Object;

  constructor() {
    this.lottieConfig = {
      path: "assets/lottie/17801-stay-at-home.json",
      renderer: "canvas",
      autoplay: true,
      loop: true
    };
  }

  ngOnInit() {}
}

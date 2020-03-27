import { ApiService } from "./../../services/api.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private apiService: ApiService) {
    this.getSmartphones();
  }
  allCases: any;

  getSmartphones() {
    this.apiService.getAllCases().subscribe(
      data => {
        console.info("home.page:getSmartphones => Successfully fetch data");
        this.allCases = data;
      },
      err => {
        console.error(err);
        console.error(
          "home.page:getSmartphones <= something went wrong while fetching data"
        );
      }
    );
  }
}

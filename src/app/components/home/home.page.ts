import { ApiService } from "./../../services/api.service";
import { Component } from "@angular/core";
import { ToastController } from "@ionic/angular";
import * as _ from "lodash";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(
    private apiService: ApiService,
    public toastController: ToastController
  ) {
    this.getAllCases();
    this.getCasesForAllCountries();
    this.getAllNewsFeed();
  }
  allCases: any;
  resultType = "allCases";
  countryRecord: any;
  allCountriesCases: any;
  allCountries = [];
  newsFeeds: any;

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: "top",
      mode: "md"
    });
    toast.present();
  }

  isAllCases(resultType) {
    return resultType === "allCases";
  }

  isByCountry(resultType) {
    return resultType === "byCountry";
  }

  isMap(resultType) {
    return resultType === "map";
  }

  segmentChanged(event) {
    this.resultType = event.target.value;
    this.countryRecord = null;
  }

  handleSelectCountry(event) {
    this.getCasesByCountryName(event.target.value);
  }

  getAllCases() {
    this.apiService.getAllCases().subscribe(
      data => {
        console.info("home.page:getSmartphones => Successfully fetch data");
        this.allCases = data;
        this.presentToast("success", "Successfully fetch data");
      },
      err => {
        console.error(err);
        console.error(
          "home.page:getSmartphones <= something went wrong while fetching data"
        );
        this.presentToast("danger", "Failed to fetch data");
      }
    );
  }

  getCasesForAllCountries() {
    this.apiService.getCasesForAllCountries().subscribe(
      data => {
        console.info(
          "home.page:getCasesForAllCountries => Successfully fetch data all countries"
        );
        this.allCountriesCases = data;
        _.sortBy(this.allCountriesCases, ["country"]).map(item =>
          // this.allCountriesCases.map(item =>
          this.allCountries.push(item.country)
        );
        this.presentToast(
          "success",
          "Successfully fetch data for all countries"
        );
      },
      err => {
        console.error(err);
        console.error(
          "home.page:getCasesForAllCountries <= something went wrong while fetching data all countries"
        );
        this.presentToast("danger", "Failed to fetch data all countries");
      }
    );
  }

  getCasesByCountryName(countryName) {
    this.apiService.getCasesByCountry(countryName).subscribe(
      data => {
        console.info(
          "home.page:getCasesByCountryName => Successfully fetch data by country name: " +
            countryName
        );
        this.countryRecord = data;
        this.presentToast(
          "success",
          "Successfully fetch data for country: " + countryName
        );
      },
      err => {
        console.error(err);
        console.error(
          "home.page:getCasesByCountryName <= something went wrong while fetching data for country: " +
            countryName
        );
        this.presentToast(
          "danger",
          "Failed to fetch data for country: " + countryName
        );
      }
    );
  }

  getAllNewsFeed() {
    this.apiService.getAllNewsFeed().subscribe(
      data => {
        console.info(
          "home.page:getCasesByCountryName => Successfully fetch data for news"
        );
        console.log(data, "================");
        this.newsFeeds = data && data["articles"];
        this.presentToast("success", "Successfully fetch data for news");
      },
      err => {
        console.error(err);
        console.error(
          "home.page:getCasesByCountryName <= something went wrong while fetching data for news: "
        );
        this.presentToast("danger", "Failed to fetch data for news");
      }
    );
  }
}

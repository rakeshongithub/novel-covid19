import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  baseUrl = "https://corona.lmao.ninja";
  newsBaseUrl = "https://newsapi.org/v2";
  apiKey = "ebb1c84e0bb541cb9586b52edc0e1e86";

  getAllCases() {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getCasesByCountry(countryName: string) {
    return this.http.get(`${this.baseUrl}/countries/${countryName}`);
  }

  getCasesForAllCountries() {
    return this.http.get(`${this.baseUrl}/countries`);
  }

  getAllNewsFeed() {
    return this.http.get(
      `${this.newsBaseUrl}/top-headlines?q=COVID&from=2020-03-28&sortBy=publishedAt&apiKey=${this.apiKey}&pageSize=10&page=1`
    );
  }
}

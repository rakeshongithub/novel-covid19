import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  baseUrl = "https://corona.lmao.ninja";

  getAllCases() {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getCasesByCountry(countryName: string) {
    return this.http.get(`${this.baseUrl}/countries/${countryName}`);
  }

  getCasesForAllCountries() {
    return this.http.get(`${this.baseUrl}/countries`);
  }
}

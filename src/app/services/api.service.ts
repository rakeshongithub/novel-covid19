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
}

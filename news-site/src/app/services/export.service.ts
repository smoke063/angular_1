import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ThemeInfo} from "../interfaces/theme-info.interface";

@Injectable()
export class ExportService {

  url: string = "https://riamo.ru/api/gosuslugi/export"

  constructor(private http: HttpClient) {
  }

  public getThemeByCode(code: string, limit: number = 20) {

    const params = (new HttpParams())
      .set('theme', code)
      .set('limit', limit);

    return this.http.get<ThemeInfo>(this.url, {
      params
    });
  }
}

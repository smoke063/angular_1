import { HttpClient } from "@angular/common/http";
import {ThemeList} from "../interfaces/theme-list.interface";
import {Injectable} from "@angular/core";

@Injectable()
export class ThemesService {

  url: string = "https://riamo.ru/api/gosuslugi/themes"

  constructor(private http: HttpClient) { }

  public getThemes() {
    return this.http.get<ThemeList>(this.url);
  }
}

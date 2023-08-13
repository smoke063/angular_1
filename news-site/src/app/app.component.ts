import { Component, OnInit } from '@angular/core';
import { ThemesService } from "./services/themes.service";
import { ExportService } from "./services/export.service";
import { MatDialog } from "@angular/material/dialog";
import { CardInfoComponent } from "./components/card-info/card-info.component";
import { ThemeInfo } from "./interfaces/theme-info.interface";
import { Theme } from "./interfaces/theme.interface";
import {catchError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ThemesService,
    ExportService,
  ],
})
export class AppComponent implements OnInit {

  themes: Theme [] = [];
  isSpinnerShow: boolean = false;

  constructor(
    private themesService: ThemesService,
    private exportService: ExportService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.themesService.getThemes().subscribe({
      next: ({theme}) => {
        this.themes = theme;
      },
      error: this.handleError.bind(this)
    });
  }

  public openCard(theme: Theme) {
    this.isSpinnerShow = true;
    this.exportService.getThemeByCode(theme.code)
      .subscribe(
        {
          next: (data) => {
            this.isSpinnerShow = false;
            const themeInfo: ThemeInfo = data;
            this.dialog.open(CardInfoComponent, {
              data: themeInfo,
              closeOnNavigation: true
            });
          },
          error: this.handleError.bind(this)
        })
  }

  private handleError() {
    this.isSpinnerShow = false;
  }
}

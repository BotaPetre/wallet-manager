import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-page-layout',
  imports: [RouterOutlet, Sidebar, Header, Footer],
  templateUrl: './page-layout.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './page-layout.css',
})
export class PageLayout {

}

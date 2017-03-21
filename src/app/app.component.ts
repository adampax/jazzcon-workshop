/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <span>
        <a [routerLink]=" ['./home'] " routerLinkActive="active">
          Home
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./detail'] " routerLinkActive="active">
          Detail
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./users'] " routerLinkActive="active">
          Users
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./wikipedia'] " routerLinkActive="active">
          Wikipedia
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./contact'] " routerLinkActive="active">
          Contact
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./about'] " routerLinkActive="active">
          About
        </a>
      </span>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <span>WebPack Angular 4 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="10%">
        </a>
      </div>
    </footer>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 4 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

import { Component, HostBinding } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  styles: ['h1 { font-weight: normal; }'],
})
export class HeroAppComponent {
  hero = new Hero('Human Torch', [
    'Mister Fantastic',
    'Invisible Woman',
    'Thing',
  ]);

  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { routeAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeAnimations],
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  get routeAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot.data[
      'animation'
    ];
  }
}

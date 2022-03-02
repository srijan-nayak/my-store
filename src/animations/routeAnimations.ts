import {
  group,
  query,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { slideInAnimation, slideOutAnimation } from './slideAnimations';

const positioningStyles = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({ position: 'absolute', top: 0, left: 0, width: '100%' }),
  ]),
];

export const routeAnimations = trigger('routeAnimations', [
  transition('ProductsPage => CartPage', [
    ...positioningStyles,
    group([
      query(
        ':leave',
        useAnimation(slideOutAnimation, { params: { endX: '-100%' } })
      ),
      query(
        ':enter',
        useAnimation(slideInAnimation, { params: { startX: '100%' } })
      ),
    ]),
  ]),
  transition('CartPage => ProductsPage', [
    ...positioningStyles,
    group([
      query(
        ':leave',
        useAnimation(slideOutAnimation, { params: { endX: '100%' } })
      ),
      query(
        ':enter',
        useAnimation(slideInAnimation, { params: { startX: '-100%' } })
      ),
    ]),
  ]),
]);

import {
  animate,
  animation,
  group,
  query,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

const slideInAnimation = animation([
  style({ transform: 'translateX({{ startX }})', opacity: 0 }),
  animate('200ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
]);

const slideOutAnimation = animation([
  animate(
    '200ms ease-out',
    style({ transform: 'translateX({{ toX }})', opacity: 0 })
  ),
]);

const enterLeavePositions = animation([
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({ position: 'absolute', top: 0, left: 0, width: '100%' }),
  ]),
]);

export const routeAnimations = trigger('routeAnimations', [
  transition('ProductsPage => CartPage', [
    useAnimation(enterLeavePositions),
    group([
      query(
        ':leave',
        useAnimation(slideOutAnimation, { params: { toX: '-100%' } })
      ),
      query(
        ':enter',
        useAnimation(slideInAnimation, { params: { startX: '100%' } })
      ),
    ]),
  ]),
  transition('CartPage => ProductsPage', [
    useAnimation(enterLeavePositions),
    group([
      query(
        ':leave',
        useAnimation(slideOutAnimation, { params: { toX: '100%' } })
      ),
      query(
        ':enter',
        useAnimation(slideInAnimation, { params: { startX: '-100%' } })
      ),
    ]),
  ]),
]);

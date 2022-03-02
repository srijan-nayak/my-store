import { animate, animation, style } from '@angular/animations';

export const slideInAnimation = animation([
  style({ transform: 'translateX({{ startX }})', opacity: 0 }),
  animate('200ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
]);

export const slideOutAnimation = animation([
  animate(
    '200ms ease-out',
    style({ transform: 'translateX({{ endX }})', opacity: 0 })
  ),
]);

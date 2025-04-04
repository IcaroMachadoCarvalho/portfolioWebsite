import { trigger, state, style, animate, transition } from '@angular/animations';

export const shownStateTrigger = trigger('ShowState', [
  state(
    'notShown',
    style({
      opacity: 0,
      transform: 'translateY(100px)',
    })
  ),
  state(
    'shown',
    style({
      opacity: 1,
      transform: 'translateY(0px)',
    })
  ),
  transition('notShown => shown', [animate('0.7s ease-in-out')]),
]);

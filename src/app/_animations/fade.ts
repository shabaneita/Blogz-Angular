import { trigger, state, style, transition, animate } from "@angular/animations";

export let fade = function (name: string, duration: number) {
  return trigger(name, [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [
      animate(duration)
    ])
  ])
}

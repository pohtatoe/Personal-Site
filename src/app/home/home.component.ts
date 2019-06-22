import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { animate, state, style, transition, trigger, group } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('entrance', [
      state('entering', style({
        position: 'relative',
        left: '-10vw',
        opacity: 0
      })),
      state('entered', style({
        position: 'relative',
        left: '0vw',
        opacity: 1
      })),
      transition('entering => entered', [
        group([
          animate('4s 200ms ease-in-out', style({
            left: '0vw',
          })),
          animate('5.2s 200ms ease-in-out', style({
            opacity: 1,
          }))
        ])
      ]),
    ])
  ]
})

export class HomeComponent implements OnInit, AfterViewInit {
  // The trigger for the homepage animation.
  state = 'entering';

  constructor(public cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  // I use this lifecycle hook to switch the animation trigger
  // once the DOM has loaded.
  // We call ChangeDetectorRef.detectChanges() to force an additional change detection.
  // Angular uses change detection to ensure stability across the component tree.
  // Changing this.state in between checks yields a fatal error (while in dev mode)
  // unless we force an additional check.
  ngAfterViewInit() {
    this.state = this.state === 'entering' ? 'entered' : 'entering';
    this.cdRef.detectChanges();
  }
}

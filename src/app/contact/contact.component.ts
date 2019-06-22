import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, group, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('entrance', [
      state('entering', style({
        position: 'absolute',
        left: '-10vw',
        opacity: .05,
      })),
      state('entered', style({
        position: 'absolute',
        left: '0%',
        opacity: 1,
      })),
      transition('entering => entered', [
        group([
          animate('.75s 0ms ease-in-out', style({
            left: '0%',
          })),
          animate('2.5s 0ms ease-in-out', style({
            opacity: 1,
          }))
        ])
      ]),
    ])
  ]
})
export class ContactComponent implements OnInit, AfterViewInit {
  // The trigger for the component animation.
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

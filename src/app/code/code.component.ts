import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, group, animate } from '@angular/animations';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
  animations: [
    trigger('entrance', [
      state('entering', style({
        position: 'relative',
        left: '-50%',
        opacity: .1,
      })),
      state('entered', style({
        position: 'relative',
        left: '0%',
        opacity: 1,
      })),
      transition('entering => entered', [
        group([
          animate('.75s 0ms ease-out', style({
            left: '0%',
          })),
          animate('1.7s 0ms ease-in-out', style({
            opacity: 1,
          }))
        ])
      ]),
    ])
  ]
})
export class CodeComponent implements OnInit, AfterViewInit {
  // The trigger for the component animation.
  animState = 'entering';
  // The trigger for disabling/reenabling the view's panels
  panelsDisabled = true;

  constructor(public cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  // I use this lifecycle hook to switch the animation trigger
  // once the DOM has loaded.
  // We call ChangeDetectorRef.detectChanges() to force an additional change detection.
  // Angular uses change detection to ensure stability across the component tree.
  // Changing this.animState in between checks yields a fatal error (while in dev mode)
  // unless we force an additional check.
  ngAfterViewInit() {
    this.animState = this.animState === 'entering' ? 'entered' : 'entering';
    this.cdRef.detectChanges();
  }
}

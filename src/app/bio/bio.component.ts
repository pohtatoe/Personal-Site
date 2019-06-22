import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { animate, state, style, transition, trigger, group } from '@angular/animations';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css'],
  animations: [
    trigger('entrance', [
      state('entering', style({
        position: 'absolute',
        left: '-10vw',
        // margin: '0 auto 7.5vh 0',
        opacity: 0
      })),
      state('entered', style({
        position: 'absolute',
        left: '0vw',
        // margin: '0 12.5vw 7.5vh 12.5vw',
        opacity: 1,
      })),
      transition('entering => entered', [
        // style({position: 'absolute'}),
        group([
          animate('2.4s 150ms ease-in-out', style({
            left: '0%',
            // margin: '0 12.5vw 7.5vh 12.5vw',
          })),
          animate('3.85s 150ms ease-out', style({
            opacity: 1,
          }))
        ])
      ]),
    ])
  ]
})

export class BioComponent implements OnInit, AfterViewInit {
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

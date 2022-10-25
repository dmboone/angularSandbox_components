import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<h3>This is a warning alert</h3>`,
  styles: [`
    h3{
      color: #f00;
    }
  `],
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor: string = '#c4c4c4';
  @Input() progressColor: string = '#003c96';
  @Input() width: number = 15;

  constructor() { }

  ngOnInit(): void {
  }

}

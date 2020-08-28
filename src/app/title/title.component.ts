import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  text_first = 'first';
  text_second = 'second';

  constructor() {}

  changeFn(e: { target: { value: string; }; }) {
    console.log(e);
    this.text_first = e.target.value;
  }

  modelChangeFn(value: string) {
    console.log(value);
    this.text_second = value;
  }

  ngOnInit(): void {}
}

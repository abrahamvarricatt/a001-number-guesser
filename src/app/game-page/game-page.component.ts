import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  guess_list = [
    // example values below
    { guess: 2, result: 'low'},
    { guess: 8, result: 'high'},
  ];
  current_guess = 5;
  MAX_GUESS = 20;
  MIN_GUESS = 0;
  alert_text = 'This is an alert!';
  random_number = 3;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('starting the game!!');
    // reset data
    this.guess_list = [];
    this.current_guess = 5;
    this.random_number = Math.floor(Math.random() * (this.MAX_GUESS - this.MIN_GUESS + 1)) + this.MIN_GUESS;
  }

  guessListEmpty() {
    return this.guess_list.length === 0;
  }

  increase_guess() {
    this.alert_text = '';
    if (this.current_guess < this.MAX_GUESS) {
      console.log('increase guess');
      this.current_guess++;
    } else {
      this.alert_text = 'Cannot go higher!!';
    }
  }

  decrease_guess() {
    this.alert_text = '';
    if (this.current_guess > this.MIN_GUESS) {
      console.log('decrease guess');
      this.current_guess--;
    } else {
      this.alert_text = 'Cannot go lower!!';
    }
  }

  check_current_guess() {
    console.log('checking the guess!');
    if (this.current_guess > this.random_number) {
      console.log('guess was too high!');
      this.alert_text = 'Too High!';
      this.guess_list.push({
        guess: this.current_guess,
        result: 'high'
      });
    } else if (this.current_guess < this.random_number) {
      console.log('guess was too log!');
      this.alert_text = 'Very Low Guess!';
      this.guess_list.push({
        guess: this.current_guess,
        result: 'low'
      });
    } else {
      console.log('you win!');
      this.alert_text = 'you win!';
      this.router.navigate(['/stop']);
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * https://javascript.plainenglish.io/the-new-features-of-angular-v14-851995870f59
 *
 * Planning on joining Medium? Membership is $5/month and gives unlimited access
 * to all stories on Medium. Use my referral link:
 * https://vkagklis.medium.com/membership
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}

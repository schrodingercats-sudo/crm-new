
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div class="bg-slate-900 border border-white/5 rounded-2xl p-8 w-full max-w-md">
        <div class="flex items-center gap-2 mb-8 justify-center">
            <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white font-bold border border-white/10 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="21.17" y1="8" x2="12" y2="8"></line>
              </svg>
            </div>
            <span class="text-xl font-semibold tracking-tight text-white">Orchestra</span>
        </div>

        <h2 class="text-2xl font-bold text-white mb-6 text-center">Create your account</h2>

        <form (submit)="onSubmit($event)" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-400 mb-1">Email address</label>
            <input type="email" required class="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-colors" placeholder="you@company.com">
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-400 mb-1">Password</label>
            <input type="password" required class="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-colors" placeholder="••••••••">
          </div>

          <button type="submit" class="w-full bg-white text-slate-950 font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors mt-6">
            Sign up
          </button>
        </form>

        <div class="mt-6 text-center text-sm text-slate-500">
          Already have an account? <a href="#" (click)="$event.preventDefault()" class="text-white hover:underline">Sign in</a>
        </div>
      </div>
    </div>
  `
})
export class SignupComponent {
  constructor(private router: Router) {}

  onSubmit(e: Event) {
    e.preventDefault();
    alert('Thanks for signing up! Redirecting to home...');
    this.router.navigate(['/']);
  }
}

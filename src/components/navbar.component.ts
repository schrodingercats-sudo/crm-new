
import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Floating Capsule Navbar -->
    <div class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      
      <nav class="w-full max-w-5xl rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] border"
           [class.bg-[#030303]]="isScrolled()"
           [class.shadow-2xl]="isScrolled()"
           [class.shadow-black]="isScrolled()"
           [class.border-white/10]="isScrolled()"
           
           [class.bg-transparent]="!isScrolled()"
           [class.shadow-none]="!isScrolled()"
           [class.border-transparent]="!isScrolled()">
           
        <div class="px-5 h-14 flex items-center justify-between relative z-10">
          <!-- Logo -->
          <div routerLink="/" class="flex items-center gap-2 cursor-pointer group">
            <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white font-bold group-hover:scale-105 transition-transform border border-white/10 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="21.17" y1="8" x2="12" y2="8"></line>
              </svg>
            </div>
            <span class="text-sm font-semibold tracking-tight text-white group-hover:text-slate-200">Orchestra</span>
          </div>

          <!-- Desktop Links -->
          <div class="hidden md:flex items-center gap-1">
             <a routerLink="/features" routerLinkActive="bg-white/10 text-white" class="text-[13px] font-medium text-slate-400 hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all">Features</a>
             <a routerLink="/pricing" routerLinkActive="bg-white/10 text-white" class="text-[13px] font-medium text-slate-400 hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all">Pricing</a>
             <a routerLink="/blog" routerLinkActive="bg-white/10 text-white" class="text-[13px] font-medium text-slate-400 hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all">Blog</a>
             <a routerLink="/help" routerLinkActive="bg-white/10 text-white" class="text-[13px] font-medium text-slate-400 hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all">Help Center</a>
          </div>

          <!-- Desktop Actions -->
          <div class="hidden md:flex items-center gap-4">
            <a routerLink="/pricing" class="text-[13px] font-medium text-slate-300 hover:text-white transition-colors px-2">Sign in</a>
            <button routerLink="/pricing" class="bg-white text-slate-950 text-[13px] font-bold px-5 py-2 rounded-full hover:bg-slate-200 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <span>Get Started</span>
            </button>
          </div>

          <!-- Mobile Menu Toggle (Animated) -->
          <div class="flex md:hidden">
            <button (click)="toggleMenu()" class="text-slate-400 hover:text-white p-2 focus:outline-none group" aria-label="Toggle menu">
              <div class="w-5 flex flex-col items-end gap-1">
                 <span class="block w-5 h-0.5 bg-current rounded-full transition-all duration-300 origin-center" 
                       [class.rotate-45]="isMenuOpen()" 
                       [class.translate-y-1.5]="isMenuOpen()"></span>
                 <span class="block w-3 h-0.5 bg-current rounded-full transition-all duration-300" 
                       [class.opacity-0]="isMenuOpen()" 
                       [class.w-5]="isMenuOpen()"></span>
                 <span class="block w-5 h-0.5 bg-current rounded-full transition-all duration-300 origin-center" 
                       [class.-rotate-45]="isMenuOpen()" 
                       [class.-translate-y-1.5]="isMenuOpen()"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </div>

    <!-- Mobile Menu Overlay -->
    <div class="md:hidden fixed inset-0 z-40 bg-slate-950 transition-all duration-300 ease-in-out flex flex-col pt-24 px-6"
         [class.opacity-0]="!isMenuOpen()"
         [class.pointer-events-none]="!isMenuOpen()"
         [class.invisible]="!isMenuOpen()"
         [class.opacity-100]="isMenuOpen()"
         [class.pointer-events-auto]="isMenuOpen()"
         [class.visible]="isMenuOpen()">
         
        <div class="flex flex-col space-y-4">
          <a routerLink="/features" (click)="toggleMenu()" class="text-xl font-medium text-slate-300 hover:text-white py-3 border-b border-white/5 transition-colors">Features</a>
          <a routerLink="/pricing" (click)="toggleMenu()" class="text-xl font-medium text-slate-300 hover:text-white py-3 border-b border-white/5 transition-colors">Pricing</a>
          <a routerLink="/blog" (click)="toggleMenu()" class="text-xl font-medium text-slate-300 hover:text-white py-3 border-b border-white/5 transition-colors">Blog</a>
          <a routerLink="/help" (click)="toggleMenu()" class="text-xl font-medium text-slate-300 hover:text-white py-3 border-b border-white/5 transition-colors">Help Center</a>
          <a routerLink="/pricing" (click)="toggleMenu()" class="text-xl font-medium text-slate-300 hover:text-white py-3">Sign in</a>
        </div>
        <div class="mt-auto mb-10">
           <button routerLink="/pricing" (click)="toggleMenu()" class="w-full bg-white text-slate-950 text-base font-bold px-4 py-4 rounded-full hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
            <span>Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
    </div>
  `
})
export class NavbarComponent {
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
}

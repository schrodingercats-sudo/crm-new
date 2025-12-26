
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <div class="pt-32 pb-20 bg-slate-950 min-h-screen">
       <div class="max-w-7xl mx-auto px-6">
          <h1 appScrollReveal class="text-5xl font-bold text-white mb-12">Latest updates</h1>

          <!-- Featured Post -->
          <div appScrollReveal [delay]="100" class="grid md:grid-cols-2 gap-8 mb-20 bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden group cursor-pointer hover:border-white/10 transition-colors">
             <div class="h-64 md:h-auto overflow-hidden relative">
                <img src="https://picsum.photos/800/600?random=1" class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
             </div>
             <div class="p-8 flex flex-col justify-center">
                <div class="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">Product Update</div>
                <h2 class="text-3xl font-bold text-white mb-4">Introducing Orchestra 2.0: The Future of Service Delivery</h2>
                <p class="text-slate-400 mb-6">We've completely rebuilt the client portal from the ground up, added dark mode for clients, and integrated AI-powered task summaries.</p>
                <div class="flex items-center gap-3">
                   <div class="w-8 h-8 rounded-full bg-slate-700"></div>
                   <div class="text-sm text-slate-300">Anthony Riera • 5 min read</div>
                </div>
             </div>
          </div>

          <!-- Grid -->
          <div class="grid md:grid-cols-3 gap-8">
             @for (i of [2,3,4,5,6,7]; track i) {
                <div appScrollReveal [delay]="i * 100" class="group cursor-pointer">
                   <div class="rounded-xl overflow-hidden mb-4 border border-white/5 relative aspect-video">
                      <img [src]="'https://picsum.photos/600/400?random=' + i" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                   </div>
                   <div class="text-xs text-slate-500 mb-2">Sep 12, 2024</div>
                   <h3 class="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">How to scale a design agency to $50k MRR</h3>
                   <p class="text-sm text-slate-400 line-clamp-2">Learn the secrets of productizing your service and removing yourself from the daily operations.</p>
                </div>
             }
          </div>
       </div>
    </div>
  `
})
export class BlogPageComponent {}

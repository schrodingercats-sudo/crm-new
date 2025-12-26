
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section class="py-20 relative bg-slate-950">
      <div class="max-w-5xl mx-auto px-6">
        
        <div class="text-center mb-16">
          <h2 appScrollReveal class="text-4xl md:text-5xl font-bold text-white mb-4">
             <span class="md:hidden">Success at a glance</span>
             <span class="hidden md:inline">Analytics made for <br/> productized services.</span>
          </h2>
          <p appScrollReveal [delay]="200" class="text-slate-400 text-base md:text-lg">
             <span class="md:hidden">Stay alert and make informed decisions with the only platform giving you all the metrics needed for your agency.</span>
             <span class="hidden md:inline">Stay alert and make informed decisions with the only platform <br/> giving you all the metrics needed for your productized service.</span>
          </p>
        </div>

        <!-- Chart Card -->
        <div appScrollReveal [delay]="300" class="relative rounded-3xl bg-slate-900 border border-white/5 p-4 md:p-8 overflow-hidden group">
          
          <!-- Background Grid Effect -->
          <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
          
          <!-- Header Stats -->
          <div class="relative z-10 mb-8">
            <div class="text-sm text-slate-400 font-medium mb-1">MRR</div>
            <div class="flex items-end gap-3">
              <span class="text-4xl font-bold text-white">$38000</span>
              <span class="flex items-center text-emerald-400 text-sm font-medium mb-1 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                245%
              </span>
            </div>
          </div>

          <!-- Chart Area -->
          <div class="relative h-64 w-full">
            <svg class="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 200">
               <!-- Gradient Definition -->
               <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                     <stop offset="0%" stop-color="#ffffff" stop-opacity="0.2" />
                     <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
                  </linearGradient>
               </defs>
               
               <!-- Fill -->
               <path d="M0,200 L0,180 C50,170 100,160 150,165 C200,170 250,150 300,140 C350,130 400,145 450,120 C500,95 550,100 600,80 C650,60 700,50 750,30 L800,20 L800,200 Z" fill="url(#chartGradient)" />
               
               <!-- Line -->
               <path d="M0,180 C50,170 100,160 150,165 C200,170 250,150 300,140 C350,130 400,145 450,120 C500,95 550,100 600,80 C650,60 700,50 750,30 L800,20" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" class="drop-shadow-lg" />
            </svg>
          </div>

          <!-- Bottom Stats Grid -->
          <div class="flex flex-col md:grid md:grid-cols-4 gap-6 md:gap-4 mt-8 pt-8 border-t border-white/5">
             <div class="flex justify-between md:block">
                <div class="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Active customers</div>
                <div class="text-xl font-bold text-white">7 <span class="text-[10px] font-normal text-emerald-400 ml-1">40% ↗</span></div>
                <div class="text-[10px] text-slate-500 md:hidden">5 previous</div>
             </div>
             <div class="flex justify-between md:block">
                <div class="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Paused customers</div>
                <div class="text-xl font-bold text-white">3 <span class="text-[10px] font-normal text-emerald-400 ml-1">-25% ↗</span></div>
                <div class="text-[10px] text-slate-500 md:hidden">4 previous</div>
             </div>
             <div class="flex justify-between md:block">
                <div class="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Tasks worked on</div>
                <div class="text-xl font-bold text-white">75 <span class="text-[10px] font-normal text-emerald-400 ml-1">39% ↗</span></div>
                <div class="text-[10px] text-slate-500 md:hidden">54 previous</div>
             </div>
             <div class="flex justify-between md:block">
                <div class="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Task completion time</div>
                <div class="text-xl font-bold text-white">3d <span class="text-[10px] font-normal text-red-400 ml-1">30% ↘</span></div>
                <div class="text-[10px] text-slate-500 md:hidden">2.3 d previous</div>
             </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class AnalyticsComponent {}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-features-page',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <div class="pt-32 pb-20 bg-slate-950 min-h-screen">
       <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-20">
             <h1 appScrollReveal class="text-5xl md:text-7xl font-bold text-white mb-6">Everything you need to <br/> run your agency.</h1>
             <p appScrollReveal [delay]="100" class="text-lg text-slate-400 max-w-2xl mx-auto">From client onboarding to monthly recurring revenue, Orchestra provides a complete suite of tools built specifically for productized services.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             
             <!-- Feature Card 1 -->
             <div appScrollReveal [delay]="200" class="col-span-1 lg:col-span-2 bg-slate-900 border border-white/5 rounded-3xl p-8 overflow-hidden relative group h-[400px]">
                <div class="relative z-10">
                   <h3 class="text-2xl font-bold text-white mb-2">Client Portal</h3>
                   <p class="text-slate-400 max-w-md">Give your clients a professional, white-labeled home for their requests and assets.</p>
                </div>
                <div class="absolute right-0 bottom-0 w-3/4 h-3/4 bg-slate-950 border-t border-l border-white/5 rounded-tl-2xl overflow-hidden shadow-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500">
                    <!-- Mini Dashboard visual -->
                    <div class="p-4">
                       <div class="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                          <div class="text-xs text-white font-bold">Tasks</div>
                          <div class="flex gap-2">
                             <div class="w-2 h-2 rounded-full bg-red-500"></div>
                             <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                          </div>
                       </div>
                       <div class="space-y-2">
                          <div class="bg-slate-900 p-2 rounded border border-white/5 text-xs text-slate-300">New Landing Page Design</div>
                          <div class="bg-slate-900 p-2 rounded border border-white/5 text-xs text-slate-300">Logo Refresh</div>
                          <div class="bg-slate-900 p-2 rounded border border-white/5 text-xs text-slate-300">SEO Audit</div>
                       </div>
                    </div>
                </div>
             </div>

             <!-- Feature Card 2 -->
             <div appScrollReveal [delay]="300" class="bg-slate-900 border border-white/5 rounded-3xl p-8 h-[400px] flex flex-col">
                <div class="mb-auto">
                   <h3 class="text-2xl font-bold text-white mb-2">Secure Payments</h3>
                   <p class="text-slate-400">Integrated Stripe subscriptions.</p>
                </div>
                <div class="flex items-center justify-center">
                   <div class="w-48 h-48 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                      <span class="text-3xl font-bold text-white">$4,250</span>
                   </div>
                </div>
             </div>

             <!-- Feature Card 3 -->
             <div appScrollReveal [delay]="400" class="bg-slate-900 border border-white/5 rounded-3xl p-8 h-[400px]">
                <h3 class="text-2xl font-bold text-white mb-2">Automated Onboarding</h3>
                <p class="text-slate-400 mb-8">Collect details instantly after payment.</p>
                <div class="space-y-4">
                   <div class="flex items-center gap-3 text-sm text-slate-300">
                      <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">✓</div>
                      <span>Send Intake Form</span>
                   </div>
                    <div class="flex items-center gap-3 text-sm text-slate-300">
                      <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">✓</div>
                      <span>Create Client Portal</span>
                   </div>
                    <div class="flex items-center gap-3 text-sm text-slate-300">
                      <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">✓</div>
                      <span>Invite Team Members</span>
                   </div>
                   <div class="flex items-center gap-3 text-sm text-slate-300">
                      <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">✓</div>
                      <span>Send Welcome Email</span>
                   </div>
                </div>
             </div>

             <!-- Feature Card 4 -->
             <div appScrollReveal [delay]="500" class="col-span-1 lg:col-span-2 bg-slate-900 border border-white/5 rounded-3xl p-8 overflow-hidden relative h-[400px]">
                 <div class="relative z-10 max-w-md">
                   <h3 class="text-2xl font-bold text-white mb-2">Task Management</h3>
                   <p class="text-slate-400">Kanban boards, lists, and real-time collaboration.</p>
                </div>
                <div class="absolute bottom-0 right-0 w-2/3 h-64 bg-[#0B1120] border-t border-l border-white/5 rounded-tl-xl p-6">
                    <!-- Kanban Visual -->
                    <div class="flex gap-4 h-full">
                       <div class="flex-1 bg-slate-900/50 rounded p-2">
                          <div class="text-[10px] uppercase text-slate-500 font-bold mb-2">To Do</div>
                          <div class="bg-slate-800 p-2 rounded mb-2 h-16 w-full animate-pulse-slow"></div>
                          <div class="bg-slate-800 p-2 rounded h-12 w-full"></div>
                       </div>
                       <div class="flex-1 bg-slate-900/50 rounded p-2">
                          <div class="text-[10px] uppercase text-slate-500 font-bold mb-2">In Progress</div>
                          <div class="bg-slate-800 p-2 rounded h-20 w-full border border-indigo-500/30"></div>
                       </div>
                    </div>
                </div>
             </div>

          </div>
       </div>
    </div>
  `
})
export class FeaturesPageComponent {}

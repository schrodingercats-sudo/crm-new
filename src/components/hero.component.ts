
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section class="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center bg-slate-950">
      
      <!-- Ambient Glows -->
      <div class="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] -z-10 opacity-30"></div>
      
      <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        <!-- ========================================== -->
        <!-- DESKTOP CONTENT (Hidden on Mobile)         -->
        <!-- ========================================== -->
        <div class="hidden md:block">
          <h1 appScrollReveal class="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            <span class="text-slate-500">The first all-in-one toolkit</span> <br/>
            designed to help you grow <br/>
            your productized service.
          </h1>

          <p appScrollReveal [delay]="200" class="text-base text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Accept payments, manage tasks, communicate with your clients, and offer them the best service possible with your very own client portal. <strong class="text-white">Set up in less than 5 minutes.</strong>
          </p>

          <div appScrollReveal [delay]="400" class="flex flex-row items-center justify-center gap-6 mb-24">
            <button class="h-10 px-6 rounded-full bg-white text-slate-950 text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2">
              Set up your service
            </button>
            <button class="h-10 px-6 rounded-full bg-transparent text-slate-300 text-sm font-medium hover:text-white transition-colors flex items-center gap-2 group">
              See our guides
              <svg class="w-3.5 h-3.5 opacity-70 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>

          <!-- Desktop Dashboard Mockup -->
          <div appScrollReveal [delay]="600" class="relative max-w-[1200px] mx-auto perspective-1000">
            <div class="glass-panel rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#09090b] text-left">
              <!-- Window Bar -->
              <div class="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#09090b]">
                 <div class="flex items-center gap-4 w-full">
                    <div class="flex gap-1.5">
                      <div class="w-3 h-3 rounded-full bg-slate-800"></div>
                      <div class="w-3 h-3 rounded-full bg-slate-800"></div>
                      <div class="w-3 h-3 rounded-full bg-slate-800"></div>
                    </div>
                    <div class="flex-1 flex justify-center">
                      <div class="h-6 px-4 bg-white/5 rounded-md flex items-center text-[10px] text-slate-500 font-mono">
                        orchestra.app/dashboard
                      </div>
                    </div>
                    <div class="w-10"></div>
                 </div>
              </div>

              <!-- Desktop App Content -->
              <div class="flex h-[600px] text-left font-sans overflow-hidden relative">
                <!-- Sidebar -->
                <div class="w-60 border-r border-white/5 bg-[#09090b] p-4 flex flex-col gap-6">
                   <div class="flex items-center justify-between px-2 mb-2">
                     <div class="flex items-center gap-2">
                       <div class="w-5 h-5 rounded bg-white text-slate-950 flex items-center justify-center font-bold text-xs">O</div>
                       <span class="text-sm font-semibold text-white">OFFMENU</span>
                     </div>
                     <span class="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">Starter</span>
                  </div>
                   <div class="relative px-2">
                     <div class="h-8 bg-slate-900 rounded border border-white/5 flex items-center px-2 text-slate-500 text-xs gap-2">
                        <span>Search</span>
                        <span class="ml-auto text-[9px] border border-slate-700 px-1 rounded">⌘ K</span>
                     </div>
                  </div>
                  <div>
                     <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-2 mb-2 flex items-center justify-between">Tasks</div>
                     <div class="space-y-0.5">
                        <div class="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/5 text-white text-xs"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Assigned to me</div>
                        <div class="flex items-center gap-2 px-2 py-1.5 rounded-md text-slate-400 text-xs">Subscribers</div>
                     </div>
                  </div>
                </div>

                <!-- Main Board -->
                <div class="flex-1 bg-[#09090b] flex flex-col">
                   <div class="h-14 border-b border-white/5 flex items-center justify-between px-6">
                      <div class="flex items-center gap-2">
                         <span class="font-semibold text-white text-sm">Tasks</span>
                      </div>
                      <div class="flex items-center gap-3">
                          <div class="flex -space-x-2">
                             <div class="w-6 h-6 rounded-full bg-slate-600 border border-slate-900"></div>
                             <div class="w-6 h-6 rounded-full bg-slate-500 border border-slate-900"></div>
                          </div>
                          <button class="bg-white text-slate-950 px-3 py-1.5 rounded text-xs font-bold flex items-center gap-1">New task</button>
                      </div>
                   </div>

                  <div class="flex-1 p-6 overflow-x-auto">
                     <div class="flex gap-6 h-full min-w-max">
                       <div class="w-72 flex flex-col gap-3">
                          <div class="flex items-center justify-between mb-1">
                             <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full border border-slate-500"></div>
                                <span class="text-xs font-medium text-slate-300">Not started</span>
                                <span class="text-xs text-slate-500">6</span>
                             </div>
                          </div>
                          <div class="bg-slate-850 p-3 rounded-lg border border-white/5 shadow-sm group hover:border-white/10 transition-colors">
                             <div class="flex items-center gap-2 mb-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                                <span class="text-[10px] text-slate-400">Unordinary</span>
                             </div>
                             <p class="text-sm text-slate-200 font-medium leading-snug mb-3">Create a new logo for Orchestra</p>
                             <div class="flex items-center justify-between">
                                <div class="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[8px]">JD</div>
                             </div>
                          </div>
                          <div class="bg-slate-850 p-3 rounded-lg border border-white/5 shadow-sm group hover:border-white/10 transition-colors">
                             <div class="flex items-center gap-2 mb-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                                <span class="text-[10px] text-slate-400">Unordinary</span>
                             </div>
                             <p class="text-sm text-slate-200 font-medium leading-snug mb-3">Ordering Project Tasks</p>
                          </div>
                       </div>
                       <div class="w-72 flex flex-col gap-3">
                          <div class="flex items-center justify-between mb-1">
                             <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full border border-yellow-500/50"></div>
                                <span class="text-xs font-medium text-slate-300">To do</span>
                             </div>
                          </div>
                          <div class="bg-slate-850 p-3 rounded-lg border border-white/5 shadow-sm transition-colors">
                             <div class="flex items-center gap-2 mb-2">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                <span class="text-[10px] text-slate-400">Upstash</span>
                             </div>
                             <p class="text-sm text-slate-200 font-medium leading-snug mb-3">Lock Down all Databases</p>
                          </div>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ========================================== -->
        <!-- MOBILE CONTENT (Hidden on Desktop)         -->
        <!-- ========================================== -->
        <div class="md:hidden text-left mb-12">
          <div appScrollReveal class="text-xs text-slate-500 mb-6">Free until your first customer</div>
          <h1 appScrollReveal [delay]="100" class="text-4xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
            Start growing your agency today—without a complicated setup.
          </h1>

          <p appScrollReveal [delay]="200" class="text-base text-slate-400 mb-8 leading-relaxed">
            Accept payments, manage tasks, and communicate with your clients with your very own white-labelled client portal. <strong class="text-white">5-min setup, ready to go this morning.</strong>
          </p>

          <div appScrollReveal [delay]="300" class="flex flex-row gap-3 mb-12">
            <button class="h-12 px-6 rounded-full bg-white text-slate-950 text-sm font-bold hover:bg-slate-200 transition-colors whitespace-nowrap">
              Set up your agency
            </button>
            <button class="h-12 px-6 rounded-full bg-[#111] text-white border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2 whitespace-nowrap">
              Book a demo
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>

          <!-- Mobile Dashboard Mockup (Matching Agency X Image) -->
          <div appScrollReveal [delay]="400" class="relative w-full rounded-t-xl bg-[#0B1120] border-t border-x border-white/10 overflow-hidden shadow-2xl">
              <!-- Window Controls -->
              <div class="h-8 bg-[#0B1120] border-b border-white/5 flex items-center px-4 gap-1.5">
                 <div class="w-2 h-2 rounded-full bg-red-500/20"></div>
                 <div class="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                 <div class="w-2 h-2 rounded-full bg-green-500/20"></div>
              </div>
              
              <div class="flex h-[350px]">
                 <!-- Mobile Sidebar (Agency X style) -->
                 <div class="w-[55%] border-r border-white/5 bg-[#0B1120] p-4">
                    <!-- Agency Header -->
                    <div class="flex items-center justify-between mb-8">
                        <div class="flex items-center gap-2 text-slate-200 font-bold text-sm">
                            <div class="w-5 h-5 rounded bg-slate-700 flex items-center justify-center text-[10px] text-white">A</div>
                            Agency X
                        </div>
                        <div class="flex gap-2 text-slate-500">
                             <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                             <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                        </div>
                    </div>

                    <!-- Nav -->
                    <div class="space-y-6">
                       <div class="flex items-center gap-3 text-white text-sm font-medium">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                          Tasks
                       </div>
                       <div class="flex items-center gap-3 text-slate-500 text-sm font-medium">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                          Analytics
                       </div>
                       <div class="flex items-center gap-3 text-slate-500 text-sm font-medium">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                          Payments
                       </div>
                       <div class="flex items-center gap-3 text-slate-500 text-sm font-medium">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                          Customers
                       </div>
                    </div>
                 </div>
                 
                 <!-- Mobile Main Content preview -->
                 <div class="w-[45%] bg-[#050505] p-4 relative">
                    <div class="flex items-center justify-between mb-4">
                         <span class="text-xs font-bold text-white">Tasks</span>
                         <div class="w-4 h-4 rounded-full border border-slate-700 flex items-center justify-center text-[10px] text-white">+</div>
                    </div>
                     <div class="flex items-center gap-2 mb-2">
                        <div class="w-2 h-2 rounded-full border border-slate-500"></div>
                        <span class="text-[10px] text-slate-400">Not started</span>
                     </div>
                     <!-- Card -->
                     <div class="bg-[#1e293b] p-3 rounded border border-white/5 mb-3 opacity-80">
                        <div class="flex gap-1 mb-2">
                            <div class="w-2 h-2 rounded-full bg-red-400"></div>
                            <div class="w-10 h-2 bg-slate-700 rounded"></div>
                        </div>
                        <div class="w-full h-2 bg-slate-600 rounded mb-1"></div>
                        <div class="w-2/3 h-2 bg-slate-600 rounded"></div>
                     </div>
                      <!-- Card 2 -->
                     <div class="bg-[#1e293b] p-3 rounded border border-white/5 opacity-40">
                        <div class="w-full h-2 bg-slate-600 rounded mb-1"></div>
                        <div class="w-1/2 h-2 bg-slate-600 rounded"></div>
                     </div>

                     <!-- Branding Guide Popup (Floating) -->
                    <div class="absolute bottom-6 right-4 bg-white text-slate-950 w-10 h-10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center z-10 animate-spin-slow">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" fill="black"/>
                        </svg>
                    </div>
                 </div>
              </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class HeroComponent {}

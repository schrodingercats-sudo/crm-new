
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-help-center',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <div class="pt-32 pb-20 bg-slate-950 min-h-screen">
       <div class="max-w-4xl mx-auto px-6 text-center">
          <h1 appScrollReveal class="text-4xl md:text-5xl font-bold text-white mb-6">How can we help?</h1>
          
          <!-- Search -->
          <div appScrollReveal [delay]="100" class="relative max-w-2xl mx-auto mb-16">
             <input type="text" placeholder="Search for articles..." class="w-full bg-slate-900 border border-white/10 rounded-full py-4 px-6 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-lg shadow-black/50">
             <svg class="w-5 h-5 text-slate-500 absolute right-6 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>

          <!-- Categories -->
          <div class="grid md:grid-cols-3 gap-6 mb-20 text-left">
             <div appScrollReveal [delay]="200" class="bg-slate-900/50 border border-white/5 p-6 rounded-2xl hover:bg-slate-900 hover:border-white/10 transition-all cursor-pointer group">
                <div class="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 class="text-white font-bold mb-1">Getting Started</h3>
                <p class="text-sm text-slate-400">Setup your account, domain, and first service.</p>
             </div>
             
             <div appScrollReveal [delay]="300" class="bg-slate-900/50 border border-white/5 p-6 rounded-2xl hover:bg-slate-900 hover:border-white/10 transition-all cursor-pointer group">
                <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 class="text-white font-bold mb-1">Payments</h3>
                <p class="text-sm text-slate-400">Connecting Stripe, managing subscriptions.</p>
             </div>

             <div appScrollReveal [delay]="400" class="bg-slate-900/50 border border-white/5 p-6 rounded-2xl hover:bg-slate-900 hover:border-white/10 transition-all cursor-pointer group">
                <div class="w-10 h-10 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <h3 class="text-white font-bold mb-1">Settings</h3>
                <p class="text-sm text-slate-400">Custom domain, branding, and team roles.</p>
             </div>
          </div>

          <!-- FAQ -->
          <div appScrollReveal [delay]="500" class="max-w-2xl mx-auto text-left">
             <h2 class="text-2xl font-bold text-white mb-6">Frequently asked questions</h2>
             <div class="space-y-4">
                <details class="group bg-slate-900/30 border border-white/5 rounded-xl">
                   <summary class="flex items-center justify-between p-4 cursor-pointer font-medium text-slate-200">
                      Can I use my own domain?
                      <span class="text-slate-500 group-open:rotate-180 transition-transform">▼</span>
                   </summary>
                   <div class="px-4 pb-4 text-sm text-slate-400">
                      Yes! You can connect any custom domain to your client portal. We handle the SSL certificates automatically.
                   </div>
                </details>
                <details class="group bg-slate-900/30 border border-white/5 rounded-xl">
                   <summary class="flex items-center justify-between p-4 cursor-pointer font-medium text-slate-200">
                      Do you take transaction fees?
                      <span class="text-slate-500 group-open:rotate-180 transition-transform">▼</span>
                   </summary>
                   <div class="px-4 pb-4 text-sm text-slate-400">
                      No. We do not charge any additional transaction fees. You only pay the standard Stripe processing fees.
                   </div>
                </details>
             </div>
          </div>

       </div>
    </div>
  `
})
export class HelpCenterComponent {}

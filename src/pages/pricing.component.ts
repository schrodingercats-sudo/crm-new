
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  template: `
    <div class="pt-32 pb-20 bg-slate-950 min-h-screen">
      <div class="max-w-7xl mx-auto px-6">
         
         <div class="text-center mb-16">
            <h1 appScrollReveal class="text-5xl font-bold text-white mb-6">Simple, transparent pricing</h1>
            <p appScrollReveal [delay]="100" class="text-lg text-slate-400 mb-8">No hidden fees. Start for free, upgrade as you grow.</p>
            
            <!-- Toggle -->
            <div appScrollReveal [delay]="150" class="inline-flex items-center p-1 bg-slate-900 rounded-full border border-white/5 relative">
               <button (click)="isAnnual.set(false)" 
                       class="px-6 py-2 rounded-full text-sm font-medium transition-all relative z-10"
                       [class.text-white]="!isAnnual()"
                       [class.text-slate-500]="isAnnual()">Monthly</button>
               <button (click)="isAnnual.set(true)" 
                       class="px-6 py-2 rounded-full text-sm font-medium transition-all relative z-10"
                       [class.text-white]="isAnnual()"
                       [class.text-slate-500]="!isAnnual()">
                       Yearly <span class="text-indigo-400 text-[10px] ml-1">-20%</span>
               </button>
               
               <!-- Sliding Pill -->
               <div class="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-slate-800 rounded-full transition-all duration-300"
                    [class.left-1]="!isAnnual()"
                    [class.left-[calc(50%)]]="isAnnual()"></div>
            </div>
         </div>

         <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            <!-- Starter -->
            <div appScrollReveal [delay]="200" class="bg-slate-900/50 border border-white/5 rounded-2xl p-8 flex flex-col">
               <div class="mb-4">
                  <div class="text-lg font-bold text-white">Starter</div>
                  <div class="text-sm text-slate-500">For freelancers just starting out.</div>
               </div>
               <div class="text-4xl font-bold text-white mb-6">$0</div>
               <button routerLink="/signup" class="w-full py-2.5 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors mb-8">Get Started</button>
               <ul class="space-y-3 text-sm text-slate-300 flex-1">
                  <li class="flex gap-2"><span class="text-slate-500">✓</span> 1 Client</li>
                  <li class="flex gap-2"><span class="text-slate-500">✓</span> 2 Team members</li>
                  <li class="flex gap-2"><span class="text-slate-500">✓</span> Unlimited Tasks</li>
                  <li class="flex gap-2"><span class="text-slate-500">✓</span> Basic Analytics</li>
               </ul>
            </div>

            <!-- Pro (Highlighted) -->
            <div appScrollReveal [delay]="300" class="bg-[#0f1014] border border-indigo-500/30 rounded-2xl p-8 flex flex-col relative shadow-2xl shadow-indigo-900/20">
               <div class="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
               <div class="mb-4">
                  <div class="text-lg font-bold text-white">Pro</div>
                  <div class="text-sm text-slate-500">For growing agencies.</div>
               </div>
               <div class="flex items-baseline gap-1 mb-6">
                  <span class="text-4xl font-bold text-white">{{ isAnnual() ? '$39' : '$49' }}</span>
                  <span class="text-slate-500">/mo</span>
               </div>
               <button routerLink="/signup" class="w-full py-2.5 rounded-lg bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors mb-8 shadow-[0_0_15px_rgba(255,255,255,0.1)]">Start 14-day trial</button>
               <ul class="space-y-3 text-sm text-slate-300 flex-1">
                  <li class="flex gap-2"><span class="text-indigo-400">✓</span> 10 Clients</li>
                  <li class="flex gap-2"><span class="text-indigo-400">✓</span> 5 Team members</li>
                  <li class="flex gap-2"><span class="text-indigo-400">✓</span> Custom Domain</li>
                  <li class="flex gap-2"><span class="text-indigo-400">✓</span> Stripe Integration</li>
                  <li class="flex gap-2"><span class="text-indigo-400">✓</span> Remove "Powered by"</li>
               </ul>
            </div>

            <!-- Scale -->
            <div appScrollReveal [delay]="400" class="bg-slate-900/50 border border-white/5 rounded-2xl p-8 flex flex-col">
               <div class="mb-4">
                  <div class="text-lg font-bold text-white">Scale</div>
                  <div class="text-sm text-slate-500">For established teams.</div>
               </div>
               <div class="flex items-baseline gap-1 mb-6">
                  <span class="text-4xl font-bold text-white">{{ isAnnual() ? '$159' : '$199' }}</span>
                  <span class="text-slate-500">/mo</span>
               </div>
               <a href="mailto:support@orchestra.com" class="block text-center w-full py-2.5 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors mb-8">Contact Sales</a>
               <ul class="space-y-3 text-sm text-slate-300 flex-1">
                  <li class="flex gap-2"><span class="text-slate-500">✓</span> Unlimited Clients</li>
                  <li class="flex gap-2"><span class="text-slate-500">✓</span> Unlimited Team</li>
                  <li class="flex gap-2"><span class="text-slate-500">✓</span> Priority Support</li>
                  <li class="flex gap-2"><span class="text-slate-500">✓</span> API Access</li>
                  <li class="flex gap-2"><span class="text-slate-500">✓</span> White-glove Onboarding</li>
               </ul>
            </div>

         </div>
      </div>
    </div>
  `
})
export class PricingPageComponent {
  isAnnual = signal(true);
}

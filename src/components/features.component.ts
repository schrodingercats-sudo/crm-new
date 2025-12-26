
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section class="py-16 md:py-32 relative overflow-hidden bg-slate-950">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          
          <!-- Text Content -->
          <div class="order-2 lg:order-1">
             <!-- Mobile Heading -->
             <div class="md:hidden mb-8">
                <h2 appScrollReveal class="text-4xl font-bold text-white mb-4 leading-tight">Meet your next <br> client portal.</h2>
                <p appScrollReveal [delay]="100" class="text-slate-400 text-base mb-8 leading-relaxed">Simple. Powerful. Beautiful. Offer a better experience with a client portal with your domain name and branding. A place your customers deserve.</p>
                <div appScrollReveal [delay]="200" class="flex gap-4 mb-8">
                    <button class="bg-white text-slate-950 px-4 py-2 rounded-full text-xs font-bold">Try client portal live</button>
                    <button class="text-slate-400 text-xs font-medium">Explore client portal</button>
                </div>
             </div>

             <!-- Desktop Heading -->
             <div class="hidden md:block">
                <h2 appScrollReveal class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Your own first-class <br /> client portal experience</h2>
                <p appScrollReveal [delay]="100" class="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
                Orchestra comes out-of-the-box with a customizable client portal with your domain name and branding. A place you can call your own.
                </p>
             </div>

             <div class="space-y-8 md:space-y-10">
                <div appScrollReveal [delay]="200" class="relative pl-0 md:pl-6 md:border-l border-white/10 flex flex-col md:block">
                   <div class="flex items-center gap-2 md:block mb-2">
                       <div class="md:hidden text-white"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>
                       <h3 class="text-white font-bold text-base md:text-lg">Fully white-labelled</h3>
                   </div>
                   <p class="text-slate-400 text-sm leading-relaxed pl-7 md:pl-0">Add your own domain name and branding.</p>
                </div>

                <div appScrollReveal [delay]="300" class="relative pl-0 md:pl-6 md:border-l border-white/10 flex flex-col md:block">
                   <div class="flex items-center gap-2 md:block mb-2">
                       <div class="md:hidden text-white"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg></div>
                       <h3 class="text-white font-bold text-base md:text-lg">Easy onboarding</h3>
                   </div>
                   <p class="text-slate-400 text-sm leading-relaxed pl-7 md:pl-0">Automate customer onboarding in few clicks</p>
                </div>

                <div appScrollReveal [delay]="400" class="relative pl-0 md:pl-6 md:border-l border-white/10 flex flex-col md:block">
                    <div class="flex items-center gap-2 md:block mb-2">
                       <div class="md:hidden text-white"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
                       <h3 class="text-white font-bold text-base md:text-lg">Collaborative</h3>
                   </div>
                   <p class="text-slate-400 text-sm leading-relaxed pl-7 md:pl-0">Allow your clients to invite their teams to collaborate with yours.</p>
                </div>
             </div>
          </div>

          <!-- Visual -->
          <div appScrollReveal [delay]="200" class="relative order-1 lg:order-2">
             <div class="absolute inset-0 bg-indigo-500/20 blur-[100px] -z-10 opacity-50"></div>
             
             <!-- Portal Customization Window -->
             <div class="bg-[#09090b] rounded-xl border border-white/10 shadow-2xl overflow-hidden relative">
                <!-- Popup element (Desktop only) -->
                <div class="absolute top-10 left-10 z-20 bg-white p-4 rounded-lg shadow-xl w-64 animate-bounce-slow text-slate-900 hidden md:block">
                   <div class="text-xs font-semibold mb-1">Add a custom logo and brand colors on light or dark mode.</div>
                   <div class="h-2 w-2 bg-white rotate-45 absolute -bottom-1 left-4"></div>
                </div>

                <!-- Window Header -->
                <div class="bg-slate-900 px-4 py-3 flex items-center gap-4 border-b border-white/5">
                   <div class="flex gap-1.5">
                      <div class="w-3 h-3 rounded-full bg-red-500/20"></div>
                      <div class="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                      <div class="w-3 h-3 rounded-full bg-green-500/20"></div>
                   </div>
                   <div class="flex-1 text-center">
                      <div class="bg-white/5 inline-block px-3 py-1 rounded text-[10px] text-slate-500 font-mono">portal.yourdomain.com</div>
                   </div>
                </div>
                
                <!-- Window Body -->
                <div class="p-4 md:p-6 h-[400px] md:h-[500px] flex flex-col bg-[#09090b]">
                   
                   <!-- Mobile Specific Chat view in Window Body -->
                   <div class="md:hidden">
                       <div class="text-xs text-slate-500 mb-4">Feed</div>
                       <div class="flex gap-2 mb-4">
                           <div class="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white font-bold">Y</div>
                           <div>
                               <div class="text-[10px] text-slate-300"><span class="font-bold text-white">You</span> created this task • 24 days</div>
                           </div>
                       </div>
                       <div class="flex gap-2 mb-4">
                           <div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">JD</div>
                           <div>
                               <div class="text-[10px] text-slate-300"><span class="font-bold text-white">John doe</span> • 38 minutes</div>
                               <div class="bg-slate-900 p-2 rounded text-[10px] text-slate-300 mt-1 border border-white/5">
                                   <span class="text-indigo-400">@Anthony</span> We will begin working on this SEO report tomorrow. Our team is ready and we will share any key findings with you.
                               </div>
                           </div>
                       </div>
                        <div class="flex gap-2 mb-4">
                           <div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">JD</div>
                           <div>
                               <div class="text-[10px] text-slate-300"><span class="font-bold text-white">John doe</span> • 35 minutes</div>
                               <div class="text-[10px] text-slate-400 mt-1 italic">
                                   Quick action for you: can you give us access to your google search console?
                               </div>
                           </div>
                       </div>
                       <div class="flex gap-2 mb-4">
                           <div class="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white font-bold">Y</div>
                           <div>
                               <div class="text-[10px] text-slate-300"><span class="font-bold text-white">You</span> • 22 minutes</div>
                               <div class="bg-slate-900 p-2 rounded text-[10px] text-slate-300 mt-1 border border-white/5 flex items-center gap-2">
                                   Access granted <span class="text-lg">👍</span>
                               </div>
                           </div>
                       </div>
                   </div>

                   <!-- Desktop Content (Preserved) -->
                   <div class="hidden md:block">
                        <div class="text-2xl font-black text-white tracking-tighter uppercase mb-6">OFFMENU</div>
                        <div class="flex border-b border-white/10 mb-6">
                            <div class="px-4 py-2 text-sm text-white border-b-2 border-white font-medium">Tasks</div>
                            <div class="px-4 py-2 text-sm text-slate-500">Subscription</div>
                            <div class="px-4 py-2 text-sm text-slate-500">Settings</div>
                        </div>
                        <div class="flex-1 bg-slate-900/50 rounded-lg border border-white/5 p-4 flex gap-4">
                            <!-- Column -->
                            <div class="flex-1">
                                <div class="flex items-center gap-2 mb-3">
                                    <div class="w-2 h-2 rounded-full border border-slate-500"></div>
                                    <span class="text-xs text-slate-400">Not started 1</span>
                                </div>
                                <div class="bg-slate-800 p-3 rounded border border-white/5 mb-2 opacity-50">
                                    <div class="w-16 h-2 bg-slate-700 rounded mb-2"></div>
                                    <div class="w-full h-3 bg-slate-600 rounded mb-1"></div>
                                    <div class="w-2/3 h-3 bg-slate-600 rounded"></div>
                                </div>
                            </div>
                            <!-- Column -->
                            <div class="flex-1 pt-12 text-center">
                                <div class="text-xs text-slate-500 mb-2">To do empty</div>
                            </div>
                        </div>
                   </div>

                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class FeaturesComponent {}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-trusted-by',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section class="border-y border-white/5 bg-slate-950 py-12 md:py-20 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        
        <!-- DESKTOP LOGOS -->
        <div class="hidden md:block text-center">
            <p appScrollReveal class="text-sm font-medium text-slate-400 mb-12">
            Powering the world's best productized services. <br class="md:hidden" />
            From one-man agencies to big studios.
            </p>
            
            <div appScrollReveal [delay]="200" class="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-100 mb-20">
            <div class="flex items-center gap-2 text-xl font-bold text-white"><div class="w-6 h-6 rounded-full bg-white"></div> OrangeStudio</div>
            <div class="text-2xl font-black text-white tracking-tighter uppercase">OFFMENU</div>
            <div class="text-xl font-medium text-white tracking-tight">baked design</div>
            </div>

            <div appScrollReveal [delay]="400" class="max-w-3xl mx-auto">
            <blockquote class="text-xl md:text-2xl text-slate-400 leading-relaxed font-normal">
                "It's quickly becoming insane to even consider using any other software if you're a productized agency. No one else is doing it like Orchestra."
            </blockquote>
            <div class="mt-6 text-slate-500 font-medium">- Lucas</div>
            </div>
        </div>

        <!-- MOBILE TESTIMONIAL CARDS -->
        <div class="md:hidden flex flex-col gap-4">
            <!-- Card 1 -->
            <div appScrollReveal class="bg-slate-900 border border-white/5 p-6 rounded-xl">
                <div class="flex gap-2 items-center mb-4 text-xs text-slate-400">
                    <div class="w-4 h-4 rounded-full bg-slate-700"></div> Agency X
                </div>
                <p class="text-sm text-slate-300 leading-relaxed mb-6">
                    "Orchestra is purpose built for productized services / agencies and has a clean, fast UI that makes it easier for my clients to interact with us and for me to manage my agency. It has all of the features that make automating and managing the agency even easier."
                </p>
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-slate-700 overflow-hidden">
                       <img src="https://picsum.photos/32/32?random=1" alt="George" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <div class="text-xs font-bold text-white">George Collier</div>
                        <div class="text-[10px] text-slate-500">Founder of NotQuiteUnicorns</div>
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
             <div appScrollReveal [delay]="200" class="bg-slate-900 border border-white/5 p-6 rounded-xl">
                <p class="text-sm text-slate-300 leading-relaxed mb-6">
                    "Such an amazing tool for designers in the productized design arena. Slick, quick, with all the essential features you need, and none of the fluff. Oh, and the founder is so supportive and helpful. Double win!"
                </p>
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-slate-700 overflow-hidden">
                       <img src="https://picsum.photos/32/32?random=2" alt="Marc" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <div class="text-xs font-bold text-white">Marc Andrew</div>
                        <div class="text-[10px] text-slate-500">Founder of All You Can Design</div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  `
})
export class TrustedByComponent {}

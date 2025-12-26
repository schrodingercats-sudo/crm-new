
import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero.component';
import { TrustedByComponent } from '../components/trusted-by.component';
import { FeaturesComponent } from '../components/features.component';
import { TaskManagementComponent } from '../components/task-management.component';
import { AnalyticsComponent } from '../components/analytics.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    TrustedByComponent,
    FeaturesComponent,
    TaskManagementComponent,
    AnalyticsComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-trusted-by></app-trusted-by>

    <!-- MOBILE NEW SECTION: Growing an agency is hard -->
    <section class="md:hidden py-16 px-6 bg-[#050505]">
        <div class="text-center mb-10">
            <h2 class="text-4xl font-bold leading-tight mb-2">Growing an agency is hard. Without a system, it's even harder.</h2>
            <div class="text-slate-500 mb-8">(We know it, we've been there)</div>
            <div class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-slate-400 mb-8">?</div>
        </div>

        <div class="mb-12">
            <h3 class="font-bold text-lg mb-4">Your agency without Orchestra</h3>
            <ul class="space-y-4">
                <li class="flex items-center gap-3 text-slate-400 text-sm"><span class="text-slate-600">✕</span> Struggling to onboard clients</li>
                <li class="flex items-center gap-3 text-slate-400 text-sm"><span class="text-slate-600">✕</span> Bad customer experience</li>
                <li class="flex items-center gap-3 text-slate-400 text-sm"><span class="text-slate-600">✕</span> Use tools made for other industries</li>
                <li class="flex items-center gap-3 text-slate-400 text-sm"><span class="text-slate-600">✕</span> Hard to communicate your value to your clients</li>
                <li class="flex items-center gap-3 text-slate-400 text-sm"><span class="text-slate-600">✕</span> Hard to work with your team and customers</li>
                <li class="flex items-center gap-3 text-slate-400 text-sm"><span class="text-slate-600">✕</span> Need more effort to scale</li>
            </ul>
        </div>
        
        <div class="flex justify-center mb-12">
           <svg class="w-12 h-12 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>

        <div>
            <h3 class="font-bold text-lg mb-4">Your agency <span class="underline decoration-white underline-offset-4">with</span> Orchestra</h3>
            <ul class="space-y-4">
                <li class="flex items-center gap-3 text-slate-300 text-sm"><span class="text-white">✓</span> Automated and clear client onboarding</li>
                <li class="flex items-center gap-3 text-slate-300 text-sm"><span class="text-white">✓</span> Stand out from competitors (with your branding)</li>
                <li class="flex items-center gap-3 text-slate-300 text-sm"><span class="text-white">✓</span> Use a tool crafted for agencies needs</li>
                <li class="flex items-center gap-3 text-slate-300 text-sm"><span class="text-white">✓</span> Value communicated automatically and clearly to clients</li>
                <li class="flex items-center gap-3 text-slate-300 text-sm"><span class="text-white">✓</span> Work with your team and customers in one place</li>
                <li class="flex items-center gap-3 text-slate-300 text-sm"><span class="text-white">✓</span> Easy to scale with a system that works for you</li>
            </ul>
        </div>
    </section>

    <!-- MOBILE NEW SECTION: Process / Chaos to Simplicity -->
    <section class="md:hidden py-16 px-6 bg-slate-950">
        <div class="text-xs text-slate-500 mb-4">How Orchestra works?</div>
        <h2 class="text-4xl font-bold leading-tight mb-8">Your agency from chaos to simplicity.</h2>
        
        <div class="mb-12">
            <p class="text-slate-400 text-sm mb-4">"Before Orchestra, I juggled multiple tools for my agency billing, tasks, and communication. Now, everything's in <span class="text-white font-bold">one seamless platform</span>, letting me focus on growth and clients instead of managing systems."</p>
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-slate-800 overflow-hidden"><img src="https://picsum.photos/32/32?random=3" alt="Derek" class="w-full h-full object-cover"></div>
                <div class="text-xs">
                    <div class="font-bold text-white">Derek</div>
                    <div class="text-slate-500">Founder of Meridian Design</div>
                </div>
            </div>
        </div>

        <div class="space-y-12">
            <div>
                <h3 class="font-bold text-white mb-2">1. Quick setup</h3>
                <p class="text-slate-400 text-sm">Connect your Stripe account, add your logo, domain name and colors and pricing strategy - <span class="text-white">no further setup required.</span></p>
            </div>
            <div>
                <h3 class="font-bold text-white mb-2">2. Onboard customers</h3>
                <p class="text-slate-400 text-sm">Manually onboard customers to your portal <span class="text-white">inviting them or automatically</span> onboard them when they pay for your services.</p>
            </div>
             <div>
                <h3 class="font-bold text-white mb-2">3. Get to work</h3>
                <p class="text-slate-400 text-sm">Work with your customers and team members <span class="text-white">in one place</span> with a simple, fast and private user experience.</p>
            </div>
            <div>
                <h3 class="font-bold text-white mb-2">4. Grow</h3>
                <p class="text-slate-400 text-sm">Simplify and automate your workflow to make your team's daily life easier, <span class="text-white">handle more customers</span>, and grow your agency's revenue.</p>
            </div>
        </div>
    </section>
    
    <!-- MOBILE QUOTE 1 -->
    <section class="md:hidden py-16 px-6 text-center">
       <blockquote class="text-xl text-slate-400 leading-relaxed font-normal">
             "It's quickly becoming insane to even consider using any other software if you're a productized agency. No one else is doing it like Orchestra."
        </blockquote>
        <div class="mt-4 text-slate-500 font-medium">- Lucas</div>
    </section>

    <app-features></app-features>
    
    <!-- Small Features Grid 1 (Now Visible on Mobile too) -->
    <section class="py-12 px-6 max-w-7xl mx-auto border-t border-white/5">
       <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
             <div class="flex items-center gap-2 mb-2 text-white font-medium">
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                Simple and clean UI
             </div>
             <p class="text-xs text-slate-500 leading-relaxed">A client portal so fast and simple to use, your clients will love it.</p>
          </div>
          <div>
             <div class="flex items-center gap-2 mb-2 text-white font-medium">
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Collaboration
             </div>
             <p class="text-xs text-slate-500 leading-relaxed">Allow or not your clients to invite their teams to collaborate with yours.</p>
          </div>
          <div>
             <div class="flex items-center gap-2 mb-2 text-white font-medium">
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                Customizable workflow
             </div>
             <p class="text-xs text-slate-500 leading-relaxed">Customize everything, like the columns name, icon or task limit allowance.</p>
          </div>
          <div>
             <div class="flex items-center gap-2 mb-2 text-white font-medium">
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                Notifications
             </div>
             <p class="text-xs text-slate-500 leading-relaxed">Keep your clients in the loop via email, in-app or Slack notifications.</p>
          </div>
       </div>
    </section>

    <!-- Quote 2 Desktop -->
    <section class="hidden md:block py-24 text-center px-6">
       <div class="max-w-4xl mx-auto">
          <blockquote class="text-3xl text-slate-400 leading-relaxed font-normal">
             "From seamless payments to efficient task management, it's been a game-changer."
          </blockquote>
          <div class="mt-6 text-slate-500 font-medium">- Keegan</div>
       </div>
    </section>

    <app-task-management></app-task-management>
    
    <!-- Mobile Quote 2 -->
    <section class="md:hidden py-16 px-6 text-center">
        <blockquote class="text-2xl text-slate-400 leading-relaxed font-normal">
             "From seamless payments to efficient task management, it's been a game-changer."
        </blockquote>
        <div class="mt-4 text-slate-500 font-medium">- Keegan</div>
    </section>

    <!-- Small Features Grid 2 (Now Visible on Mobile) -->
     <section class="py-12 px-6 max-w-7xl mx-auto border-t border-white/5">
       <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
             <div class="flex items-center gap-2 mb-2 text-white font-medium">
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                Sub-tasks
             </div>
             <p class="text-xs text-slate-500 leading-relaxed">Stay organized by grouping what needs to be done together.</p>
          </div>
          <div>
             <div class="flex items-center gap-2 mb-2 text-white font-medium">
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Private task and properties
             </div>
             <p class="text-xs text-slate-500 leading-relaxed">Hide some tasks and properties from your clients, work in privacy.</p>
          </div>
          <div>
             <div class="flex items-center gap-2 mb-2 text-white font-medium">
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                Share large files
             </div>
             <p class="text-xs text-slate-500 leading-relaxed">Attach any type of files to tasks, comments or private notes.</p>
          </div>
          <div>
             <div class="flex items-center gap-2 mb-2 text-white font-medium">
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Get notified
             </div>
             <p class="text-xs text-slate-500 leading-relaxed">Subscribe to a task's notifications and never miss anything.</p>
          </div>
       </div>
    </section>

    <app-analytics></app-analytics>
    
    <!-- Small Features Grid 3 (Now Visible on Mobile) -->
     <section class="py-12 px-6 max-w-7xl mx-auto border-t border-white/5 mb-16 md:mb-20">
       <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
             <div class="flex items-center gap-2 mb-2 text-white font-medium">
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Real-time alerts
             </div>
             <p class="text-xs text-slate-500 leading-relaxed">Receive emails when a client pays, subscribes, pauses or resumes their subscription</p>
          </div>
          <div>
             <div class="flex items-center gap-2 mb-2 text-white font-medium">
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                Real-time updates
             </div>
             <p class="text-xs text-slate-500 leading-relaxed">Get real-time insights and know exactly where you're at as the story unfolds</p>
          </div>
          <div>
             <div class="flex items-center gap-2 mb-2 text-white font-medium">
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Payments schedule
             </div>
             <p class="text-xs text-slate-500 leading-relaxed">Know exactly when subscription payments are expected to hit your bank account.</p>
          </div>
          <div>
             <div class="flex items-center gap-2 mb-2 text-white font-medium">
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                Key team metrics
             </div>
             <p class="text-xs text-slate-500 leading-relaxed">Know how your agency and your team perform to provide a better service</p>
          </div>
       </div>
    </section>

    <!-- MOBILE NEW SECTION: We succeed if you do -->
    <section class="md:hidden py-16 px-6 bg-[#050505]">
        <h2 class="text-4xl font-bold mb-8">We succeed if you do.</h2>
        <ul class="space-y-4 mb-8">
            <li class="flex items-start gap-3 text-sm text-slate-300"><span class="text-white mt-1">✓</span> Direct access to fast support, every step of the way</li>
            <li class="flex items-start gap-3 text-sm text-slate-300"><span class="text-white mt-1">✓</span> Personalized 1-1 onboarding by our founder</li>
            <li class="flex items-start gap-3 text-sm text-slate-300"><span class="text-white mt-1">✓</span> No hidden fees, no upsells, no BS</li>
            <li class="flex items-start gap-3 text-sm text-slate-300"><span class="text-white mt-1">✓</span> Dedicated support when you need it</li>
        </ul>
        <div class="flex gap-4 mb-16">
            <button class="bg-white text-slate-950 font-bold px-6 py-3 rounded-full text-sm">Get started now</button>
            <button class="bg-[#111] text-white border border-white/10 font-bold px-6 py-3 rounded-full text-sm flex items-center gap-2">Book a demo -></button>
        </div>

        <!-- Mobile Testimonials Grid -->
        <div class="grid grid-cols-1 gap-4">
             <div class="bg-slate-900 border border-white/5 p-4 rounded-xl flex items-start gap-3">
                 <div class="w-10 h-10 rounded-full bg-slate-700 overflow-hidden shrink-0"><img src="https://picsum.photos/40/40?random=4" class="object-cover w-full h-full"></div>
                 <div>
                     <p class="text-xs text-slate-300 leading-relaxed mb-2">"Game changer! Orchestra simplifies the processes of managing your productized service or agency - it essentially integrates multiple long processes and steps into one platform. It took me less than 5 minutes to set up my backend which I can now use to scale and organise my projects/clients."</p>
                     <div class="text-xs font-bold text-white">santhiaroo</div>
                     <div class="text-[10px] text-slate-500">@santhiaroo</div>
                 </div>
             </div>
             <div class="bg-slate-900 border border-white/5 p-4 rounded-xl flex items-start gap-3">
                 <div class="w-10 h-10 rounded-full bg-slate-700 overflow-hidden shrink-0"><img src="https://picsum.photos/40/40?random=11" class="object-cover w-full h-full"></div>
                 <div>
                     <p class="text-xs text-slate-300 leading-relaxed mb-2">"Great tool! Tried out it, and wow, the client portal is incredibly user-friendly! The simplicity combined with its power and flexibility makes it the perfect solution for onboarding clients. Awesome job!"</p>
                     <div class="text-xs font-bold text-white">Swati Parida</div>
                     <div class="text-[10px] text-slate-500">@swati_parida</div>
                 </div>
             </div>
             <div class="bg-slate-900 border border-white/5 p-4 rounded-xl flex items-start gap-3">
                 <div class="w-10 h-10 rounded-full bg-slate-700 overflow-hidden shrink-0"><img src="https://picsum.photos/40/40?random=12" class="object-cover w-full h-full"></div>
                 <div>
                     <div class="text-xs font-bold text-white">David Kirmacia</div>
                     <div class="text-[10px] text-slate-500">@dkmacia</div>
                 </div>
             </div>
             <div class="bg-slate-900 border border-white/5 p-4 rounded-xl flex items-start gap-3">
                 <div class="w-10 h-10 rounded-full bg-slate-700 overflow-hidden shrink-0"><img src="https://picsum.photos/40/40?random=14" class="object-cover w-full h-full"></div>
                 <div>
                     <p class="text-xs text-slate-300 leading-relaxed mb-2">"This tool really kills the competition and saves you a lot of time. There's no need to use 5 different tools to manage your agency when you have Orchestra."</p>
                     <div class="text-xs font-bold text-white">Oscar Olsen</div>
                     <div class="text-[10px] text-slate-500">UI Designer</div>
                 </div>
             </div>
             <div class="bg-slate-900 border border-white/5 p-4 rounded-xl flex items-start gap-3">
                 <div class="w-10 h-10 rounded-full bg-slate-700 overflow-hidden shrink-0"><img src="https://picsum.photos/40/40?random=15" class="object-cover w-full h-full"></div>
                 <div>
                     <p class="text-xs text-slate-300 leading-relaxed mb-2">"I've given Orchestra a try and gosh, what an easy to use client portal I love how minimal, yet powerful and flexible this is as a portal to onboard clients."</p>
                     <div class="text-xs font-bold text-white">Lionel Selie</div>
                     <div class="text-[10px] text-slate-500">@leo_at_zapier</div>
                 </div>
             </div>
             <div class="bg-slate-900 border border-white/5 p-4 rounded-xl flex items-start gap-3">
                 <div class="w-10 h-10 rounded-full bg-slate-700 overflow-hidden shrink-0"><img src="https://picsum.photos/40/40?random=16" class="object-cover w-full h-full"></div>
                 <div>
                     <p class="text-xs text-slate-300 leading-relaxed mb-2">"I wanted to open productized studio but I wasn't sure how to take care of the workflow. I found Orchestra thanks to X, the founder and I follow each other so I gave it a shot. One of the best decisions ever."</p>
                 </div>
             </div>
        </div>
    </section>

    <!-- MOBILE NEW SECTION: Blogs -->
    <section class="md:hidden py-16 px-6">
        <h2 class="text-3xl font-bold mb-4">You might be interested by</h2>
        <p class="text-slate-400 text-sm mb-8">We've written a few articles about how to run your agency better.</p>
        
        <div class="space-y-6">
            <div class="bg-slate-900 rounded-xl overflow-hidden">
                <div class="h-40 bg-slate-800 relative">
                     <img src="https://picsum.photos/400/200?random=5" class="w-full h-full object-cover opacity-80">
                     <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>
                <div class="p-6">
                    <h3 class="font-bold text-white mb-2 text-lg">5 clients pay him €6800 a month for his productized service</h3>
                    <p class="text-xs text-slate-400 leading-relaxed">How Philip, founder of BTNG Studio, transitioned from traditional web design to a...</p>
                </div>
            </div>
             <div class="bg-slate-900 rounded-xl overflow-hidden">
                <div class="h-40 bg-slate-800 relative">
                     <img src="https://picsum.photos/400/200?random=6" class="w-full h-full object-cover opacity-80">
                </div>
                <div class="p-6">
                    <h3 class="font-bold text-white mb-2 text-lg">He Made $1M+ in One Year with a Productized Service</h3>
                    <p class="text-xs text-slate-400 leading-relaxed">How Chris, founder of Halaska Studio, built a $1M+ Productized Design Studio in One Year.</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- MOBILE NEW SECTION: Productized Services & Secret Sauce (Added Text Sections) -->
    <section class="md:hidden py-16 px-6 bg-[#050505]">
        <div class="mb-12">
            <h2 class="text-2xl font-bold mb-3">What are productized services?</h2>
            <p class="text-slate-400 text-sm leading-relaxed">What are Productized services and how to easily start one.</p>
        </div>
        <div>
            <h2 class="text-2xl font-bold mb-3">The secret sauce to sell your productized service</h2>
            <p class="text-slate-400 text-sm leading-relaxed">The secret sauce popular productized services use to generate crazy MRR</p>
        </div>
    </section>

    <!-- MOBILE NEW SECTION: Quick Demo -->
    <section class="md:hidden py-16 px-6 bg-slate-950 text-center">
        <h2 class="text-3xl font-bold mb-4">Or you might want a quick demo?</h2>
        <p class="text-slate-400 text-sm mb-8">Not sure how to best grow your agency with Orchestra? Book a free demo to learn more, we are here to help you take the first step towards your productized service journey.</p>
        
        <div class="flex items-center justify-center gap-3 mb-6">
               <div class="flex -space-x-2">
                  <div class="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900"></div>
                  <div class="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-900"></div>
                  <div class="w-8 h-8 rounded-full bg-slate-500 border-2 border-slate-900"></div>
                  <div class="w-8 h-8 rounded-full bg-slate-400 border-2 border-slate-900"></div>
               </div>
               <div class="text-xs text-slate-400 font-medium">
                  <span class="text-yellow-400">★★★★★</span> powers 700+ agencies
               </div>
        </div>
        
        <button class="bg-white text-slate-950 px-6 py-3 rounded-full font-bold text-sm w-full mb-16 flex items-center justify-center gap-2">
            Book a free demo call <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
        
        <div class="flex items-center gap-3 text-left mb-4">
            <div class="w-10 h-10 rounded-full bg-slate-700 overflow-hidden"><img src="https://picsum.photos/40/40?random=7" class="w-full h-full object-cover"></div>
            <div>
                <div class="text-sm font-bold text-white">Founder memo</div>
                <div class="text-xs text-slate-400">Anthony Riera</div>
            </div>
        </div>
        <div class="text-left text-sm text-slate-400 leading-relaxed bg-slate-900 p-6 rounded-xl border border-white/5">
            <p class="mb-4">Digital agencies DESERVE better tools. For too long, agency owners have struggled to stitch together clunky software, having scattered solutions that create more confusion than clarity.</p>
            <p class="mb-4">It's been a balancing act—juggling operations, customer communication, and growth—all with tools that weren't designed for their unique needs.</p>
            <p class="mb-4">That's why we built Orchestra. Orchestra is made specifically for digital agencies. Every feature is designed with intention, detail, and care, helping agencies:</p>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li>Simplify operations so they can focus on delivering amazing work</li>
                <li>Offer incredible experiences to their customers</li>
                <li>Grow with confidence by providing the tools needed to scale agencies</li>
            </ul>
            <p>No fluff. No generic solutions. Just a tool designed to help agencies not just survive, but thrive.</p>
            
            <div class="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
                 <div class="w-8 h-8 rounded-full bg-slate-700 overflow-hidden"><img src="https://picsum.photos/40/40?random=7" class="w-full h-full object-cover"></div>
                <div>
                    <div class="text-xs font-bold text-white">Anthony Riera</div>
                    <div class="text-[10px] text-slate-500">Founder of Orchestra</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Bottom CTA (DESKTOP ONLY) -->
    <section class="hidden md:block py-20 px-6 max-w-5xl mx-auto mb-20">
      <div class="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col items-start gap-8">
         <div class="relative z-10 max-w-xl">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">Discover how Orchestra can help <br/> with your productized service</h2>
             <p class="text-slate-400 text-sm md:text-base leading-relaxed">Not sure how to best grow your agency with Orchestra? Book a free demo to learn more, we are here to help you take the first step towards your productized service journey.</p>
             <div class="flex items-center gap-3 mt-8">
               <div class="flex -space-x-2">
                  <div class="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900"></div>
                  <div class="w-8 h-8 rounded-full bg-slate-600 border-2 border-slate-900"></div>
                  <div class="w-8 h-8 rounded-full bg-slate-500 border-2 border-slate-900"></div>
                  <div class="w-8 h-8 rounded-full bg-slate-400 border-2 border-slate-900"></div>
               </div>
               <div class="text-xs text-slate-400 font-medium">
                  <span class="text-yellow-400">★★★★★</span> powers 500+ productized services
               </div>
            </div>
         </div>
         <div class="relative z-10 w-full md:w-auto">
             <button class="w-full md:w-auto bg-white text-slate-950 font-bold px-6 py-3 rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                Book a free demo call
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </button>
         </div>
      </div>
    </section>
  `
})
export class HomeComponent {}

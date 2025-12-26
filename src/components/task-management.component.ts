
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-task-management',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section class="py-16 md:py-24 relative bg-slate-950">
      <div class="max-w-7xl mx-auto px-6">
        
        <!-- Desktop Header -->
        <div class="hidden md:block text-center mb-16">
          <h2 appScrollReveal class="text-3xl md:text-5xl font-bold text-white mb-4">Task management <br/> optimised for agencies.</h2>
          <p appScrollReveal [delay]="200" class="text-slate-400 max-w-2xl mx-auto">Orchestra is the only task management platform crafted with productized services and agencies in mind.</p>
        </div>

        <!-- Mobile Header & Content -->
        <div class="md:hidden mb-12">
           <h2 appScrollReveal class="text-4xl font-bold text-white mb-6 leading-tight">Working with clients <br> can get messy. <br> Not with Orchestra.</h2>
           
           <div class="space-y-12">
              <div appScrollReveal [delay]="100">
                  <div class="flex items-center gap-3 mb-3">
                     <span class="flex items-center justify-center w-6 h-6 rounded-full border border-slate-700 text-xs text-slate-400 font-mono">1</span>
                     <h3 class="text-white font-bold text-lg">A space designed for agencies and their teams</h3>
                  </div>
                  <p class="text-slate-400 text-sm pl-9 leading-relaxed">Offer each customer a dedicated client portal while managing all clients, team members, and collaborators in one place. No more switching apps or tabs—boost your agency's efficiency instantly.</p>
              </div>

              <div appScrollReveal [delay]="200">
                  <div class="flex items-center gap-3 mb-3">
                     <span class="flex items-center justify-center w-6 h-6 rounded-full border border-slate-700 text-xs text-slate-400 font-mono">2</span>
                     <h3 class="text-white font-bold text-lg">Stay organized and work with tasks</h3>
                  </div>
                  <p class="text-slate-400 text-sm pl-9 mb-6 leading-relaxed">Stay organized and efficient when working with customers by creating tasks and sub-tasks.</p>
                  <div class="pl-9">
                      <button class="bg-white/5 border border-white/10 text-white px-5 py-3 rounded-lg text-xs font-bold hover:bg-white/10 transition-colors">Learn about stay organized and work with tasks</button>
                  </div>
              </div>

              <div appScrollReveal [delay]="300">
                  <div class="flex items-center gap-3 mb-3">
                     <span class="flex items-center justify-center w-6 h-6 rounded-full border border-slate-700 text-xs text-slate-400 font-mono">3</span>
                     <h3 class="text-white font-bold text-lg">Share knowledge with documents</h3>
                  </div>
                  <p class="text-slate-400 text-sm pl-9 leading-relaxed">Sometimes you need to share documents with your customers. With Orchestra, you can easily share notion-like documents.</p>
              </div>
           </div>
        </div>

        <!-- Desktop Grid -->
        <div class="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6">
           
           <!-- Card 1: Workspace -->
           <div appScrollReveal [delay]="100" class="bg-slate-900 border border-white/5 rounded-3xl p-8 flex flex-col min-h-[400px]">
              <div class="flex-1 relative mb-6 rounded-xl bg-slate-950 border border-white/5 overflow-hidden p-4">
                 <div class="flex items-center gap-2 mb-4 text-xs text-slate-400">
                    <div class="w-2 h-2 rounded-full border border-slate-500"></div>
                    Backlog
                 </div>
                 <div class="bg-slate-850 p-3 rounded-lg border border-white/5 mb-3 flex items-start justify-between">
                    <div>
                      <div class="text-sm text-white font-medium mb-1">New design request</div>
                    </div>
                    <div class="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center text-[8px] text-orange-400">JL</div>
                 </div>
                 <div class="bg-slate-850 p-3 rounded-lg border border-white/5 mb-3 flex items-start justify-between">
                    <div>
                      <div class="text-sm text-white font-medium mb-1">Create a Default Asset Sharing Folders added to Project Template</div>
                    </div>
                    <div class="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[8px] text-slate-400">AM</div>
                 </div>
                 <div class="bg-slate-850 p-3 rounded-lg border border-white/5 flex items-start justify-between">
                    <div>
                      <div class="text-sm text-white font-medium mb-1">Add descriptions to database properties</div>
                      <div class="flex gap-2 text-[10px] text-slate-500 mt-2">
                         <span class="flex items-center gap-1"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg> 3</span>
                         <span class="flex items-center gap-1"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg> 1</span>
                      </div>
                    </div>
                 </div>
              </div>
              <h3 class="text-white font-bold text-lg mb-2">Simple & Organized workspace</h3>
              <p class="text-slate-400 text-sm">Intuitive kanban and list view giving you a space to focus on what needs to be done without noise.</p>
           </div>

           <!-- Card 2: Task Description -->
           <div appScrollReveal [delay]="200" class="bg-slate-900 border border-white/5 rounded-3xl p-8 flex flex-col min-h-[400px]">
              <div class="flex-1 relative mb-6 rounded-xl bg-slate-950 border border-white/5 overflow-hidden p-6 font-mono text-sm">
                 <div class="text-white mb-4">New design request</div>
                 <div class="text-slate-500 mb-4">Design a new logo for our company's rebranding</div>
                 <div class="text-slate-500 mb-4">Here's some guidelines:</div>
                 <div class="space-y-2 mb-4">
                    <div class="w-full h-2 bg-slate-800 rounded"></div>
                    <div class="w-2/3 h-2 bg-slate-800 rounded"></div>
                    <div class="w-3/4 h-2 bg-slate-800 rounded"></div>
                 </div>
                 <div class="relative w-max">
                    <div class="w-32 h-20 rounded bg-slate-800 border border-slate-700"></div>
                    <div class="absolute -top-2 -right-2 bg-orange-500 text-[10px] text-white px-1.5 rounded">JPEG</div>
                 </div>
                 <div class="mt-8 text-slate-600">Type '/' for commands or just start typing a description</div>
              </div>
              <h3 class="text-white font-bold text-lg mb-2">Powerful task description</h3>
              <p class="text-slate-400 text-sm">Collaborate in real-time for a communication between team members and clients like never before.</p>
           </div>

           <!-- Card 3: Custom Properties -->
           <div appScrollReveal [delay]="300" class="bg-slate-900 border border-white/5 rounded-3xl p-8 flex flex-col min-h-[350px]">
              <div class="flex-1 relative mb-6 rounded-xl bg-slate-950 border border-white/5 overflow-hidden p-6">
                 <div class="space-y-4">
                    <div class="flex items-center justify-between text-xs">
                       <div class="flex items-center gap-2 text-slate-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Status</div>
                       <div class="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          <div class="w-1.5 h-1.5 rounded-full border border-slate-400"></div> Backlog
                       </div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                       <div class="flex items-center gap-2 text-slate-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> Assignee</div>
                       <div class="flex items-center gap-1.5">
                          <div class="w-4 h-4 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[8px]">JL</div>
                          <span class="text-slate-300">Assigned to you</span>
                       </div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                       <div class="flex items-center gap-2 text-slate-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> Due date</div>
                       <div class="text-slate-300">September 8th, 2024</div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                       <div class="flex items-center gap-2 text-slate-400">Estimate</div>
                       <div class="bg-emerald-500/10 text-emerald-400 px-1.5 rounded border border-emerald-500/20 text-[10px]">Low</div>
                    </div>
                 </div>
                 <div class="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-500">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> Add property
                 </div>
              </div>
              <h3 class="text-white font-bold text-lg mb-2">Custom task properties</h3>
              <p class="text-slate-400 text-sm">Create and manage custom properties that perfectly align with your team's unique workflow and client needs.</p>
           </div>

           <!-- Card 4: Comments -->
           <div appScrollReveal [delay]="400" class="bg-slate-900 border border-white/5 rounded-3xl p-8 flex flex-col min-h-[350px]">
              <div class="flex-1 relative mb-6 rounded-xl bg-slate-950 border border-white/5 overflow-hidden p-6 flex flex-col justify-end">
                 <div class="space-y-4">
                    <div class="flex gap-3">
                       <div class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">C</div>
                       <div>
                          <div class="flex items-center gap-2 mb-1">
                             <span class="text-xs font-bold text-white">Client</span>
                             <span class="text-[10px] text-slate-500">Just now</span>
                          </div>
                          <div class="text-xs text-slate-300 bg-slate-850 p-2 rounded-tr-lg rounded-br-lg rounded-bl-lg">
                             Hey <span class="text-indigo-400">@Anthony</span> any update on the new design request?
                          </div>
                       </div>
                    </div>

                    <div class="flex gap-3">
                       <div class="w-6 h-6 rounded-full bg-slate-600 text-white flex items-center justify-center text-xs font-bold">
                          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                       </div>
                       <div class="flex-1 relative">
                          <div class="w-full bg-slate-850 rounded-lg border border-white/10 p-2 text-xs text-slate-500">
                             Leave a comment...
                          </div>
                          <button class="absolute right-1 bottom-1 bg-white/10 text-white text-[10px] px-1.5 py-0.5 rounded hover:bg-white/20">Send</button>
                       </div>
                    </div>
                 </div>
              </div>
              <h3 class="text-white font-bold text-lg mb-2">Comments and private notes</h3>
              <p class="text-slate-400 text-sm">Collaborate in real-time for a communication keeping internal discussions private through team-only notes.</p>
           </div>

        </div>

      </div>
    </section>
  `
})
export class TaskManagementComponent {}

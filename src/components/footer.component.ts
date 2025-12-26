
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="border-t border-white/5 py-12 bg-slate-950 text-sm">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center gap-2 mb-4 text-white font-bold">
            <div class="w-6 h-6 rounded bg-gradient-to-br from-white to-slate-400 flex items-center justify-center text-slate-950">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
            </div>
            Orchestra
          </div>
          <p class="text-slate-500 mb-4">
            The all-in-one toolkit for productized services.
          </p>
          <div class="flex gap-4">
            <a href="#" class="text-slate-500 hover:text-white transition-colors"><span class="sr-only">Twitter</span><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a>
            <a href="#" class="text-slate-500 hover:text-white transition-colors"><span class="sr-only">GitHub</span><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.597 1.028 2.688 0 3.848-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"></path></svg></a>
          </div>
        </div>

        <div>
          <h4 class="font-bold text-white mb-4">Product</h4>
          <ul class="space-y-2 text-slate-500">
            <li><a routerLink="/features" class="hover:text-white transition-colors">Features</a></li>
            <li><a routerLink="/pricing" class="hover:text-white transition-colors">Pricing</a></li>
            <li><a routerLink="/blog" class="hover:text-white transition-colors">Updates</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-white mb-4">Resources</h4>
          <ul class="space-y-2 text-slate-500">
            <li><a routerLink="/help" class="hover:text-white transition-colors">Documentation</a></li>
            <li><a routerLink="/help" class="hover:text-white transition-colors">Guides</a></li>
            <li><a routerLink="/help" class="hover:text-white transition-colors">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-white mb-4">Legal</h4>
          <ul class="space-y-2 text-slate-500">
            <li><a routerLink="/help" class="hover:text-white transition-colors">Privacy</a></li>
            <li><a routerLink="/help" class="hover:text-white transition-colors">Terms</a></li>
          </ul>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {}


import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './src/app.component';
import { HomeComponent } from './src/pages/home.component';
import { FeaturesPageComponent } from './src/pages/features.component';
import { PricingPageComponent } from './src/pages/pricing.component';
import { BlogPageComponent } from './src/pages/blog.component';
import { HelpCenterComponent } from './src/pages/help-center.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'pricing', component: PricingPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'help', component: HelpCenterComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation())
  ]
}).catch((err) => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.

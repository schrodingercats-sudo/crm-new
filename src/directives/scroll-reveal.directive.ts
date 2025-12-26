
import { Directive, ElementRef, OnInit, inject, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  @Input() delay = 0;
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit() {
    const el = this.el.nativeElement;
    
    // Initial state: Hidden, Blurred, Moved down
    this.renderer.addClass(el, 'opacity-0');
    this.renderer.addClass(el, 'blur-md'); 
    this.renderer.addClass(el, 'translate-y-8');
    
    // Transition setup
    this.renderer.addClass(el, 'transition-all');
    this.renderer.addClass(el, 'duration-1000');
    this.renderer.addClass(el, 'ease-out');
    // Ensure the element has hardware acceleration for smoother blur
    this.renderer.addClass(el, 'will-change-[opacity,transform,filter]');
    
    if (this.delay) {
       this.renderer.setStyle(el, 'transition-delay', `${this.delay}ms`);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Reveal state: Visible, Sharp, In place
          this.renderer.removeClass(el, 'opacity-0');
          this.renderer.removeClass(el, 'blur-md');
          this.renderer.removeClass(el, 'translate-y-8');
          
          observer.unobserve(el);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' 
    });

    observer.observe(el);
  }
}

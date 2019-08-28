import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'black';
  @Input() highlightColor = 'green';

  @HostBinding('style.color') color = this.defaultColor;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'red');
    this.color = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    // this.color = 'green';
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
    // this.color = 'black';
    this.color = this.defaultColor;
  }
}

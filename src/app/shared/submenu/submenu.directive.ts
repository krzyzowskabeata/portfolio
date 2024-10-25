import { ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Directive, ElementRef, HostListener, inject, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { SubmenuComponent } from './submenu.component';

@Directive({
  selector: '[pfSubmenu]',
  standalone: true
})
export class SubmenuDirective implements OnInit, OnDestroy {

  @Input() submenuTemplate?: TemplateRef<any>;
  @Input() disabled = false;
  @Input() positions: ConnectedPosition[] = [{ originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: 5 }];

  private overlayRef?: OverlayRef;

  private overlay = inject(Overlay);
  private overlayPositionBuilder = inject(OverlayPositionBuilder);
  private elementRef = inject(ElementRef);

  @HostListener('click', ['$event'])
  showSubmenuTemplate(event: MouseEvent): void {
    event.stopPropagation();
    
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      const submenuRef: ComponentRef<SubmenuComponent> = this.overlayRef.attach(new ComponentPortal(SubmenuComponent));
      submenuRef.instance.submenuTemplate = this.submenuTemplate;
    }
  }

  @HostListener('document:click')
  hideSubmenuTemplate(): void {
    this.closeSubmenu();
  }

  ngOnInit(): void {
    if (this.disabled) return;

    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(this.positions);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  closeSubmenu(): void {
    if (this.overlayRef) this.overlayRef.detach();
  }

  ngOnDestroy(): void {
    this.closeSubmenu();
  }

}

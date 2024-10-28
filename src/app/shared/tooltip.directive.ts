import { ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Directive, ElementRef, HostListener, inject, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ContainerComponent } from './container/container.component';

@Directive({
  selector: '[pfTooltip]',
  standalone: true
})
export class TooltipDirective implements OnInit, OnDestroy {

  @Input() tooltipTemplate?: TemplateRef<any>;
  @Input() showTooltip = true;
  @Input() positions: ConnectedPosition[] = [{ originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: 5 }];

  private overlayRef?: OverlayRef;

  private overlay = inject(Overlay);
  private overlayPositionBuilder = inject(OverlayPositionBuilder);
  private elementRef = inject(ElementRef);

  @HostListener('mouseenter')
  showTooltipTemplate(): void {
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      const tooltipRef: ComponentRef<ContainerComponent> = this.overlayRef.attach(new ComponentPortal(ContainerComponent));
      tooltipRef.instance.template = this.tooltipTemplate;
    }
  }

  @HostListener('mouseleave')
  hideTooltipTemplate(): void {
    this.closeTooltip();
  }

  ngOnInit(): void {
    if (!this.showTooltip) return;

    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(this.positions);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  closeTooltip(): void {
    if (this.overlayRef) this.overlayRef.detach();
  }

  ngOnDestroy(): void {
    this.closeTooltip();
  }
}

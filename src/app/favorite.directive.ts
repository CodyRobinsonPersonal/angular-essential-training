import { Directive, Host, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[mwFavorite]'
})
export class FavoriteDirective {
    // If isFavorite is true then is-favorite css class is added 
    @HostBinding('class.is-favorite') isFavorite = true;
    @HostBinding('class.is-favorite-hovering') hovering = false;
    @HostListener('mouseenter') onMouseEnter(){
        this.hovering = true
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.hovering = false;
    }
    @Input() set mwFavorite(value) {
        this.isFavorite = value;
    }
}
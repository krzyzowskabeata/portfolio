import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { Language } from './language';

@Component({
  selector: 'pf-toggle-language',
  standalone: true,
  imports: [NgFor, MatButtonToggleModule],
  templateUrl: './toggle-language.component.html',
  styleUrl: './toggle-language.component.scss'
})
export class ToggleLanguageComponent {

  private router = inject(Router);

  languages: Language[] = [
    { label: 'EN', code: 'en-US', isSelected: true },
    { label: 'PL', code: 'pl', isSelected: false }
  ];

  selectedLanguageCode = this.languages.find(lang => lang.isSelected)?.code;

  onChange({ value: languageCode }: { value: string }): void {
    // ToDo Not available on development mode </3
    this.router.navigate([`/${languageCode}/`]);
  }

}

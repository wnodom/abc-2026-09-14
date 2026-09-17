import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, JsonPipe, AsyncPipe],
  selector: 'ns-stat-filters',
  styleUrl: './stat-filters.scss',
  templateUrl: './stat-filters.html',
})
export class StatFilters {
  protected readonly fg = inject(FormBuilder).group({
    partialVideoTitle: [''],
  });

  showChanges(whatever: unknown) {
    console.log(whatever);
  }
}

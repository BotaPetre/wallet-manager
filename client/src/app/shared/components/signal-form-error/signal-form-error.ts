import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'signal-form-error',
  styles: ``,
  template: `
    @if (formState().touched() && formState().invalid()) {
      <div class="ant-form-item-explain ant-form-item-explain-connected">
        @for (error of formState().errors(); track error.message) {
          <div class="ant-form-item-explain-error">{{ error.message }}</div>
        }
      </div>
    }
  `,
  encapsulation: ViewEncapsulation.None // Make sure theme error styling applies
})

export class SignalFormError {
  // Received data
  field = input.required<FieldTree<string | number | Date>>();

  // Un-wrap the double signal
  formState = computed(() => this.field()());
}
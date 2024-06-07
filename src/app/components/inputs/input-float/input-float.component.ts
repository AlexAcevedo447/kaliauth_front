import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Input,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
  ],
  templateUrl: './input-float.component.html',
  styleUrl: './input-float.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFloatComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputFloatComponent),
      multi: true,
    },
  ],
})
export class InputFloatComponent
  implements ControlValueAccessor, Validator, AfterViewInit
{
  @Input() label: string = 'KaliDefault';
  @Input() id: string = '';
  @Input() for: string = '';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() control!: AbstractControl | null;
  @ViewChild('inputElement', { static: false }) inputElement!: ElementRef;

  ngAfterViewInit(): void {
    this.updateValue();
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    if (this.inputElement) {
      this.inputElement.nativeElement.value = value;
    }
    if (this.control) {
      this.control.setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.control?.disable() : this.control?.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    this.control = control as FormControl;
    return null;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.onChange(input.value);
    this.control?.setValue(input.value);
  }

  /**
   * Takes data from native element and updates angular input
   */
  updateValue(): void {
    const value = this.inputElement?.nativeElement?.value;
    this.control?.setValue(value);
    this.onChange(value);
  }
}

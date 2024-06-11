import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormControlStatus,
} from '@angular/forms';
import { Modal } from 'bootstrap';
import { Observable, map } from 'rxjs';
import { FacadeService } from '../../services/facade/facade.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements AfterViewInit, OnInit {

  constructor(private readonly demoService: FacadeService) {}

  @ViewChild('demoModal') demoModalRef!: ElementRef;
  demoModal!: Modal;

  numberForm = new FormGroup({
    value: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
  });;

  formError$!: Observable<boolean>;

  apiMsg$ = this.demoService.message$;

  error$ = this.demoService.errorMsg$;

  loading$ = this.demoService.loading$;

  ngOnInit(): void {
    this.apiMsg$.subscribe((msg) =>console.log("msg is", msg))
    this.formError$ = this.numberForm.statusChanges.pipe(
      map((status) => status !== 'VALID'),
    );
  }

  ngAfterViewInit(): void {
    this.demoModal = new Modal(this.demoModalRef.nativeElement);
  }

  openModal() {
    this.demoModal!.toggle();
  }

  closeModal() {
    this.demoModal!.hide();
    // resetting modal state
    //this.numberForm.setValue({value: null});
    this.demoService.flushMsg();
  }
  submit() {
    if (this.numberForm.valid) {
      const formValue = this.numberForm.value;
      const number = formValue.value
      this.demoService.checkNumber(number!);
    }
  }
}

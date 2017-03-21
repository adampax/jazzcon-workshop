import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  styles: [`
    input:not(.ng-invalid), input.ng-valid {
      border: 2px solid #42A948; /* green */
    }

    input.ng-invalid {
      border: 2px solid #a94442; /* red */
    }

    .alert {
      color: #a94442; /* red */
    }
  `],
  template: `
    <h1>Contact</h1>
    <form #f="ngForm" (ngSubmit)="onSubmit(f.form.value)">
      <p>
        <label for="email">Email:</label>
        <input
            class="form-control"
            placeholder="Enter email"
            [ngClass]="{'ng-valid': email.pristine}"
            type="email" 
            [(ngModel)]="model.email" 
            name="email"
            #email="ngModel"
            email
            required>
      </p>
      <div [hidden]="email.valid">
        <div class="alert alert-danger" 
          *ngIf="email.errors && email.errors.required; else elseBranch">
            Email is required
        </div>
        <ng-template #elseBranch><div 
          class="alert alert-danger" 
          *ngIf="email.errors && email.errors.email">
            Email is invalid
        </div></ng-template>
    </div>
      <p>
        <button class="btn" type="reset">Reset</button>
        <button class="btn btn-primary"
          type="submit"
          [disabled]="!f.form.valid">Submit</button>
      </p>
    </form>
    <pre>this.model = {{ model | json }}</pre>
  `
})
export class ContactComponent implements OnInit {
  public model = { email: null };

  public ngOnInit() {
    console.log('hello `Contact` component');
  }

  public onSubmit(value) {
    console.log(`Submitted: ${JSON.stringify(value)}`);
  }
}

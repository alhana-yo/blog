import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';



@NgModule({
  declarations: [PostFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [PostFormComponent]
})
export class PostFormModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostFormComponent } from './post-form/post-form.component';



@NgModule({
  declarations: [PostFormComponent],
  imports: [
    CommonModule
  ],
  exports: [PostFormComponent]
})
export class PostFormModule { }

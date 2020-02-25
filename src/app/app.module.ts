import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { LayoutModule } from './layout/layout.module';
import { SimpleComponent } from './layout/simple/simple.component';
import { BlogEntriesService } from './services/blog-entries.service';
import { LoginService } from './services/login.service';

const ROUTES: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'posts',
        loadChildren: () =>
          import('./posts/posts.module').then(m => m.PostsModule)
      }
    ]
  },
  {
    path: 'login',
    component: SimpleComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },

  { path: '**', redirectTo: 'posts' }
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    LayoutModule,
    AuthModule
  ],
  providers: [BlogEntriesService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

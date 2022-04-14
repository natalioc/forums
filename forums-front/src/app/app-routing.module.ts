import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ComposeComponent } from './compose/compose.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'compose', component: ComposeComponent },
  { path: 'user/:user', component: UserComponent},
  { path: 'post/:id', component: PostComponent},
  { path: 'comment/:id', component: CommentComponent},
  { path: 'edit-post/:id', component: EditPostComponent},
  { path: 'search/:query', component: SearchComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

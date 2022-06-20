import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { QuestionListComponent } from './components/question-list/question-list.component';

const routes: Routes = [
  { path: 'categories-list', component: CategoryListComponent },
  { path: 'questions-list', component: QuestionListComponent},
  { path: '', redirectTo: 'categories-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

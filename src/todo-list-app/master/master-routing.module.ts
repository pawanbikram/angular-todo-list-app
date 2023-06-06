import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'about', loadChildren: () => import('../about/about.module').then(m => m.AboutModule) },
    { path: '', loadChildren: () => import('../todo/todo.module').then(m => m.TodoModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class MasterRoutingModule {
    
}
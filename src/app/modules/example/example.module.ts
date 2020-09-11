import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../modules/material/material.module';

import { ExampleComponent } from './example.component';
import { EntryDetailComponent } from './components/entry-detail/entry-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { EntryEditorComponent } from './components/entry-editor/entry-editor.component';
import { EntryAsyncValidatorDirective } from './validators/entry-async-validator.directive';


@NgModule({
  declarations: [ExampleComponent, EntryDetailComponent, MessagesComponent, AddDialogComponent, EntryEditorComponent, EntryAsyncValidatorDirective],
  exports: [ExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class ExampleModule { }

import { Component, ViewChild, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EntryEditorComponent } from '../entry-editor/entry-editor.component';
import { Entry } from '../../models/entry';
import { EntryService } from '../../services/entry.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent {

  @Output() itemAddedEvent = new EventEmitter();

  @ViewChild(EntryEditorComponent) childcmp:EntryEditorComponent;

  constructor(
    private entryService: EntryService,
    public dialogRef: MatDialogRef<AddDialogComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    this.childcmp.onSubmit();
  }

  addEntry(entry: Entry){
    this.entryService.add(entry);
    this.dialogRef.close(true);
  }

}
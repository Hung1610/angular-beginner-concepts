import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Entry } from './models/entry';

import { AddDialogComponent } from './components/add-dialog/add-dialog.component';

import { EntryService } from './services/entry.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  selectedEntry: Entry;

  entries: Entry[];

  constructor(
    public dialog: MatDialog,
    private entryService: EntryService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries(): void {
    this.entryService.getAll()
                        .subscribe(entries => this.entries = entries);
  }

  onSelect(entry: Entry): void {
    this.selectedEntry = entry;
    this.messageService.add(`EntriesComponent: Selected entry id=${entry.id}`);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result){
        this.getEntries();
      }
    });
  }
}

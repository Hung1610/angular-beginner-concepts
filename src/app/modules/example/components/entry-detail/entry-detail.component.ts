import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { EntryEditorComponent } from '../entry-editor/entry-editor.component';

import { Entry } from '../../models/entry';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.scss']
})
export class EntryDetailComponent implements OnInit {

  @ViewChild(EntryEditorComponent) childcmp:EntryEditorComponent;

  @Input() entry: Entry;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.childcmp.onSubmit();
  }

}

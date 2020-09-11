import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EntryAsyncValidatorDirective, uniqueNameValidator } from '../../validators/entry-async-validator.directive';
import { EntryService } from '../../services/entry.service';
import { Entry } from '../../models/entry';

@Component({
  selector: 'app-entry-editor',
  templateUrl: './entry-editor.component.html',
  styleUrls: ['./entry-editor.component.scss']
})
export class EntryEditorComponent implements OnInit {

  @Input() entry: Entry;

  @Output() saveItemEvent = new EventEmitter<Entry>();
  editorForm = new FormGroup({
    name: new FormControl('', 
      {validators: [Validators.required, Validators.minLength(5)], updateOn: 'blur'}
    )
  },[],[]);

  constructor(
    private entryService : EntryService
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    this.editorForm.controls['name'].setValue(this.entry ? this.entry.name : '');
    // this.editorForm = new FormGroup({
    //   name: new FormControl(this.entry ? this.entry.name : '')
    // });
  }

  onSubmit(){
    if (!this.entry) {
      this.entry = { id: Math.floor(Math.random() * Math.floor(100)), name: "" };
    }
    this.entry.name = this.editorForm.get('name').value;
    this.saveItemEvent.emit(this.entry);
  }
}

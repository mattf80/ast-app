import { PbVersion } from './../../models/pb-version';
import { VersionsService } from './../versions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-list',
  templateUrl: './version-list.component.html',
  styleUrls: ['./version-list.component.css']
})
export class VersionListComponent implements OnInit {

  versions: PbVersion[] = [];

  constructor(private service: VersionsService) { }

  ngOnInit() {
    this.service.getVersions()
      .subscribe(versions => {
        this.versions = versions;
      })
  }

}

import { VersionsService } from './../versions.service';
import { PbVersion } from './../../models/pb-version';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-version-detail',
  templateUrl: './version-detail.component.html',
  styleUrls: ['./version-detail.component.css']
})
export class VersionDetailComponent implements OnInit {

  pbVersion: PbVersion;

  constructor(private route:ActivatedRoute,
              private service: VersionsService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.service.getVersion(id)
        .subscribe(data => {
          this.pbVersion = data;
          console.log(this.pbVersion);
        })

    })
  }

}

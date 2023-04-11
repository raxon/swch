import { Component, OnInit } from '@angular/core';
import { GeneratorService } from './generator.service';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],

})
export class GeneratorComponent implements OnInit {

  catsData: Array<String> = [];
  falseCounter = 0;
  loading = false;

  constructor(private generatorService: GeneratorService, private authService: AuthService, private router: Router) {
    this.addCatFact(true);
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(["/"]);

  }

  addCatFact(next: boolean) {
    if (this.falseCounter < 300) {
      this.loading = true;
    }

    if (next) {
      this.generatorService.getCatFact().subscribe((rawFact) => {
        if (!this.catsData.includes(rawFact.data[0])) {
          this.catsData.push(rawFact.data[0]);
        } else {

          if (this.falseCounter < 300) {
            this.addCatFact(true);
            this.falseCounter++;
          } else {
            this.loading = false;
          }

        }
      }
      )
    }
  }

}

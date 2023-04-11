import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private catEmojis = ['😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'];
  public catEmoji = this.getRandomCatEmoji();

  public loginForm: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  public getRandomCatEmoji(): string {
    return this.catEmojis[Math.floor(Math.random() * this.catEmojis.length)];
  }

  ngOnInit(): void {
    setInterval(() => {
      this.catEmoji = this.getRandomCatEmoji();
    }, 1000);

    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          )
        ]
      ]
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onLogin(): void {
    console.log(this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.valid) {
      const isAuthorized = this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      console.log("isAuthorized:", isAuthorized)

      if (isAuthorized) {
        this.router.navigate(["/generator"]);
      } else {
        alert("Invalid credentials")
      }

    }
  }
}

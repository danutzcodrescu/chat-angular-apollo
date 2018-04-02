import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const loginMutation = gql`mutation login {
      login(username: "${this.form.value.username}", password: "${this.form.value.password}") {
        success,
        errors {
          code,
          message
        }
      }
    }`;
    this.apollo.mutate({
      mutation: loginMutation
    }).subscribe(console.log);

  }

}

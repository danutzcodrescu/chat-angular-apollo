import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const registerMutation = gql`mutation createUser {
      createUser(username: "${this.form.value.username}", password: "${this.form.value.password}") {
        _id
      }
    }`;
    this.apollo.mutate({
      mutation: registerMutation
    }).subscribe(console.log);

  }

}

# MyApp

This project's purpose is to serve as a quick demo for learning Angular Concepts.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

# Concepts

- **What is the Angular Module?**
  + Angular modules (NgModules) are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. They can contain components, service providers, and other code files whose scope is defined by the containing NgModule. They can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules.  
  E.g. the project contains one root module and two child modules, each corresponding to a route. (/example and /example2).  
  
- **What is the Angular Service, Dependency Injection? Give an example.**
  + Service is a broad category encompassing any value, function, or feature that an app needs. Most often used for tasks such as fetching data from the server, logging, etc.  
  + Dependency Injection is a design pattern wired into Angular, utilizing the built-in injector. This helps to isolate components better and make testing easier.  
  E.g. Services and DI are ultilized throughout the sample project. See /modules/example/services for sample services, and /modules/example.component.ts for how they're injected and used.  
  
- **What is the Angular Directive? How many types of it? Give some examples.**
  + An Attribute directive changes the appearance or behavior of a DOM element.  
  + There are three kinds of directives in Angular:  
  1. **Components—directives with a template.**  
    E.g. See examples/modules/example/components/  
  2.  **Structural directives—change the DOM layout by adding and removing DOM elements.**  
    E.g. Directives such as NgIf, NgFor. See examples/modules/example/example.components.ts  
  3. **Attribute directives—change the appearance or behavior of an element, component, or another directive.**  
    E.g. Directives used like an html attribute.  
    + See examples/modules/example/example.components.ts ([class.selected], (click),... are built-in directives.  
    + See examples/modules/example/validators/ contain custom directive used for form validation.  
  
- What is the Angular Component? Give an example.  
    E.g. See examples/modules/example/components/
    + Describe the two-way binding mechanism.  
    Two-way binding [(...)] is really just syntactic sugar for a property binding [] and an event binding (). Allowing the view to change the model and vice-versa.  
    + Describe the component life-cycle hooks.  
    Component lifecycle go through multile key events (Innit, OnChange, ...). Hooks allow developers to tap into these and events and decide what happens.  
    + Describe the Interpolation and template expressions of the Angular component.  
    Interpolation makes use of the {{ }} double curly braces syntax to embed template expressions that will be converted by Angular into marked-up text in the view layer.  
    A template reference variable is a value used to attach the reference of an element to a variable.  
    + Describe the Event binding.
    An event binding () allows to listen for certain events such as keystrokes, mouse movements, clicks, and touches.  
    + Describe the Input and Outputs  
    @Input() and @Output() allow Angular to share data between the parent context and child directives or components. An @Input() property is writable while an @Output() property is observable.  
    
- What is the difference between Observable and Promise? Give an example for each type.  
  + A Promise handles a single event when an async operation completes or fails.  
An Observable is like a Stream (in many languages) and allows to pass zero or more events where the callback is called for each event.  
Often Observable is preferred over Promise because it provides the features of Promise and more. With Observable it doesn't matter if you want to handle 0, 1, or multiple events. You can utilize the same API in each case.  
  E.g. To simulate HTTP requests. The project ultilize Observable in the services.  
  
- What is Angular FormGroup, FormControl, Validator, Async validator? Give an example.  
  + These are used in Reactive Form.  
  E.g. See /modules/example/components/entry-editor/

- What is a Restful API definition? The relation between Angular HttpClient and Restful API in our current project.  
  + RestFul API is an API which follows the REST architectural style. Our current project utilize HttpClient to make RESTful API requests to .NET Core backend server.  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

import { element, by, protractor } from 'protractor/globals';
import { ElementArrayFinder } from "protractor";
import Promise = webdriver.promise.Promise;

export class ForgotPasswordPageObject {

  private form;
  private emailInput;
  private submitButton;
  private goToLoginLink;
  private goToRegisterLink;

  constructor() {

    // get the relevant elements
    this.form = element(by.id('forgot-password-form'));
    this.emailInput = this.form.element(by.id('forgot-password-email'));
    this.submitButton = this.form.element(by.id('forgot-password-submit'));

    this.goToLoginLink = element(by.id('forgot-password-login-link'));
    this.goToRegisterLink = element(by.id('forgot-password-register-link'));

  }

  setEmail(value: string): Promise<void> {
    return this.emailInput.clear().sendKeys(value);
  }

  submitForm(): Promise<void> {
    return this.submitButton.sendKeys(protractor.Key.ENTER);
  }

  formIsValid(): Promise<boolean> {
    return this.getAllErrorMessages().count().then(value => {
      return value === 0;
    });
  }

  private getAllErrorMessages(): ElementArrayFinder {
    return element.all(by.css('.error-group'));
  }

}

@opportunity
Feature: Test opportunity section of aubay's web page
  This feature will cover the spontaneous candidate section of opportunities
  menu in the aubay web page

  Background:
  Given I am on the aubay web page

  @spontaneous_candidate_success
  Scenario: Submit spontaneous candidate with success
    When I scroll to opportunities view
    And I click on the spontaneous candidate button
    Then The opportunity form screen is displayed
    When I input the name "Aubay Test"
    And I select the mobile country
    And I input the mobile number "81992463315"
    And I input the email address "test@tester.test"
    And I set "Javascript" tecnology
    And I select "Senior" as professional level
    And I click on the Submit button
    Then The candidature is sent with success

  @spontaneous_candidate_blank_fields
  Scenario: Try submit spontaneous candidate without filling any fields
    When I scroll to opportunities view
    And I click on the spontaneous candidate button
    Then The opportunity form screen is displayed
    When I click on the Submit button
    Then The error toast message is displayed
    Then I close the opportunity modal

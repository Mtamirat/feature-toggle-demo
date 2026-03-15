Feature Toggle Demo


Overview:

This project demonstrates a simple Feature Toggle component built with React.
The purpose of the component is to show how conditional rendering works using props instead of state.
A feature toggle is commonly used in real applications to enable or disable certain features without removing code. In this project, the FeatureToggle component receives props that determine whether a feature should be displayed or marked as disabled.

Objective
The goals of this project are to:
Understand conditional rendering in React
Learn how to pass and use props in components
Build a reusable component
Demonstrate functionality through multiple test cases

FeatureToggle Component

The FeatureToggle component accepts two props:
Prop	Type	Description
isEnabled	Boolean	Determines whether the feature is enabled
featureName	String	The name of the feature

Component Behavior
If isEnabled is true → The feature name is displayed.
If isEnabled is false → The message
Feature [featureName] is disabled is displayed.
Example:
<FeatureToggle isEnabled={true} featureName="Dark Mode" />
Output:
Dark Mode
Example:
<FeatureToggle isEnabled={false} featureName="Chat System" />
Output:
Feature Chat System is disabled

Test Cases
Normal Test Cases
Test Case 1
Input:
isEnabled: true
featureName: "Dark Mode"
Expected Output:
Dark Mode

Test Case 2
Input:
isEnabled: false
featureName: "Chat System"
Expected Output:
Feature Chat System is disabled

Test Case 3
Input:
isEnabled: true
featureName: "Notifications"
Expected Output:
Notifications


Edge Test Cases
Test Case 4 — Empty Feature Name
Input:
isEnabled: false
featureName: ""
Expected Output:
Feature  is disabled

Test Case 5 — Numeric Feature Name
Input:
isEnabled: true
featureName: "123Feature"
Expected Output:
123Feature

Test Case 6 — Long Feature Name
Input:
isEnabled: false
featureName: "VeryLongFeatureNameExampleTestingEdgeCase"
Expected Output:
Feature VeryLongFeatureNameExampleTestingEdgeCase is disabled

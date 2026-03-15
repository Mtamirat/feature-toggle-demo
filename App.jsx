import FeatureToggle from "./FeatureToggle";

function App() {
  return (
    <div>
      <h1>Feature Toggle Demo</h1>

      <h2>Normal Cases</h2>
      <FeatureToggle isEnabled={true} featureName="Dark Mode" />
      <FeatureToggle isEnabled={false} featureName="Chat System" />
      <FeatureToggle isEnabled={true} featureName="Notifications" />

      <h2>Edge Cases</h2>
      <FeatureToggle isEnabled={false} featureName="" />
      <FeatureToggle isEnabled={true} featureName="123Feature" />
      <FeatureToggle isEnabled={false} featureName="VeryLongFeatureNameExampleTestingEdgeCase" />

    </div>
  );
}

export default App;
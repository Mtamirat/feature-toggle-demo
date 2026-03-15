function FeatureToggle(props) {
    const { isEnabled, featureName } = props;
  
    return (
      <div>
        {isEnabled ? (
          <p>{featureName}</p>
        ) : (
          <p>Feature {featureName} is disabled</p>
        )}
      </div>
    );
  }
  
  export default FeatureToggle;
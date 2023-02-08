const PrepWeekS3 = (props) => {
  const {scenario} = props;

  return (
    <p>{scenario ? scenario : "Several days pass and you've finaly submitted your last GIST. Fresh out of coffee beans and hallucinating code arithmatic, do you choose to continue this grueling journey? or return to the comfort of your old life?"}</p>
  );
};

export default PrepWeekS3;

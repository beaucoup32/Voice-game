const Week5S1 = (props) => {
  const { scenario } = props;

  const text = (
    <>
      <p className="typed">
        You open up your terminal and proceed to type 'psql'. To connect to the
        database.
      </p>
      <p className="typed">
        Uh oh, we got an error. 'psql: could not connect to server'? What does
        that even mean?
      </p>
      <p className="typed">What do we do?</p>
    </>
  );
  return (
    <div className="scenario">
      {scenario ? <p className="scenario-text">{scenario}</p> : text}
    </div>
  );
};

export default Week5S1;

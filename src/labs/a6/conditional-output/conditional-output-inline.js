const ConditionalOutputInline = () => {
  const loggedIn = false;
  return (
    <>
      {loggedIn && <h2>Welcom Inline</h2>}
      {!loggedIn && <h2>Please login Inline</h2>}
    </>
  );
};

export default ConditionalOutputInline;

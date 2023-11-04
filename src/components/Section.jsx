const Section = ({ name, actors, index }) => {
  return (
    <>
      <section key={index}>
        <h1 key={name}>{name}</h1>
        <div className="list-actors" key={actors.name}>
          {actors.map((actors, index) => {
            return (
              <article key={index}>
                <h2 key={actors.name}>{actors.name}</h2>
                <img key={actors.picture} src={actors.picture} alt="" />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Section;

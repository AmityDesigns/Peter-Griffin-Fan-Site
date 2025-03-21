const Quotes = () => {
  const quotes = [
    {
      quote: "Hehehehehehehe...",
      context: "Peter's signature laugh"
    },
    {
      quote: "Holy crap, Lois!",
      context: "Peter's common phrase when surprised"
    },
    {
      quote: "Shut up, Meg.",
      context: "Peter's recurring rude remark to his daughter Meg"
    },
    {
      quote: "Freakin' sweet!",
      context: "Peter's expression of excitement"
    },
    {
      quote: "Roadhouse!",
      context: "One of Peter's catchphrases, referencing the movie Roadhouse"
    },
    {
      quote: "I'm not fat, I'm just big boned.",
      context: "Peter defending his weight"
    },
    {
      quote: "A boat's a boat, but the mystery box could be anything. It could even be a boat!",
      context: "Peter's flawed logic when choosing between a boat and a mystery box"
    },
    {
      quote: "Why do bad things happen to good people? ...Oh wait, I did that thing with the puppies.",
      context: "Peter wondering about karma before remembering his actions"
    }
  ];

  return (
    <section id="quotes" className="py-16 family-guy-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white font-family-guy">
          Famous Peter Quotes
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((item, index) => (
            <div key={index} className="quote-card p-6">
              <blockquote className="text-xl md:text-2xl font-medium text-white mb-4">
                "{item.quote}"
              </blockquote>
              <p className="text-gray-200 italic">
                {item.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;

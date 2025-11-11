import useBackButton from "../../hooks/useBackButton";

export default function InformationPage() {
  useBackButton();

  return (
    <main className="flex flex-col gap-6 p-4 size-full overflow-y-auto text-sm">
      <h2 className="font-semibold text-base">How the AI Tarot Works?</h2>

      <p>
        Tarot is more than just a deck of cards; it's a tool for self-discovery
        and gaining profound insights. For centuries, the symbols depicted on
        these cards have served as a key to understanding the past, present, and
        future. The AI Tarot elevates the art of divination to new heights by
        harnessing the power of artificial intelligence to deliver highly
        accurate and objective interpretations of card spreads.
      </p>

      <section className="flex flex-col gap-3">
        <h2 className="font-semibold text-base">
          Artificial Intelligence and Tarot
        </h2>

        <div className="flex flex-col gap-2">
          <p>
            At the heart of the AI Tarot lies a neural network trained on a vast
            amount of data, encompassing:
          </p>

          <ul className="list-disc list-inside">
            <li>
              The meanings and interpretations of all 78 Tarot cards across
              various decks and spreads.
            </li>

            <li>Psychological patterns and behavioral tendencies in humans.</li>

            <li>
              Statistical data on life events, probabilities, and
              interrelationships.
            </li>
          </ul>

          <p>
            Leveraging this extensive knowledge base, the AI Tarot can analyze
            your query, consider the context, and provide the most accurate and
            relevant response, unconstrained by subjective opinions or human
            error.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p>It can assist you in:</p>

          <ul className="list-disc list-inside">
            <li>Unraveling your inner self and true desires.</li>

            <li>Making informed decisions in challenging situations.</li>

            <li>Identifying new opportunities and perspectives.</li>

            <li>Learning from past experiences and pursuing your goals.</li>

            <li>Finding inspiration and creative ideas.</li>
          </ul>
        </div>
      </section>

      <p>
        Our AI Tarot reader is designed to provide you with accurate and
        unbiased answers, based on deep knowledge and modern technology. Try
        using the app for just a few days and feel how Tarot becomes your key to
        understanding yourself and the world.
      </p>
    </main>
  );
}

import RecommendationItem from '../ui/recommendation-item';

export interface ReccommendationI {
  id: string;
  description: string;
  name: string;
  title: string;
}

const reccommendations: ReccommendationI[] = [
  {
    id: 'R1',
    description:
      'Rasheedat joined us at a very early stage when we had ideas but no real product. She didn’t just build what we asked for. She asked the right questions, challenged unclear decisions, and helped us shape something users actually understood. Working with her felt less like hiring a developer and more like adding a product partner to the team.',
    name: 'Olliver J',
    title: ' Founder, Asher Inc',
  },
  {
    id: 'R2',
    description:
      ' We already had a product, but the frontend was messy, slow, and inconsistent. Rasheedat came in, cleaned up the codebase, fixed responsiveness issues, and aligned the UI properly with our designs. What stood out most was her attention to detail and how smoothly she worked with our backend team. The product feels more stable and professional now, and future changes are much easier to make',
    name: 'Erica A',
    title: 'Founder, Credicaf',
  },
  {
    id: 'R3',
    description:
      'Rasheedat is one of the few developers I’ve worked with who truly understands how startups operate. She communicates clearly, hits deadlines, and takes ownership of her work. We trusted her with important parts of our product, and she delivered consistently. If you’re a founder who cares about execution, performance, and long-term maintainability, she’s someone you want on your project.',
    name: 'Sara T',
    title: 'Owner, Whisper',
  },
];

const Reccommendations = () => {
  return (
    <section className='font-sans relative' id='Recommendations' data-section>
      <h1 className='section-title '>Testimonials</h1>

      <section className='section-spacing'>
        {reccommendations.map((item) => (
          <RecommendationItem key={item.id} recc={item} />
        ))}
      </section>
    </section>
  );
};

export default Reccommendations;

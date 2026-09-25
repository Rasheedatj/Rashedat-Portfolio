import type { Principle } from '@/types/home';

export const principles: Principle[] = [
  {
    title: 'The User Comes First.',
    description:
      'A Feature Isn’t Successful Because It Works. It’s Successful When Users Can Understand It, Navigate It Easily, And Enjoy Using It.',
    icon: '/users.svg',
  },
  {
    title: 'AI Can Write Code. I Own The Code.',
    description:
      'AI Helps Me Move Faster, But Every Generated Line Is Reviewed, Tested, Refactored, And Understood Before It Ships.',
    icon: '/search-code.svg',
  },
  {
    title: '“It Works” Is Not The Finish Line.',
    description:
      'I Test Beyond The Happy Path, Think Through Failure States, And Make Sure New Changes Don’t Introduce Problems Into Production.',
    icon: '/search-in-clipboard.svg',
  },
  {
    title: 'Build For The Next Engineer.',
    description:
      'Code Should Be Easy To Understand, Maintain, And Hand Over. I Write With The Next Developer In Mind, Not Just Today’s Deadline.',
    icon: '/dots-in-colon.svg',
  },
  {
    title: 'Fast Doesn’t Mean Careless.',
    description:
      'I Move Quickly Without Cutting Corners. Good Processes, Early Testing, And Clear Communication Let Me Ship Faster Without Creating Tomorrow’s Problems.',
    icon: '/rocket.svg',
  },
];

import React from 'react';
import Navigation from './_components/navigation';
import Core from './_components/core';
import GlowCursor from './_components/ui/glow-cursor';

const Page = () => {
  return (
    <>
      <GlowCursor />
      <Navigation />
      <Core />
    </>
  );
};

export default Page;

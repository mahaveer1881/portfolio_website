// src/ParticlesLoader.ts
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesLoader = async () => {
  await initParticlesEngine(async (engine) => {
    await loadSlim(engine);
  });
};

export default ParticlesLoader;

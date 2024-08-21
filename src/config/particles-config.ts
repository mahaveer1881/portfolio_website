// src/ParticlesConfig.ts
import { ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';

const ParticlesConfig = (): ISourceOptions => ({
  background: {
    color: {
      value: '#012345',
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      push: {
        quantity: 6,
      },
      repulse: {
        distance: 150,
        duration: 0.5,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 120,
      enable: true,
      opacity: 0.4,
      width: 1.5,
    },
    move: {
      direction: MoveDirection.none, // No specific direction; particles move randomly
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      speed: 3, // Speed of particle movement
      straight: false, // Particles do not move in a straight line
    },
    number: {
      density: {
        enable: true,
      },
      value: 100,
    },
    opacity: {
      value: 0.4,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 2, max: 5 },
    },
  },
  detectRetina: true,
});

export default ParticlesConfig;

import { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import ParticlesConfig from '../config/particles-config';
import ParticlesLoader from './ParticlesLoader';
import { type Container } from '@tsparticles/engine';

const ParticlesAnimation = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    ParticlesLoader().then(() => {
      setInit(true); // Set state to true once the particles engine is loaded
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        style={{
          background: `#10131a`,
        }}
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        options={ParticlesConfig()}
      />
    );
  }

  return <></>;
};

export default ParticlesAnimation;

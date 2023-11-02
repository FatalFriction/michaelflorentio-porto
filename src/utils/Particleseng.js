"use client"
import React, { useCallback } from 'react';
import Particles from 'react-particles';
import Options from './Options.json';
import { loadFull } from 'tsparticles';
import './Particle.css';

const Particleseng = ({number, id}) => {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      loaded={particlesLoaded} 
      options={Options[number]}
      />
  );
};

export default Particleseng;

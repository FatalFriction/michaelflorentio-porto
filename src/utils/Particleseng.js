"use client"
import React, { useMemo, useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const Particleseng = () => {
  const options = useMemo(() => ({
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 3,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#D99938',
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.6,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 2.8 },
      },
    },
    detectRetina: true,
  }), []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

  return (
    <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
  );
};

export default Particleseng;

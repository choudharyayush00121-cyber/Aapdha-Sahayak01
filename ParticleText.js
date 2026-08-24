import ParticleText from './ParticleText';

<div style={{ width: '100%', height: 360, background: '#09090f' }}>
  <ParticleText
    text="Aapdha Sahayak"
    particleSize={2.2}
    density={4}
    color="#f8fafc"
    highlightColor="#8b5cf6"
    scatter={110}
    gatherDuration={1600}
    stagger={420}
    pointerRepel={32}
    repelRadius={120}
    idleDrift={0.8}
    trigger="mount"
    fontSize="clamp(3.5rem, 13vw, 9rem)"
    fontWeight={800}
    fontFamily="inherit"
    glow={false}
  />
</div>
let audioContext;
let lastPlay = 0;

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (
      window.AudioContext ||
      window.webkitAudioContext
    )();
  }

  return audioContext;
}

export const playHoverSound = () => {
  const now = Date.now();

  if (now - lastPlay < 80) return;

  lastPlay = now;

  const ctx = getAudioContext();

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = 'triangle';

  oscillator.frequency.setValueAtTime(
    1200,
    ctx.currentTime
  );

  gainNode.gain.setValueAtTime(
    0.06,
    ctx.currentTime
  );

  gainNode.gain.exponentialRampToValueAtTime(
    0.0001,
    ctx.currentTime + 0.08
  );

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start();

  oscillator.stop(
    ctx.currentTime + 0.08
  );
};
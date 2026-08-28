// Gentle, meditative Indian ambient drone using Web Audio API
class IndianAmbientPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private timerId: number | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 3);
      this.masterGain.connect(this.ctx.destination);

      this.isPlaying = true;
      this.playTanpuraDrone();
      this.scheduleGentleChimes();
    } catch (e) {
      console.warn('Audio context playback not permitted or supported', e);
      this.isPlaying = false;
    }
  }

  private playTanpuraDrone() {
    if (!this.ctx || !this.masterGain) return;

    // Root fundamental notes: Sa (C3 ~ 130.81Hz), Pa (G3 ~ 196.00Hz), Sa oct (C4 ~ 261.63Hz)
    const freqs = [130.81, 196.0, 261.63, 392.0];
    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq + (Math.random() * 0.4 - 0.2), this.ctx.currentTime);

      gain.gain.setValueAtTime(0.03 / (idx + 1), this.ctx.currentTime);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
    });
  }

  private scheduleGentleChimes() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;

    const ragaNotes = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25]; // Sa Re Ga Pa Dha Sa (Bhoopali scale)
    const playChime = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      
      const note = ragaNotes[Math.floor(Math.random() * ragaNotes.length)];
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(note, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 4);

      const nextDelay = 3500 + Math.random() * 4000;
      this.timerId = window.setTimeout(playChime, nextDelay);
    };

    playChime();
  }

  public stop() {
    if (this.masterGain && this.ctx) {
      try {
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
        setTimeout(() => {
          this.ctx?.close();
          this.ctx = null;
        }, 1300);
      } catch {
        this.ctx = null;
      }
    }
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.isPlaying = false;
  }
}

export const ambientPlayer = new IndianAmbientPlayer();

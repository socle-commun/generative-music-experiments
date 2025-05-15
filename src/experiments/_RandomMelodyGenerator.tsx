import { useState } from 'react';

import * as Tone from 'tone';

export default function RandomMelodyGenerator() {
    const [isPlaying, setIsPlaying] = useState(false);

    const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
    const durations = ['4n', '8n', '16n'];

    const generateRandomNote = () => {
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        const randomDuration = durations[Math.floor(Math.random() * durations.length)];
        return { note: randomNote, duration: randomDuration };
    };

    const playMelody = async () => {
        await Tone.start();
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();

        for (let i = 0; i < 8; i++) {
            const { note, duration } = generateRandomNote();
            synth.triggerAttackRelease(note, duration, now + i * 0.5);
        }
    };

    const handlePlay = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            playMelody().finally(() => setIsPlaying(false));
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Random Melody Generator</h1>
            <button onClick={handlePlay} disabled={isPlaying}>
                {isPlaying ? 'Playing...' : 'Play Random Melody'}
            </button>
        </div>
    );
};

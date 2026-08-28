import React, { useEffect, useRef } from 'react';
import { Play, Pause, Music } from 'lucide-react';

export const YOUTUBE_SONG_URL =
  'https://youtu.be/eB127b64pnE?si=XZA-HNSrF1lwcSVd';
export const SONG_TITLE = 'धागों से बाँधा (Dhaagon Se Baandhaa)';
export const YT_VIDEO_ID = 'eB127b64pnE'; // Song from movie Raksha Bandhan

interface MusicPlayerProps {
  isPlaying: boolean;
  onTogglePlay: (playing: boolean) => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  isPlaying,
  onTogglePlay,
}) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Send postMessage commands to YouTube Iframe
  useEffect(() => {
    if (iframeRef.current?.contentWindow) {
      const command = isPlaying ? 'playVideo' : 'pauseVideo';
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
    }
  }, [isPlaying]);

  const handleToggle = () => {
    onTogglePlay(!isPlaying);
  };

  return (
    <>
      {/* Hidden YouTube Iframe Player for Background Song Playback */}
      <div
        className="fixed -top-[9999px] -left-[9999px] opacity-0 pointer-events-none w-1 h-1 overflow-hidden"
        aria-hidden="true"
      >
        <iframe
          ref={iframeRef}
          id="rakhi-yt-player"
          src={`https://www.youtube-nocookie.com/embed/${YT_VIDEO_ID}?enablejsapi=1&version=3&playerapiid=ytplayer&loop=1&playlist=${YT_VIDEO_ID}&autoplay=1`}
          title="धागों से बाँधा - रक्षाबंधन"
          allow="autoplay; encrypted-media"
        />
      </div>

      {/* Single Clean Play / Pause Button */}
      <button
        type="button"
        onClick={handleToggle}
        className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border transition-all cursor-pointer flex items-center gap-2 text-xs sm:text-sm font-serif font-bold shadow-md ${
          isPlaying
            ? 'bg-[#801B2B] text-[#FFF9EF] border-[#FDE68A] ring-2 ring-[#C89B3C]/60 shadow-[0_0_12px_rgba(200,155,60,0.5)]'
            : 'bg-[#28140C] text-[#FDE68A] border-[#C89B3C]/50 hover:bg-[#3D1E12]'
        }`}
        title={isPlaying ? 'गीत रोकें' : 'गाना बजाएँ'}
        aria-label="गाना बजाएँ या रोकें"
      >
        {isPlaying ? (
          <>
            <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FDE68A] fill-[#FDE68A]" />
            {/* Equalizer animation */}
            <div className="flex items-end gap-0.5 h-3.5 w-3.5">
              <span className="w-0.5 bg-[#FDE68A] animate-[bounce_0.8s_infinite] h-2.5 rounded-xs" />
              <span className="w-0.5 bg-[#FDE68A] animate-[bounce_1.2s_infinite] h-3.5 rounded-xs" />
              <span className="w-0.5 bg-[#FDE68A] animate-[bounce_0.6s_infinite] h-1.5 rounded-xs" />
            </div>
            <span>गाना रोकें</span>
          </>
        ) : (
          <>
            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FDE68A] fill-[#FDE68A]" />
            <span>गाना बजाएँ</span>
          </>
        )}
      </button>
    </>
  );
};

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
    </>
  );
};

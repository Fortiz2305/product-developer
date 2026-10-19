/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';

type Props = {
  url: string;
  title: string;
};

const youtubeIdFrom = (url: string) => url.split('/').pop()?.split('?')[0] ?? '';

export const Video = ({ url, title }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = youtubeIdFrom(url);

  return (
    <div sx={{ position: `relative`, aspectRatio: `16 / 9`, my: 3, borderRadius: `4px`, overflow: `hidden`, bg: `muted` }}>
      {isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
          sx={{ position: `absolute`, inset: 0, width: `100%`, height: `100%`, border: 0 }}
        />
      ) : (
        <button
          type='button'
          onClick={() => setIsPlaying(true)}
          aria-label={`Play video: ${title}`}
          sx={{
            position: `absolute`,
            inset: 0,
            width: `100%`,
            height: `100%`,
            p: 0,
            border: 0,
            cursor: `pointer`,
            backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg)`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            '&:hover span, &:focus-visible span': { transform: `scale(1.1)` },
          }}
        >
          <span
            aria-hidden='true'
            sx={{
              display: `inline-flex`,
              alignItems: `center`,
              justifyContent: `center`,
              width: `64px`,
              height: `64px`,
              borderRadius: `50%`,
              bg: `rgba(0, 0, 0, 0.7)`,
              color: `white`,
              fontSize: `24px`,
              transition: `transform 0.2s ease-out`,
            }}
          >
            ▶
          </span>
        </button>
      )}
    </div>
  );
};

/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';
import {
  LinkedinShareButton,
  TwitterShareButton,
  BlueskyShareButton,
  LinkedinIcon,
  XIcon,
  BlueskyIcon,
} from 'react-share';

type Props = {
  url: string;
  title: string;
  description: string;
};

const ICON_SIZE = 40;
const COPIED_FEEDBACK_MS = 2000;
const MONOCHROME_ICON = { fill: `var(--theme-ui-colors-secondary)` };

export const ShareButtons = ({ url, title, description }: Props) => {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url || window.location.href);
    setIsLinkCopied(true);
    setTimeout(() => setIsLinkCopied(false), COPIED_FEEDBACK_MS);
  };

  return (
    <div
      sx={{
        display: `flex`,
        alignItems: `center`,
        gap: `10px`,
        mt: 3,
        button: {
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          transition: `transform 0.2s ease-out`,
        },
        'button:hover': { transform: `scale(1.15)` },
        'button:focus-visible': { outline: `2px solid`, outlineColor: `secondary`, outlineOffset: `2px`, borderRadius: `50%` },
      }}
    >
      <LinkedinShareButton url={url} title={title} summary={description} aria-label='Share on LinkedIn'>
        <LinkedinIcon size={ICON_SIZE} round={true} bgStyle={MONOCHROME_ICON} />
      </LinkedinShareButton>
      <TwitterShareButton url={url} title={title} aria-label='Share on X'>
        <XIcon size={ICON_SIZE} round={true} bgStyle={MONOCHROME_ICON} />
      </TwitterShareButton>
      <BlueskyShareButton url={url} title={title} aria-label='Share on Bluesky'>
        <BlueskyIcon size={ICON_SIZE} round={true} bgStyle={MONOCHROME_ICON} />
      </BlueskyShareButton>
      <button
        type='button'
        onClick={copyLink}
        aria-label='Copy link'
        sx={{
          width: `${ICON_SIZE}px`,
          height: `${ICON_SIZE}px`,
          p: 0,
          border: 0,
          borderRadius: `50%`,
          cursor: `pointer`,
          color: `background`,
          bg: `secondary`,
        }}
      >
        <svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
          <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
          <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
        </svg>
      </button>
      <span role='status' sx={{ fontSize: 1, color: `secondary` }}>
        {isLinkCopied ? `Link copied` : ``}
      </span>
    </div>
  );
};

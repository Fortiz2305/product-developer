import React from "react";
import styled from "styled-components";
import {
  LinkedinShareButton,
  TwitterShareButton,
  PocketShareButton,
  LinkedinIcon,
  TwitterIcon,
  PocketIcon,
} from "react-share";
import { trackEvent } from "../utils/TrackEvent";

type Props = {
  url: string;
  title: string;
  description: string;
};

export const ShareButtons: React.FunctionComponent<Props> = ({
  url,
  title,
  description,
}) => {
  const onSharePost = (postTitle: string, network: string) => {
    trackEvent({ name: "Share post", data: { network, post: postTitle } });
  };

  return (
    <Buttons>
      <LinkedinShareButton
        url={url}
        title={title}
        summary={description}
        onClick={() => onSharePost(title, "linkedin")}
      >
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>
      <TwitterShareButton
        url={url}
        title={description}
        onClick={() => onSharePost(title, "twitter")}
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
      <PocketShareButton
        url={url}
        title={description}
        onClick={() => onSharePost(title, "pocket")}
      >
        <PocketIcon size={40} round={true} />
      </PocketShareButton>
    </Buttons>
  );
};

const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  button {
    display: flex;
    align-items: center;
    margin-right: 10px;
    transition: all 0.2s ease-out;
  }

  button:hover {
    transform: scale(1.15);
  }

  button:focus {
    outline: 0;
  }

  button:last-child {
    margin-right: 0;
  }

  svg {
    color: var(--theme-ui-colors-secondary, #5f6c80);
  }
`;

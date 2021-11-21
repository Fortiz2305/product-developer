import React from "react";
import { Twitter, Linkedin, Pocket } from "react-feather";
import {
  LinkedinShareButton,
  TwitterShareButton,
  PocketShareButton,
} from "react-share";
import styled from "styled-components";

type Props = {
  url: string;
  title: string;
  description: string;
};

export const ShareButtons: React.FunctionComponent<Props> = ({
  url,
  title,
  description,
}) => (
  <Buttons>
    <LinkedinShareButton url={url} title={title} summary={description}>
      <Linkedin strokeWidth={1.25} />
    </LinkedinShareButton>
    <TwitterShareButton url={url} title={description}>
      <Twitter strokeWidth={1.25} />
    </TwitterShareButton>
    <PocketShareButton url={url} title={description}>
      <Pocket strokeWidth={1.25} />
    </PocketShareButton>
  </Buttons>
);

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

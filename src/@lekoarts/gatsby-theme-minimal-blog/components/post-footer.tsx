import * as React from 'react';
import styled from 'styled-components';
import { ShareButtons } from '../../../components/ShareButtons';

type PostFooterProps = {
  url: string;
  title: string;
  description: string;
};

const PostFooter = ({ url, title, description }: PostFooterProps) => (
  <>
    <ShareTitle>Share this post!</ShareTitle>
    <ShareDescription>
      Thanks for reading this post. If you think it can be interesting for some
      other people, feel free to share this link with anyone you want. Also, you
      can use the links below to share it on Twitter, LinkedIn, or Pocket.
    </ShareDescription>
    <ShareButtons url={url} title={title} description={description} />
  </>
);

export default PostFooter;

const ShareTitle = styled.h2`
  margin-bottom: 4px;
`;

const ShareDescription = styled.p`
  font-family: 'IBM Plex Sans';
  margin-top: 0px;
  font-size: 18px;
`;

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
      Thanks for reading. If you know someone who would find it useful, send it
      their way.
    </ShareDescription>
    <ShareButtons url={url} title={title} description={description} />
  </>
);

export default PostFooter;

const ShareTitle = styled.h2`
  margin-bottom: 4px;
`;

const ShareDescription = styled.p`
  margin-top: 0px;
`;

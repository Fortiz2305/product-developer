import React from "react"
import styled from 'styled-components'

type Props = {
  url: string;
  title: string;
}

export const Video: React.FunctionComponent<Props> = ({ url, title }) => (
  <VideoItem>
    <iframe
      src={url}
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      allowFullScreen
      height={300}
    />
  </VideoItem>
)

const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

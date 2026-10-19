/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ShareButtons } from '../../../components/ShareButtons';

type PostFooterProps = {
  url: string;
  title: string;
  description: string;
};

const PostFooter = ({ url, title, description }: PostFooterProps) => (
  <footer sx={{ variant: `dividers.top`, pt: 4 }}>
    <p sx={{ color: `secondary`, m: 0, fontSize: [1, 1, 2] }}>
      Thanks for reading. If you know someone who would find it useful, send it their way.
    </p>
    <ShareButtons url={url} title={title} description={description} />
  </footer>
);

export default PostFooter;

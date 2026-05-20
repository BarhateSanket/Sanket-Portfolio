import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title: string;
  description: string;
}

function Meta({ title, description }: MetaProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

export default Meta;

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic<{
  spec: any;
}>(import('swagger-ui-react'), { ssr: false });

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    apiFolder: 'pages/api', // or 'src/pages/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'NightMarket API endpoint',
        version: '1.0.0',
      },
    },
  });

  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;
import Head from "next/head";
import React from "react";

const MetaTags = ({ title = "Consultant Evaluator", description = "Find and evaluate consultants that match your requirements" }: { title: string; description?: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Consultant Evaluator" />
    </Head>
  );
};

export default MetaTags;

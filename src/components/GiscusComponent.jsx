import Giscus from "@giscus/react";

export default function MyApp() {
  return (
    <Giscus
      id="comments"
      repo="dhanushtheijas08/dhanushtheijas-portfolio"
      repoId="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
      category="General"
      categoryId="DIC_kwDOLAZ8Ws4Cch5B"
      mapping="title"
      term="Welcome to my portfolio"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  );
}

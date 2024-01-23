import Giscus from "@giscus/react";

export default function GiscusComponent() {
  return (
    <div>
      <Giscus
        id="comments"
        key="comments"
        repo="dhanushtheijas08/dhanushtheiajs-portfolio"
        repoId="R_kgDOLAZ8Wg"
        category="General"
        categoryId="DIC_kwDOLAZ8Ws4Cch5A"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

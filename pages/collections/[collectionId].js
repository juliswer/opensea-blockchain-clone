import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Collection = () => {
  const { query } = useRouter();
  return (
    <Link href="/">
      <h2>Great, the collection is: {query.collectionId}</h2>
    </Link>
  );
};

export default Collection;

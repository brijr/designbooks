import { getPayload } from "payload";
import { cache } from "react";

import configPromise from "@payload-config";

export const queryBookBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "books",
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});

export const queryAllBooks = cache(async () => {
  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "books",
  });

  return result.docs || [];
});

import type { FunctionComponent } from "react";

import { headers } from "next/headers";

const Page: FunctionComponent = () => {
  const address = headers().get("x-forwarded-for");

  return (
    <main>
      <p>
        Hello, world! The reported client address is {address}.
      </p>
    </main>
  );
};

export default Page;

# Age.js

This is a simple NextJs component that calculates your age.

## Installation

Install the package via npm:

```bash
npm install age-ts
```

pnpm:

```bash
pnpm i age-ts
```

or yarn:

```bash
yarn add age-ts
```

## Usage

Import the `Age` component and use it in your NextJS application:

```tsx
"use-client";

import Age from "age-ts";

function App() {
  return <Age />;
}

export default App;
```

## Environment Variable

Set the `BIRTHDATE` environment variable in the following format:

```text
NEXT_PUBLIC_BIRTHDATE = '<your birthdate here>'
```

Or just pass the birthdate argument through the component.

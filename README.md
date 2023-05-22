# Fraud detection service

## Tech stack

- Python (3.10 encouraged)
- React/TypeScript/Styled Components

## Setup

- Install Python dependencies:
```sh
pip3 install -r requirements.txt
```

- Install `pre-commit` hooks:
```sh
pre-commit install
```

- Install npm dependencies:
```sh
npm i
```

- Run tests:
```sh
npm test
```

- Start the dev server:
```
npm start
```

## Style checks

We use ESLint and Ruff to check style for TypeScript and Python respectively. If `eslint` isn't available on the terminal, use `npm i -g eslint` to install it. Then, check for style issues:

```sh
npm run lint  # Or eslint . --fix
ruff check . --fix
```

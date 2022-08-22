# [MONIR BISHAL | Terminal](https://monirbishal.com)

A terminal style website

![screenshot](/docs/screenshot.png)

## Quick Start

### Using docker (recommended)

```bash
docker run -d --name terminal -p 3000:3000 monirbishal/terminal
```

If you want to run with custom configuration, make sure you have a copy of `config.json` then mount in the container:

```bash
docker run -d \
  --name terminal \
  -p 3000:3000 \
  -v `pwd`/config.json:/data/config.json \
  monirbishal/terminal
```

### Using npm/yarn

1. Install dependencies:

```bash
yarn install
```

2. Build the project:

```bash
yarn build
```

3. Run the server:

```bash
yarn start
```

## Configuration

Here's a sample of the `config.json` file:

```json
{
  "bioUrl": "https://raw.githubusercontent.com/monirbishal/portfolio/master/README.md",
  "social": {
    "github": "monirbishal",
    "linkedin": "monirbishal"
  },
  "theme": "gruvboxdark" // list of themes available in themes.json
}
```

## Themes

![themes](/docs/screenshot.gif)

[Here's](/docs/themes) a list of available themes.


## Contributing

Please feel free to pull requests or log issues.

## Credit
All credit goes to [Yassine Fathi](https://github.com/m4tt72/terminal).

Thanks!

# Stylelint Config Pixel

Strict Stylelint configuration with Prettier maintained by Pixel Perfect Agency.

## Rationale

This package is designed for usage with [SCSS](https://sass-lang.com/) and [Prettier](https://prettier.io/).
We want to have a strict Stylelint configuration that is consistent across projects. We also want to use Prettier to format our code. This package implements the configuration we use in our projects.

## Installation

```bash
npm install --save-dev stylelint-config-pixel
```

## Usage

Add the following to your `package.json`:

```json
{
    "stylelint": {
        "extends": "stylelint-config-pixel"
    }
}
```

Or add the following to your `.stylelintrc`:

```json
{
    "extends": "stylelint-config-pixel",
    "rules": {
        // Add your custom rules here
    }
}
```

## Contributing

Contributions are always welcome! Please understand that this package is maintained by Pixel Perfect Agency and we will only accept contributions that we feel are in line with our vision for this package.

## License

MIT © [Pixel Perfect Agency](./LICENSE) 2023

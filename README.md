# Mchain Docs Website

Welcome to the official Mchain Docs repository!

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. Our goal is to provide a comprehensive guide for developers, validators, and enthusiasts looking to dive deep into the Mchain ecosystem.

## Features

- **In-depth Guides**: From setting up your own Mchain node to becoming a validator, we've got you covered.
- **Technical Tutorials**: Dive into code samples, integration techniques, and best practices.
- **Up-to-date Information**: Stay informed with the latest updates, releases, and changes in the Mchain network.

## Official Site

You can access the official generated site at [https://docs.mchain.network](https://docs.mchain.network).

## Contributing

We value our community's contributions! If you find any inconsistencies in the documentation or think of an improvement, please raise an issue or submit a pull request.

## Developing

As we voyage through the vast sea of blockchain technology, contributing to and maintaining our documentation is like adjusting our sails for smoother sailing. This section provides guidance on setting up your local development environment, building, and deploying the Mchain Docs.

### Installation

To set sail, first ensure you have all the necessary dependencies:

```
$ yarn
```

### Local Development

For a breezy developer experience:

```
$ yarn start
```

This command starts a local development server and opens up a browser window. It's like having a live compass: most changes are reflected live without having to restart the server.

### Build

When you're ready to anchor your changes:

```
$ yarn build
```

This command generates static content into the `build` directory. Like charting a map, this content can be served using any static contents hosting service.

### Deployment

For navigators using SSH:

```
$ USE_SSH=true yarn deploy
```

For those not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

Consider this your compass when you're ready to share your discoveries: if you're using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## Feedback and Questions

Your feedback is crucial for us to improve. If you have any questions or feedback, please don't hesitate to get in touch through our issues section or by reaching out to our maintainers.


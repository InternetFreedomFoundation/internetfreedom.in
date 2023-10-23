# Internetfreedom.in Frontend

Website that powers internetfreedom.in, built using [Ghost](https://ghost.org/) & [Gatsby](https://gatsbyjs.org)

Initail architecture and motivation can be found [here](./proposal.md).

## Installing

```bash
# From Source
git clone https://github.com/TryGhost/gatsby-starter-ghost.git
cd gatsby-starter-ghost
```

Then install dependencies

```bash
yarn
```

&nbsp;

## Running

Create a `.ghost.json` file at the root of the repository with the following contents:

```json
    
  {
    "development": {
      "apiUrl": "https://staging.internetfreedom.in",
      "contentApiKey": "c3fc08ee04d811676f240f1e40"
    },
  }

```

Start the development server. You now have a Gatsby site pulling content from headless Ghost.

```bash
yarn run dev
```

The following ENV variables are required for building the site: `apiUrl` & `contentApiKey`

<p align="center"><u>
<img alt="Proximity Logo" align=center height=100 src="https://raw.githubusercontent.com/Archive-Matrix/Proximity/main/src/web/public/icon-transparent-white.png?token=GHSAT0AAAAAACUBP4T5VMRGSNMAJQXAARN2ZVLL66A"/>
  
<a href="https://proximity-xi.vercel.app/">
  <h1 align=center>Proximity</h1>
</a>
  
</u></p>
<p align="center"><u>
  <img alt="MIT Licence" align="center" src="https://badgen.net/badge/license/MIT/white"/>&nbsp;
  <img align="center" src="https://badgen.net/github/stars/Archive-Matrix/Proximity?color=white"/>&nbsp;
  <img align="center" src="https://badgen.net/github/watchers/Archive-Matrix/Proximity?color=white"/>&nbsp;
  <img align="center" src="https://badgen.net/github/forks/Archive-Matrix/Proximity?color=white"/>&nbsp;
    
  <a href="https://github.com/Archive-Matrix/Proximity/actions/workflows/vercel-production.yml">
    <img alt="App Production status" align="center" src="https://github.com/Archive-Matrix/Proximity/actions/workflows/vercel-production.yml/badge.svg" />
  </a>
  
</u></p>

# This is a MonoRepo

- Frontend /packages/web/\*
- Backend /package/backend/\*
- AI Models /packages/ml/\*
- global configs /packages/config

# Commit message guidelines

[Read the guide](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)

# Workspace setup

### Prerequisites

- nvm@latest
- nodejs 18.x, 20.x
- pnpm@latest
- vscode@latest
- python

### Install these VS Code extension:

[Monorepo Workspace](https://marketplace.visualstudio.com/items?itemName=folke.vscode-monorepo-workspace)
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Using CLI

### Start web app `pnpm dev:web`

### Build web app `pnpm build:web`

# Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

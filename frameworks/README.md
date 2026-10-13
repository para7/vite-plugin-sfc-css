# frameworks

実フレームワークでの build と dev の確認用。ルートの `pnpm test:frameworks` で全部、`--project=<name>:build` か `:dev` で 1 つ。

各アプリは独立した package（pnpm workspace ではない）。Node と pnpm はルートの `mise.toml` で固定する。プラグインと型は `predev` / `prebuild` が `copy-plugin.mjs` でアプリ内にコピーする。コピー先は gitignore。

どの scaffolder も Vite 8 を peer に含んでいたので、overrides は使っていない。TanStack は、pnpm の `minimumReleaseAge` (公開から 24 時間) を満たす版まで scaffolder の出力から下げて固定している。型チェックはしていない (solid-spa の build の `tsc -b` だけ)。

## 作成コマンドと解決されたバージョン

- React Router: `pnpm dlx create-react-router@latest react-router --react-router-version 7 --no-install --no-git-init --no-agent-skills --package-manager pnpm --yes`（create-react-router 7.0.0）。react-router 7.18.4、vite 8.3.4
- TanStack Start (React): `pnpm dlx @tanstack/cli@latest create tanstack-react --framework React --blank --deployment nitro --no-toolchain --no-git --no-install --no-intent --package-manager pnpm -y`（CLI 0.71.1）。`@tanstack/react-start` 1.168.61、`@tanstack/react-router` 1.170.42、nitro 3.0.260610-beta、vite 8.3.4
- TanStack Start (Solid): 同じコマンドで `--framework Solid`、名前は `tanstack-solid`。`@tanstack/solid-start` 1.168.58、`@tanstack/solid-router` 1.170.39、solid-js 1.9.17、vite-plugin-solid 2.11.14、vite 8.3.4
- SolidStart: `pnpm dlx create-solid@latest solid-start basic --solidstart --v2 --ts`（create-solid 0.12.0、テンプレート basic）。テンプレートの lockfile のまま `@solidjs/start` 2.0.0、vite 8.1.4、nitro 3.0.260610-beta
- Solid SPA: `pnpm dlx create-vite@latest solid-spa --template solid-ts --no-interactive`（create-vite 9.2.1）。vite-plugin-solid 2.11.14、`@solidjs/router` 0.15.4、vite 8.3.4
- vinext: `pnpm dlx create-vinext-app@latest vinext --platform node --no-prerender --use-pnpm --skip-install --disable-git --yes`（create-vinext-app 1.0.0）。vinext 1.1.0、vite 8.3.4

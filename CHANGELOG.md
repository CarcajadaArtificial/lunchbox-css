# Changelog

## v0.0.3

### Distributed the `basics` and `reset` modules, and the `classless`` preset.
  - `/dist/modules/*`
  - `/dist/presets/*`

### Added the distribute script
  - `/distribute.sh`
  - `/package.json`

### v0.1.0

- [ ] Distribute different CSS files for different features.
  - [x] Add the shell script that compiles scss modules.
  - [x] Add compressed versions of the compiled css.
  - [ ] Add a watch for any scss inside /dist/ and trigger dist script.
- [ ] Distributions
  - [x] Basics
  - [x] Reset
  - [ ] Theme: Newspaper
  - [ ] Sizes
  - [ ] Twind
  - [ ] Lunchbox components
  - [ ] Transitions
  - [ ] Gradients
  - [ ] Markdown
- [ ] Add configurable variables for features.
  - [ ] Optional use of color palette.
  - [ ] Optional use of sizes.
- [ ] Add main presets for stylesheets.
  - [x] Classless: Reset, Basics
  - [ ] Minimal: Reset, Theme Newspaper, Sizes, Twind, Lunchbox components
  - [ ] Standard: Reset, Theme Newspaper, Sizes, Twind, Lunchbox components, Transitions, Gradients, Markdown


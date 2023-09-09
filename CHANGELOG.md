# Changelog

## v0.0.24

- Fixed the issue where the `<Input/>` component's maxWidth didn't compensate for the forced left align.
- Fixed the issue where the `theme-newspaper` module didn't apply standard styles to the body tag.

### v0.1.0

- [x] Distribute different CSS files for different features.
  - [x] Add the shell script that compiles scss modules.
  - [x] Add compressed versions of the compiled css.
  - [x] Add a watch for any scss inside /dist/ and trigger dist script.
  - [x] Return to node_modules using the `--load-path` in scss.
- [x] Distributions
  - [x] Basics
  - [x] Reset
  - [x] Theme: Newspaper
  - [x] Size
  - [x] Twind
  - [x] Grid
  - [x] Layout: Full
  - [x] Layout: Center
  - [x] Layout: Focus
  - [x] Layout: Halves
  - [x] Layout: Thirds
  - [x] Layout: Right
  - [x] Layout: Left
  - [x] Lunchbox components
  - [x] Transitions
  - [x] Gradients
  - [x] Markdown
- [ ] Add configurable variables for features.
  - [ ] Optional use of color palette.
  - [ ] Optional use of sizes.
- [x] Add main presets for stylesheets.
  - [x] Classless
  - [x] Minimal
  - [x] Standard

### v0.2.0

- [ ] Distributions
  - [ ] Print
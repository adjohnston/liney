# Liney
##### Base Line Height Helpers & Guide Bookmarklet

## Getting Started
Firstly you should copy the liney directory into your own Sass architecture. I personally have a third party directory which is included before my own styles.

Create a `_liney-settings.scss` and replace the examples with the necessary styles you need.

Finally, if you're using Gulp to parse your Sass I suggest adding `gulp-combine-mq` to merge repeating media queries.

### Changelog

#####`[v0.0.3] - 2015-10-25`
###### Changed
- Folder re-structure so referencing `liney.scss` is cleaner
- Add `!default` tags so settings can be overwritten

#####`[v0.0.2] - 2015-10-25`
###### Changed
- `text-size()` mixin + removed strict-mode
- Nicer demo styling
- Better looking guide toggle

###### Added
- `gaps()` mixin to handle spacing based on `line-height` and not `font-size`

#####`[v0.0.1] - 2015-10-18`
###### Added
- Initial release

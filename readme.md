# Liney
##### Base Line Height Helpers & Guide Bookmarklet

## Getting Started
Firstly you'll need to grab the Liney Sass and include it in your project.

- `npm install adjohnston/liney --save-dev`
- Reference `liney.scss` in your own Sass (_likely to be `@import node_modules/liney/liney.scss`_)
- Create a `_liney-settings.scss` and replace the examples with the necessary styles you want.

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

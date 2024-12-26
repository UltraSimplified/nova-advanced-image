let mix = require("laravel-mix");
let path = require("path");

require("./mix");

mix
  .setPublicPath("dist")
  .js("resources/js/field.js", "dist/js/image-cropper.js")
  .vue({ version: 3 })
  .nova("ultrasimplified/nova-image-cropper");

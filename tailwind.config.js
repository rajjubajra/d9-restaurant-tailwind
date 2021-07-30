module.exports = {
  prefix: '',
  important: false,
  purge: {
    enabled: false, // Remove or change to `true` to enable purging.
    mode: 'layers',
    content: [
      // Add any paths here that contain classes that need to be kept after
      // purging, such as Twig templates and exported Drupal configuration
      // files.
      // '**/*.twig'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: []
}

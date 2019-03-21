const TAG_NAME = 'movable-view'

module.exports = function ({ warn, error }) {
  return {
    test: TAG_NAME,
    props: [
      {
        test: /^(inertia|out-of-bounds|damping|friction|scale|scale-min|scale-max|scale-value|animation|htouchmove|vtouchmove)$/,
        ali ({ name }) {
          warn(`<${TAG_NAME}> component does not support ${name} property in ali environment!`)
        }
      }
    ],
    event: [
      {
        test: /^(change)$/,
        ali (eventName) {
          const eventMap = {
            'change': 'onchange'
          }
          return eventMap[eventName]
        }
      }
    ]
  }
}
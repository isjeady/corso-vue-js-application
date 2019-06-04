
const dateTimeFormats = {
    'en': {
        short: {
          year: 'numeric', month: 'short', day: 'numeric'
        },
        long: {
          year: 'numeric', month: 'short', day: 'numeric',
          weekday: 'long', hour: 'numeric', minute: 'numeric'
        }
      },
    'it' : {
        short: {
          year: 'numeric', month: 'short', day: 'numeric'
        },
        long: {
          year: 'numeric', month: 'long', day: 'numeric',
          weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true
        }
    }
};

export default dateTimeFormats;
import FormView from '../views/FormView.js'

const tag = '[MainController]'

export default {
  init() {
    console.log(tag, 'init()');
    FormView.setup(document.querySelector('form'))
            .on('@submit', e => this.onSubmit(e.input))
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
  }
}
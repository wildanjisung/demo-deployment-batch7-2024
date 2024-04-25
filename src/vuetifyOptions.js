import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { VTextField, VBtn } from 'vuetify/lib';

const vuetify = createVuetify({
  components: {
    VTextField,
    VBtn,
  },
});

export default vuetify;

import VueInstance from '@/main'

export default {
  alertLoading: function (config) {
    VueInstance.$store.commit('SET_REQUEST_STATE', 'loading');
    VueInstance.$store.commit('SET_REQUEST_METHOD', config.method);
    return config
  },
  alertError: function (err) {
    VueInstance.$store.commit('SET_REQUEST_STATE', 'error');
    VueInstance.$snackbar.open({
      state: 'error',
      content: err
    })
    return Promise.reject(err)
  }
}
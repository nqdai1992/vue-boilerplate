import VueInstance from '@/main'

export default {
  alertLoading: function (response) {
    VueInstance.$store.commit('SET_REQUEST_STATE', 'done');
    return response
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
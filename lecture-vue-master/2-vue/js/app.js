import SearchModel from './models/SearchModel.js'

new Vue({
  el: '#app',
  data : {
    query: '',
    submitted: false,
    tabs: ['추천검색어', '최근검색어'],
    selectedTab: '',
    searchResult: []
  },
  created() {
    this.selectedTab = this.tabs[0]
  },
  methods: {
    onSubmit() {
      this.search();
    },
    onReset() {
      this.query = '';
      this.submitted = false,
      this.searchResult = []
    },
    onKeyup() {
      if (!this.query.length) this.onReset();
    },
    search() {
      SearchModel.list().then(data => {
        this.submitted = true,
        this.searchResult = data
      })
    },
    onClickTab(tab) {
      this.selectedTab = tab
    }
  }
})
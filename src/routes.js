routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: '',
    url: '',
    component: ''
  });

  $urlRouterProvider.otherwise('/');

}
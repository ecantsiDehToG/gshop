import Mock from 'mockjs'
Mock.mock('http://localhost:4000/index_category', {
  'name': '@name',
  'email': '@email',
  'age|1-10': 5
})
Mock.mock('http://localhost:8080/menu', {
  'id': '@increment',
  'name': 'menu',
  'order|1-20': 5
})

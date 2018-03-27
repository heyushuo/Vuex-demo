# Vuex-demo
4、至于为什么这么麻烦在state和localStorage中传来传去，是因为state的值刷新后会没了，而localStorage的值不能响应式地变化（Vue 仅可以对其管理的数据做响应式处理，可以理解为 data 中的数据，localStorage 并不在 Vue 的管理下，自然不会有响应特性）；
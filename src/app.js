import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.headers = {
	'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
}
Vue.http.options.emulateJSON = true


const router = new VueRouter()
router.map({
	'/': {
		component: require('./components/home.vue')
	}
});
router.redirect({
	'*':'/'
})
router.start(require('./app.vue'), '#app')
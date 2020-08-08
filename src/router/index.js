// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/page1'
import Page2 from '@/components/page2'
import Desktop1 from '@/components/desktop1'
import Desktop2 from '@/components/desktop2'
import Desktop4 from '@/components/desktop4'
import Desktop9 from '@/components/desktop9'
import Details from '@/components/details'
import Tbar3 from '@/components/tbar3'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "Tbar3"
            }
        },
        {
            path: '/page1',
            name: 'Page1',
            component: Page1
        },
        {
            path: '/page2',
            name: 'Page2',
            component: Page2
        },
        {
            path: '/desktop1',
            name: 'Desktop1',
            component: Desktop1
        },
        {
            path: '/desktop2',
            name: 'Desktop2',
            component: Desktop2
        },
        {
            path: '/desktop4',
            name: 'Desktop4',
            component: Desktop4
        },
        {
            path: '/desktop9',
            name: 'Desktop9',
            component: Desktop9
        },
        {
            path: '/details',
            name: 'Details',
            component: Details
        },
        {
            path: '/tbar3',
            name: 'Tbar3',
            component: Tbar3
        }
    ]
})
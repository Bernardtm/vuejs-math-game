const routes = [
]

const showhome = {
  path: '/',
  component: () => import('layouts/menu'),
  children: [
    { path: '', component: () => import('pages/index') }
  ]
}

routes.push(showhome)

export default routes

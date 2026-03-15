import { createRootRoute, createRoute } from '@tanstack/react-router'

import { RootComponent } from './routes/__root'
import { HomePage } from './routes/index'
import { SettingsPage } from './routes/settings'
import { ChatPage } from './routes/chat'

// Root route
export const rootRoute = createRootRoute({
  component: RootComponent,
})

// Home route
export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

// Settings route
export const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: SettingsPage,
})

// Chat route
export const chatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/chat',
  component: ChatPage,
})

// 创建路由树
export const routeTree = rootRoute.addChildren([
  homeRoute,
  settingsRoute,
  chatRoute,
])

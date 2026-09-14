import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'

const HomePage = lazy(() =>
  import('@/pages/HomePage').then((module) => ({ default: module.HomePage })),
)
const PropertiesPage = lazy(() =>
  import('@/pages/PropertiesPage').then((module) => ({ default: module.PropertiesPage })),
)
const PropertyDetailPage = lazy(() =>
  import('@/pages/PropertyDetailPage').then((module) => ({ default: module.PropertyDetailPage })),
)
const FundsPage = lazy(() =>
  import('@/pages/FundsPage').then((module) => ({ default: module.FundsPage })),
)
const FundDetailPage = lazy(() =>
  import('@/pages/FundDetailPage').then((module) => ({ default: module.FundDetailPage })),
)
const HowItWorksPage = lazy(() =>
  import('@/pages/HowItWorksPage').then((module) => ({ default: module.HowItWorksPage })),
)
const LearnPage = lazy(() =>
  import('@/pages/LearnPage').then((module) => ({ default: module.LearnPage })),
)
const LearnArticlePage = lazy(() =>
  import('@/pages/LearnArticlePage').then((module) => ({ default: module.LearnArticlePage })),
)
const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((module) => ({ default: module.AboutPage })),
)
const AuthPage = lazy(() =>
  import('@/pages/AuthPage').then((module) => ({ default: module.AuthPage })),
)
const GetStartedPage = lazy(() =>
  import('@/pages/GetStartedPage').then((module) => ({ default: module.GetStartedPage })),
)
const LegalPage = lazy(() =>
  import('@/pages/LegalPage').then((module) => ({ default: module.LegalPage })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })),
)

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="properties" element={<PropertiesPage />} />
        <Route path="properties/:slug" element={<PropertyDetailPage />} />
        <Route path="funds" element={<FundsPage />} />
        <Route path="funds/:slug" element={<FundDetailPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="learn/:slug" element={<LearnArticlePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<AuthPage title="Login" />} />
        <Route path="get-started" element={<GetStartedPage />} />
        <Route path="legal/:slug" element={<LegalPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

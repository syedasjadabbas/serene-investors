import { Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { AboutPage } from '@/pages/AboutPage'
import { AuthPage } from '@/pages/AuthPage'
import { FundsPage } from '@/pages/FundsPage'
import { HomePage } from '@/pages/HomePage'
import { HowItWorksPage } from '@/pages/HowItWorksPage'
import { LearnPage } from '@/pages/LearnPage'
import { LegalPage } from '@/pages/LegalPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PropertiesPage } from '@/pages/PropertiesPage'
import { PropertyDetailPage } from '@/pages/PropertyDetailPage'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="properties" element={<PropertiesPage />} />
        <Route path="properties/:slug" element={<PropertyDetailPage />} />
        <Route path="funds" element={<FundsPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<AuthPage title="Login" />} />
        <Route path="get-started" element={<AuthPage title="Get started" />} />
        <Route path="legal/terms" element={<LegalPage title="Terms" />} />
        <Route path="legal/privacy" element={<LegalPage title="Privacy" />} />
        <Route path="legal/risks" element={<LegalPage title="Key risks" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

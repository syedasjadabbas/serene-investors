'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type InvestorType = 'individual' | 'institutional'

export type User = {
  name: string
  email: string
  avatar?: string
  investorType: InvestorType
}

export type AuthContextType = {
  isAuthenticated: boolean
  user: User | null
  isLoaded: boolean
  login: (userData?: Partial<User>) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const STORAGE_KEY = 'serene_investors_auth'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Hydrate user from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (parsed && typeof parsed === 'object' && parsed.email) {
          setUser(parsed as User)
        }
      }
    } catch (err) {
      console.error('Failed to restore auth from localStorage', err)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  const login = useCallback((userData?: Partial<User>) => {
    const newUser: User = {
      name: userData?.name?.trim() || 'Yasir Khokhar',
      email: userData?.email?.trim() || 'investor@serene-investors.com',
      avatar: userData?.avatar,
      investorType: userData?.investorType || 'individual',
    }
    setUser(newUser)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser))
    } catch (err) {
      console.error('Failed to persist auth to localStorage', err)
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (err) {
      console.error('Failed to clear auth from localStorage', err)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoaded,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import GetProfile from './components/GetProfile'

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn >
        <UserButton />
        <GetProfile/>
      </SignedIn>
    </header>
  )
}
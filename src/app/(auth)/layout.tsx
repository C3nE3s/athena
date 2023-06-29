export default function AuthLayout({ children }: {children: React.ReactNode}) {
  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden">
      <main>
        {children}
      </main>
    </div>
  )
}

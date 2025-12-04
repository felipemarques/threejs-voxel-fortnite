interface LoadingScreenProps {
  isLoading: boolean
  message?: string
}

export function LoadingScreen({ isLoading, message }: LoadingScreenProps) {
  if (!isLoading) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2d3436] transition-opacity duration-500"
      style={{
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? 'all' : 'none',
      }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner - styled like v1 object-viewer */}
        <div
          className="h-10 w-10 animate-spin rounded-full border-4 border-[#00cec9] border-t-transparent"
          style={{
            animation: 'spin 1s linear infinite',
          }}
        />
        
        {/* Optional message */}
        {message && (
          <p className="text-sm text-white/80">{message}</p>
        )}
      </div>
    </div>
  )
}

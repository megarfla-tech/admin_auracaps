import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('✅ Login realizado! Bem-vindo ao AuraCaps Admin')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-aura-purple to-purple-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-aura-purple">AuraCaps</h1>
          <p className="text-gray-500">Painel Administrativo</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aura-purple focus:border-transparent outline-none"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aura-purple focus:border-transparent outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-aura-purple hover:bg-purple-800 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>

          <div className="flex justify-between text-sm">
            <a href="#" className="text-aura-purple hover:underline">Esqueceu a senha?</a>
            <label className="flex items-center gap-1 text-gray-600">
              <input type="checkbox" /> Lembrar-me
            </label>
          </div>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          Dados de demonstração — não correspondem à operação real
        </p>
      </div>
    </div>
  )
}

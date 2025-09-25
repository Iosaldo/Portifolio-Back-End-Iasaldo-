export default function DashboardLayout({
  children, // será a página
}) {
  return (
    <div className="dashboard-layout">
      {/* Sidebar do Dashboard */}
      <aside className="w-64 min-h-screen bg-gray-800 text-white p-4">
        <nav>
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          {/* Adicione aqui seus links de navegação */}
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}

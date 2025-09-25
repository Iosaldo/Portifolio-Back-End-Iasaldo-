export default function DashboardPage() {
  return (
    <div className="dashboard-content">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Cards ou widgets do dashboard */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Estatísticas</h2>
          {/* Conteúdo do card */}
        </div>
      </div>
    </div>
  );
}

export async function GET() {
  return Response.json({
    message: "Olá do Next.js!",
    timestamp: new Date().toISOString(),
  });
}

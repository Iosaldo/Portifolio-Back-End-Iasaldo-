export const getApiBaseUrl = () => {
  // Se a variável de ambiente estiver definida, usa ela.
  // Senão, faz requisição relativa para permitir deploy em mesmo host.
  return process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "") || "";
};

export const getFeedbackApiUrl = () => `${getApiBaseUrl()}/api/feedback`;

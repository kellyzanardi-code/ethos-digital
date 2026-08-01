export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Se o caminho NÃO tem extensão de arquivo (ex: /sobre, /contato),
  // serve o index.html para o React Router assumir o roteamento.
  // Caminhos com extensão (.js, .css, .png, .svg, etc.) são servidos normalmente.
  if (!url.pathname.match(/\.[a-zA-Z0-9]+$/)) {
    return context.env.ASSETS.fetch(
      new Request(new URL("/index.html", url.origin), context.request),
    );
  }

  // Arquivo estático — serve direto
  return context.env.ASSETS.fetch(context.request);
}

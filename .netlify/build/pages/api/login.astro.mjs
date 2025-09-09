export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const { username, password } = await request.json();
  if (username === "admin" && password === "1234") {
    return new Response(JSON.stringify({ token: "fake-jwt-token" }), { status: 200 });
  }
  return new Response(JSON.stringify({ error: "Credenciales inválidas" }), { status: 401 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

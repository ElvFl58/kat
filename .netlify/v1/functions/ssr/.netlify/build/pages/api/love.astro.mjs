export { renderers } from '../../renderers.mjs';

const msg = ["hello kat", "kat love", 122];
const GET = ({ params, request }) => {
  return new Response(JSON.stringify({ mensaje: msg[0] }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

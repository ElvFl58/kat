import type { APIRoute } from "astro";
const msg = ['hello kat', 'kat love', 122];
export const GET: APIRoute = ({ params, request }) => {
  return new Response(JSON.stringify({ mensaje: msg[0] }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

export function POST() {
  const time = new Date().valueOf();
  console.log(`Returning ${time} from get-time POST`);
  return Response.json({ time });
}

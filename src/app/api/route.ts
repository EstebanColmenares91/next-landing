import data from "../../lib/data.json"

export async function GET() {
  return Response.json({ data })
}

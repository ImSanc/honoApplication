import { Hono } from 'hono'

const app = new Hono()

async function  authMiddleWare( c : any  , next : any) {
  if( c.req.header("Authorization"))
  {
    await next();
  }
  else
  {
    return c.json("You dont have access");
  }
}

app.get('/',authMiddleWare ,async (c : any) => {
  const body = await c.req.json();

  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.json( "hello world");
})

export default app

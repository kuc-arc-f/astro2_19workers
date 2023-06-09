import testRouter from './routes/test';
import todoRouter from './routes/todo';
//
const Router = {
  /**
  * route
  * @param
  *
  * @return
  */  
  route: async function (pathname: string, req: any, res: any, env: any): Promise<Response>
  {
    let response;
    /* test */
    if (pathname === "/test2") {
      response = await testRouter.test2(req, res, env);
    }
    if (pathname === "/test3") {
      response = await testRouter.test3(req, res, env);
    }
    if (pathname === "/test/create") {
      response = await testRouter.create(req, res, env);  
    }
    if (pathname === "/test/get") {
      response = await testRouter.get(req, res, env);  
    }
    if (pathname === "/test/get_list") {
      response = await testRouter.get_list(req, res, env);  
    }
    if (pathname === "/test/delete") {
      response = await testRouter.delete(req, res, env);  
    }
    if (pathname === "/test/update") {
      response = await testRouter.update(req, res, env);  
    }
    //todo
    // create
    if (pathname === "/todos/create") {
      response = await todoRouter.create(req, res, env);  
    }
    if (pathname === "/todos/delete") {
      response = await todoRouter.delete(req, res, env);  
    }
    if (pathname === "/todos/update") {
      response = await todoRouter.update(req, res, env);  
    }
    if (pathname === "/todos/get") {
      response = await todoRouter.get(req, res, env);  
    }
    if (pathname === "/todos/get_list") {
      response = await todoRouter.get_list(req, res, env);  
    }
    //@ts-ignore
    return response;
  },
}
export default Router;

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: (
        <div>
          {" "}
          <h2> '“Straight ahead you can't go very far.”' </h2>
          <p> That is a Little Prince quote, this is a 404 error 😅</p>
        </div>
      ),
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/viewAll",
      element: <OtherMovies/>,
    },
  ]);
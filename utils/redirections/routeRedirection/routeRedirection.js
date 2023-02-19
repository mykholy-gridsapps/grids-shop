// IF USER TRIED TO ENTER A PROTECTED PAGE IT SHOULD REDIRECT HIM TO HOME PAGE
const routeRedirection = (req, resolvedUrl) => {
  const authenticated = req.cookies["grids-apps-shop-token"] || "yes";

  const requireAuthRoutes = ["/cart"];
  const requireNoAuthRoutes = ["/login"];

  const requireAuth = requireAuthRoutes.find((route) => route === resolvedUrl);
  const requireNoAuth = requireNoAuthRoutes.find(
    (route) => route === resolvedUrl
  );

  if (requireAuth && !authenticated) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else if (requireNoAuth && authenticated) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return false;
};

export default routeRedirection;

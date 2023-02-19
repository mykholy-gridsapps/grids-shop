// IF USER CHANGES THE LANGUAGE MAUALLY FROM PAGE URL IT SHOULD REDIRECT HIM BACK TO THE ORIGINAL LANGUAGE
const langRedirection = (req, locale) => {
  const currentLang = req.cookies["grids-apps-shop-lang"] || "en";

  if (locale === currentLang) return;

  let redirectLocation = "";

  if (currentLang === "en") {
    redirectLocation = req.url;
  } else {
    redirectLocation = `/${currentLang}/${
      req.url.startsWith("/") ? req.url.slice(1) : req.url
    }`;
  }

  if (redirectLocation) {
    return {
      redirect: {
        destination: redirectLocation,
        permanent: false,
      },
    };
  }
};

export default langRedirection;

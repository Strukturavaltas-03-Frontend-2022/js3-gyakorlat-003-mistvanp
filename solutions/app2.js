const cookieHandler = {
    getAll() {
      let cookiesObj = {};
      const cookies = document.cookie.split(";");
      cookies.forEach((cookie) => {
        cookiesObj[cookie.slice(0, cookie.indexOf("=")).trim()] = cookie
          .slice(cookie.indexOf("=") + 1)
          .trim();
      });
  
      return cookiesObj;
    },
    toSessionStorage() {
      const cookiesObj = this.getAll();
      Object.entries(cookiesObj).forEach(([key, value]) => {
        sessionStorage.setItem(key, value);
      });
    },
  
    flush() {
      const cookiesObj = this.getAll();
      Object.keys(cookiesObj).forEach((key) => {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });
    },
  };
  export { cookieHandler };

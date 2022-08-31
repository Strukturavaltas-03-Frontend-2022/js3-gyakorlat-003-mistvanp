const setCookie = (str) => {
    const expires = new Date(Date.now() + 15 * 60 * 1000).toUTCString();
    document.cookie = `token=${str};expires=${expires}`;
  };
  
  export default setCookie;

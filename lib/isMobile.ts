let isMobile: boolean = false;

if (typeof window !== "undefined") {
    if (window.innerWidth <= 640) {
      isMobile = true;
    }
  }

export default isMobile;

import { FC, ReactNode } from "react";
import { useWindowScroll } from "react-use";
import { Footer } from "./footer";
import { Navigation } from "./navigation";

const GradientBackground = () => {
  const { y } = useWindowScroll();

  return (
    <>
      <div className="pointer-events-none absolute inset-0">
        <div
          className="h-full blur-xl bg-[url('https://res.cloudinary.com/domnvvqdl/image/upload/v1668909709/bgblur_u33jee.png')] bg-no-repeat bg-center"
          style={{
            transform: `translateY(${Math.min(y / 3, 167)}px)`,
          }}
        ></div>
      </div>
    </>
  );
};
type LayoutProps = {
  children?: ReactNode;
  showNav?: boolean;
  filters?: any;
};

export const Layout: FC<LayoutProps> = ({
  children,
  showNav = true,
  filters,
}) => {
  return (
    <>
      <main className="relative z-10 lg:mx-96 md:mx-48 sm:mx-28 xs:mx-28 pt-20 text-lg text-white">
        {showNav ? <Navigation /> : null}
        <div className="-mt-10 sm:mt-0">
          <div className="flex flex-col items-center">{children}</div>
        </div>
        <Footer />
      </main>
      <GradientBackground />
    </>
  );
};

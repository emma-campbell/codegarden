import { FC, ReactNode } from "react";
import { useWindowScroll } from "react-use";
import { Footer } from "./footer";
import { Navigation, NavigationItem } from "./navigation";

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
  navItems?: NavigationItem[];
  filters?: any;
};

export const Layout: FC<LayoutProps> = ({
  children,
  showNav = true,
  navItems,
  filters,
}) => {
  return (
    <>
      <main className="relative z-10 mx-6 tablet:mx-24 laptop:mx-36 desktop:mx-72 desktop-xl:mx-96 desktop-2xl:mx-128 pt-20 text-lg text-white">
        {showNav ? <Navigation items={navItems} /> : null}
        <div className="-mt-10 sm:mt-0">
          <div className="flex flex-col items-center">{children}</div>
        </div>
        <Footer />
      </main>
      <GradientBackground />
    </>
  );
};

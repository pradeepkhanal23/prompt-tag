import "@styles/global.css";
import "@components/Navbar";
import "@components/Feed";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import ToggleTheme from "./providers";

export const metadata = {
  title: "prompt-tag",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="dark:bg-black/10 dark:text-slate-100 ">
        <ToggleTheme>
          <Provider>
            <Navbar />
            <main>{children}</main>
          </Provider>
        </ToggleTheme>
      </body>
    </html>
  );
};

export default RootLayout;

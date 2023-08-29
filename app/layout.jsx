import "@styles/global.css";
import "@components/Navbar";
import "@components/Feed";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";

export const metadata = {
  title: "prompt-tag",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

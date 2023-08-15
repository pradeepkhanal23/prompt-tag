import "@styles/global.css";
import "@components/Navbar";
import "@components/Feed";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import Feed from "@components/Feed";

export const metadata = {
  title: "HASHTAG",
  description: "AI powered prompt generator",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
          <main>{children}</main>
          <Feed />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

// background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

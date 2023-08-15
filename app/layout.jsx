import "@styles/global.css";
import "@components/Navbar";
import "@components/Feed";
import Navbar from "@components/Navbar";
import Feed from "@components/Feed";

export const metadata = {
  title: "Hashtag",
  description: "AI powered prompt generator",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Feed />
      </body>
    </html>
  );
};

export default RootLayout;

// background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

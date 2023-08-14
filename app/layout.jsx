import "@styles/global.css";

export const metadata = {
  title: "promptTag",
  description: "AI powered prompt generator",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

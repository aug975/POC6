import "./globals.css";


export const metadata = {
  title: "A Forja",
  description: "A forja",
};

export default function RootLayout({ children }) {
  var precoTotal = 0
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

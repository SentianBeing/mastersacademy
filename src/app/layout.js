import "./globals.css";

export const metadata = {
  title: "Masters Entrance Academy | Premium Post-Graduate Entrance Preparation",
  description: "Secure your rank in premier master's programs with Masters Entrance Academy. Over 180 comprehensive study modules, simulated online mocks, and expert mentorship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

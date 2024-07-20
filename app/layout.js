import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Markdown Previewer",
  description: "Edit and Preview your Github flavoured Markdown!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <div id="footer"><a target="_blank" href="https://github.com/WizardOfSaaS/markdown-previewer">Source Code</a> by <a target="_blank" href="https://x.com/WizardOfSaaS">WizardOfSaaS</a></div>
      </body>
    </html>
  );
}

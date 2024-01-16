import { useThemeContext } from "../ThemeContext";
import { Footer } from "../layout/Footer";
import Header from "../layout/Header";

export default function Layout({ children }) {
  const { isDark } = useThemeContext();
  return (
    <div
      className={"flex flex-col h-screen  " + (isDark ? " bg-slate-700 " : " ")}
    >
      <Header />
      <span
        className={
          "flex  p-2 flex-grow md:ml-8 md:mr-8 " +
          (isDark ? " bg-slate-700 text-white" : " ")
        }
      >
        {children}
      </span>
      <span className={isDark ? " bg-slate-700 " : " "}>
        <Footer />
      </span>
    </div>
  );
}

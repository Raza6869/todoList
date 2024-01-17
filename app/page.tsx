//context
import ThemeProvider from "./context/ThemeProvider";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

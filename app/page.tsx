import About from "./components/About";
import CosmicBackground from "./components/Cosmic";
import Editor from "./components/Editor";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <CosmicBackground />
      <Header />
      <About />
      <Editor />
    </>
  );
}

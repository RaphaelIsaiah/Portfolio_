import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ContactMeSection from "./components/ContactMeSection"
import Footer from "./components/Footer"

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <ContactMeSection />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;

import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";
import Companies from "./components/Companies/Companies";
import Courses from "./components/Courses/Courses";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Testimonials from "./components/Testimonials/Testimonials";
import Welcome from "./components/Welcome/Welcome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <Header />
        <Welcome />
        <Advantages />
        <About />
        <Courses />
        <Companies />
        <Testimonials />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}

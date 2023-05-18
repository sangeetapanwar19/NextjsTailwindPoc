import Header from "../components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Award from "@/components/Award";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import "../menu";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div className="font-nunito overflow-x-hidden">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Award />
      <Feedback />
      <div id="award" class="container my-16 mx-auto px-4 md:px-12">
        <ul class="flex flex-wrap">
          {products.map((product) => (
            <li
              class="text-indigo-900 font-bold  shadow-lg  my-1 px-1 w-full md:w-1/2 sm:mt-10 sm:px-4 lg:mt-10 lg:px-4 lg:w-1/3"
              key={product.id}
            >
              {product.title}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = await fetch("https://fakestoreapi.com/products");
  const response = await query.json();
  return {
    props: {
      products: response,
    },
  };
};

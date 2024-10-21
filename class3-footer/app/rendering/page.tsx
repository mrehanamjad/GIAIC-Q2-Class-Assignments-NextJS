import React from "react";

function page() {
  return (
    <div className="w-full min-h-screen p-20 pt-28 text-white/95">
      <section className="md:p-4 ">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Rendering in Next.js
        </h1>
        <p className="text-lg mt-3">
          Next.js provides powerful rendering methods that allow you to choose
          how and when your pages are rendered. This enables you to optimize
          performance and deliver better user experiences. The main types of
          rendering in Next.js are:
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li>Static Generation (SSG)</li>
          <li>Server-Side Rendering (SSR)</li>
          <li>Client-Side Rendering (CSR)</li>
          <li>Incremental Static Regeneration (ISR)</li>
        </ul>
      </section>
      <section className="md:p-4 ">
        <h2 className="text-2xl md:text-4xl font-bold">
          1. Static Generation (SSG)
        </h2>
        <p className="text-md mt-3">
          Static Generation pre-renders the page at build time, meaning that the
          HTML is generated once and reused on every request. This is ideal for
          pages that don't change frequently.
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-green-700">
          Example:
        </h3>
        <pre className="bg-slate-700 text-gray-200 py-3 px-8 rounded">
          {`
import { GetStaticProps } from 'next';

const HomePage = ({ data }) => {
  return <div>{data.title}</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: { data }, // Pass data to the page as props
  };
};

export default HomePage;

        `}
        </pre>
      </section>
      <section className="md:p-4 ">
        <h2 className="text-2xl md:text-4xl font-bold">
          2. Server-Side Rendering (SSR)
        </h2>
        <p className="text-md mt-3">
          Server-Side Rendering dynamically generates the page on each request.
          The HTML is generated at runtime, ensuring the most up-to-date content
          is always served.
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-green-700">
          Example:
        </h3>
        <pre className="bg-slate-700 text-gray-200 py-3 px-8 rounded">
          {`
import { GetServerSideProps } from 'next';

const Dashboard = ({ data }) => {
  return <div>{data.message}</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.example.com/dashboard');
  const data = await res.json();

  return {
    props: { data }, // Pass data to the page as props
  };
};

export default Dashboard;

          `}
        </pre>
      </section>
      <section className="md:p-4 ">
        <h2 className="text-2xl md:text-4xl font-bold">
          3. Client-Side Rendering (CSR)
        </h2>
        <p className="text-md mt-3">
          With Client-Side Rendering, the page is rendered entirely on the
          client side. Initial HTML is sent to the browser, and JavaScript
          fetches data and updates the page.
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-green-700">
          Example:
        </h3>
        <pre className="bg-slate-700 text-gray-200 py-3 px-8 rounded">
          {`
import { useEffect, useState } from 'react';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductsPage;

          `}
        </pre>
      </section>
      <section className="md:p-4 ">
        <h2 className="text-2xl md:text-4xl font-bold">
          4. Incremental Static Regeneration (ISR)
        </h2>
        <p className="text-md mt-3">
          Incremental Static Regeneration allows you to update static pages
          after the site has been built. You can specify how often the page
          should be regenerated in the background with new data.
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-green-700">
          Example:
        </h3>
        <pre className="bg-slate-700 text-gray-200 py-3 px-8 rounded">
          {`
import { GetStaticProps } from 'next';

const BlogPost = ({ post }) => {
  return <div>{post.title}</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.example.com/post/1');
  const post = await res.json();

  return {
    props: { post },
    revalidate: 10, // Revalidate the page every 10 seconds
  };
};

export default BlogPost;

          `}
        </pre>
      </section>
    </div>
  );
}

export default page;

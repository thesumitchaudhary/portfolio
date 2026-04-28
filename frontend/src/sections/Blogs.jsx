import React from "react";

const Blogs = ({ className = "" }) => {
  return (
    <section id="blog" className={`flex flex-wrap blog-section ${className}`.trim()}>
      <div className="text-white border w-1/3 mx-auto p-5 rounded-2xl">
        <h1>Blogs</h1>
        <div>
          <h2>History of HTML</h2>
          <ul>
            <li>
              HTML stands for Hyper-Text markup language. It was founded in
              1991. by Tim's Berners-lee, the inventer of the world wide web.
            </li>
            <li>
              It started with only 18 tags. Now, curent version is HTML. this
              version Has semantic tags like Header, main, section, footer etc
            </li>
            <details>
              <pre>
                {/* <!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta name="viewport" content="width=devide-width. intial-scale=1.0">
                    <title>Document</title>
                  </head>

                </html> */}
              </pre>
            </details>
          </ul>
        </div>
      </div>
      <div className="text-white border w-1/3 mx-auto p-5 rounded-2xl">
        <h1>Blogs</h1>
        <div>
          <h2>History of HTML</h2>
          <ul>
            <li>
              HTML stands for Hyper-Text markup language. It was founded in
              1991. by Tim's Berners-lee, the inventer of the world wide web.
            </li>
            <li>
              It started with only 18 tags. Now, curent version is HTML. this
              version Has semantic tags like Header, main, section, footer etc
            </li>
            <details>
              <pre>
                {/* <!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta name="viewport" content="width=devide-width. intial-scale=1.0">
                    <title>Document</title>
                  </head>

                </html> */}
              </pre>
            </details>
          </ul>
        </div>
      </div>
       <div className="text-white border w-1/3 mx-auto p-5 rounded-2xl">
        <h1>Blogs</h1>
        <div>
          <h2>History of HTML</h2>
          <ul>
            <li>
              HTML stands for Hyper-Text markup language. It was founded in
              1991. by Tim's Berners-lee, the inventer of the world wide web.
            </li>
            <li>
              It started with only 18 tags. Now, curent version is HTML. this
              version Has semantic tags like Header, main, section, footer etc
            </li>
            <details>
              <pre>
                {/* <!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta name="viewport" content="width=devide-width. intial-scale=1.0">
                    <title>Document</title>
                  </head>

                </html> */}
              </pre>
            </details>
          </ul>
        </div>
      </div>
      <div className="text-white border w-1/3 mx-auto p-5 rounded-2xl">
        <h1>Blogs</h1>
        <div>
          <h2>History of HTML</h2>
          <ul>
            <li>
              HTML stands for Hyper-Text markup language. It was founded in
              1991. by Tim's Berners-lee, the inventer of the world wide web.
            </li>
            <li>
              It started with only 18 tags. Now, curent version is HTML. this
              version Has semantic tags like Header, main, section, footer etc
            </li>
            <details>
              <pre>
                {/* <!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta name="viewport" content="width=devide-width. intial-scale=1.0">
                    <title>Document</title>
                  </head>

                </html> */}
              </pre>
            </details>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

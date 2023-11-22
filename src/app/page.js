import Image from "next/image";
const testimonials = [
  {
    body: " I was looking for a unique travel experience, and I found it on Ithaka. I booked a private tour of the Pyramids with a local guide, and it was amazing! The guide was knowledgeable and passionate about Egypt. ",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: " I was looking for a unique travel experience, and I found it on Ithaka. I booked a private tour of the Pyramids with a local guide, and it was amazing! The guide was knowledgeable and passionate about Egypt. ",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: " I was looking for a unique travel experience, and I found it on Ithaka. I booked a private tour of the Pyramids with a local guide, and it was amazing! The guide was knowledgeable and passionate about Egypt. ",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="flex h-full w-full flex-col justify-center bg-[url('./assets/group-bg.png')] bg-no-repeat">
        <div className="mx-auto flex flex-col gap-5 px-10">
          <div className="mx-auto flex flex-col gap-3 text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#4D9DE0]">
              Clients' Testimonials
            </h2>
            <p className="text-3xl font-bold text-white">
              Unforgettable Travel Experiences{" "}
            </p>
          </div>
          <div className="mx-auto">
            <div className="flex items-center gap-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.author.handle}
                  className="relative flex h-[436px] flex-col px-4"
                >
                  <div className="flex w-full translate-y-10 justify-center">
                    <img
                      className="h-[144px] w-[144px] rounded-full border border-[5px] bg-gray-50 shadow-sm"
                      src={testimonial.author.imageUrl}
                      alt=""
                    />
                  </div>
                  <div
                    className={classNames(
                      "flex flex-1 flex-col items-center justify-center rounded-2xl  pt-10  p-8 text-sm leading-6",
                      index % 2 !== 0 ? "bg-[#FF785A]" : "bg-white"
                    )}
                  >
                    <div className="text-gray-900">
                      <p
                        className={classNames(
                          "text-center",
                          index % 2 !== 0 ? "text-white" : "text-[#1F2B5F]"
                        )}
                      >{`“${testimonial.body}”`}</p>
                    </div>
                    <div className="mt-6 flex items-center text-center">
                      <div>
                        <div
                          className={classNames(
                            "font-bolder text-xl ",

                            index % 2 !== 0 ? "text-white" : "text-[#1F2B5F]"
                          )}
                        >
                          {testimonial.author.name}
                        </div>
                        <div
                          className={classNames(
                            index % 2 !== 0 ? "text-white" : "text-[#1F2B5F]"
                          )}
                        >{`${testimonial.author.handle}`}</div>
                      </div>
                    </div>
                    <div class="mt-3 flex items-center">
                      <svg
                        className="ms-1 h-6 w-6 text-yellow-300 shadow-sm"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="ms-1 h-6 w-6 text-yellow-300 shadow-sm"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="ms-1 h-6 w-6 text-yellow-300 shadow-sm"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="ms-1 h-6 w-6 text-yellow-300 shadow-sm"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="ms-1 h-6 w-6 text-yellow-300 shadow-sm"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

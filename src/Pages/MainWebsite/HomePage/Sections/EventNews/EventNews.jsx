import { Link } from "react-router-dom";

const EventNews = () => {
  return (
    <div className="bg-background-500 px-20 text-center py-28">
      <p className="text-5xl text-primary-500 font-serif leading-relaxed">
        News &{" "}
        <span className="underline-offset-2 border-b-4 border-accent-500 text-p-white">
          Events
        </span>
      </p>
      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-8">
          <p className="font-serif text-3xl text-p-white font-semibold text-left pt-5">
            Recent notice
          </p>
          <div className="grid text-left py-5 font-sans text-p-white">
            <p className="font-semibold text-lg">
              Admission notice (2022-23) (M.Sc. in Meteorology)
            </p>
            <p className="text-sm py-2">
              Our esteemed faculty members are at the heart of Univast
              University academic community. They are accomplished experts in
              their fields, dedicated to delivering high-quality education and
              mentoring students. With their guidance, you&apos;ll delve into
              cutting-edge research, engage in thought-provoking discussions,
              and receive personalized attention...
            </p>
            <p className="pb-2 text-accent-400">Published: 14 May, 2023</p>
            <div className="py-5">
              <Link
                className="border-2 border-p-white py-3 px-10 hover:border-none hover:bg-accent-500 hover:text-background-500"
                to=""
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="grid text-left py-5 font-sans text-p-white">
            <p className="font-semibold text-lg">
              Admission notice (2022-23) (M.Sc. in Meteorology)
            </p>
            <p className="text-sm py-2">
              Our esteemed faculty members are at the heart of Univast
              University academic community. They are accomplished experts in
              their fields, dedicated to delivering high-quality education and
              mentoring students. With their guidance, you&apos;ll delve into
              cutting-edge research, engage in thought-provoking discussions,
              and receive personalized attention...
            </p>
            <p className="pb-2 text-accent-400">Published: 14 May, 2023</p>
            <div className="py-5">
              <Link
                className="border-2 border-p-white py-3 px-10 hover:border-none hover:bg-accent-500 hover:text-background-500"
                to=""
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="grid text-left py-5 font-sans text-p-white">
            <p className="font-semibold text-lg">
              Admission notice (2022-23) (M.Sc. in Meteorology)
            </p>
            <p className="text-sm py-2">
              Our esteemed faculty members are at the heart of Univast
              University academic community. They are accomplished experts in
              their fields, dedicated to delivering high-quality education and
              mentoring students. With their guidance, you&apos;ll delve into
              cutting-edge research, engage in thought-provoking discussions,
              and receive personalized attention...
            </p>
            <p className="pb-2 text-accent-400">Published: 14 May, 2023</p>
            <div className="py-5">
              <Link
                className="border-2 border-p-white py-3 px-10 hover:border-none hover:bg-accent-500 hover:text-background-500"
                to=""
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <p className="font-serif text-2xl text-p-white font-semibold text-left pt-5">
            All notice
          </p>
          <div className="grid text-left py-5 font-sans text-p-white">
            <p className="font-semibold text-lg">
              Admission notice (2022-23) (M.Sc. in Meteorology)
            </p>
            <p className="pb-2 text-accent-400">Published: 14 May, 2023</p>
            <div className="py-5">
              <Link
                className="border-2 border-p-white py-1 px-4 hover:border-none hover:bg-accent-500 hover:text-background-500"
                to=""
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventNews;

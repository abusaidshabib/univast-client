import SecondaryButton from "../../../../../Components/Buttons/SecondaryButton";
import SecondarySmall from "../../../../../Components/Buttons/SecondarySmall";

const EventNews = () => {
  return (
    <div className="px-20 text-center py-28 text-primary-gray font-sans">
      <p className="text-6xl leading-relaxed">
        News &{" "}
        <span className="underline-offset-2 border-b-4 border-secondary-blue">
          Events
        </span>
      </p>
      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-8">
          <p className="text-3xl font-semibold text-left pt-5">Recent notice</p>
          <div className="grid text-left py-5">
            <p className="font-bold text-xl">
              Admission notice (2022-23) (M.Sc. in Meteorology)
            </p>
            <p className="text-lg py-2 font-serif">
              Our esteemed faculty members are at the heart of Univast
              University academic community. They are accomplished experts in
              their fields, dedicated to delivering high-quality education and
              mentoring students. With their guidance, you&apos;ll delve into
              cutting-edge research, engage in thought-provoking discussions,
              and receive personalized attention...
            </p>
            <p className="pb-2 text-secondary-blue font-semibold">
              Published: 14 May, 2023
            </p>
            <div className="py-5">
              <SecondaryButton link="" text="Read More" icon="" />
            </div>
          </div>
          <div className="grid text-left py-5">
            <p className="font-bold text-xl">
              Admission notice (2022-23) (M.Sc. in Meteorology)
            </p>
            <p className="text-lg py-2 font-serif">
              Our esteemed faculty members are at the heart of Univast
              University academic community. They are accomplished experts in
              their fields, dedicated to delivering high-quality education and
              mentoring students. With their guidance, you&apos;ll delve into
              cutting-edge research, engage in thought-provoking discussions,
              and receive personalized attention...
            </p>
            <p className="pb-2 text-secondary-blue font-semibold">
              Published: 14 May, 2023
            </p>
            <div className="py-5">
              <SecondaryButton link="" text="Read More" icon="" />
            </div>
          </div>
          <div className="grid text-left py-5">
            <p className="font-bold text-xl">
              Admission notice (2022-23) (M.Sc. in Meteorology)
            </p>
            <p className="text-lg py-2 font-serif">
              Our esteemed faculty members are at the heart of Univast
              University academic community. They are accomplished experts in
              their fields, dedicated to delivering high-quality education and
              mentoring students. With their guidance, you&apos;ll delve into
              cutting-edge research, engage in thought-provoking discussions,
              and receive personalized attention...
            </p>
            <p className="pb-2 text-secondary-blue font-semibold">
              Published: 14 May, 2023
            </p>
            <div className="py-5">
              <SecondaryButton link="" text="Read More" icon="" />
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <p className="text-2xl font-semibold text-left pt-5">All notice</p>
          <div className="grid text-left py-5">
            <p className="font-bold text-lg">
              Admission notice (2022-23) (M.Sc. in Meteorology)
            </p>
            <p className="pb-2 text-secondary-blue font-semibold text-base">
              Published: 14 May, 2023
            </p>
            <div className="py-2">
              <SecondarySmall link="" text="Read More" icon="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventNews;

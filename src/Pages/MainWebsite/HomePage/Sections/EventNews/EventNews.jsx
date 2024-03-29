import SecondaryButton from "../../../../../Components/Buttons/SecondaryButton";
import SecondarySmall from "../../../../../Components/Buttons/SecondarySmall";
import { useGetNoticesQuery } from "../../../../../features/notice/noticeApi";
import { convertDate } from "../../../../../utils/ConvertDate";

const EventNews = () => {
  const { data: notices } = useGetNoticesQuery();
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
          {notices?.data?.slice(0, 3).map((notice, index) => (
            <div key={index} className="grid text-left py-5">
              <p className="font-bold text-xl">{notice.title}</p>
              <p className="text-lg py-2 font-serif">
                {notice.content.slice(0, 200)}...
              </p>
              <p className="pb-2 text-secondary-blue font-semibold">
                Published: Published: {convertDate(notice.date)}
              </p>
              <div className="py-5">
                <SecondaryButton
                  link={`/notice/${notice?._id}`}
                  text="Read More"
                  icon=""
                />
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-4 max-h-[calc(100vh-10px)] overflow-y-scroll">
          <p className="text-2xl font-semibold text-left pt-5">All notice</p>
          {notices?.data?.map((notice, index) => (
            <div key={index} className="grid text-left py-5">
              <p className="font-bold text-lg">{notice.title}</p>
              <p className="pb-2 text-secondary-blue font-semibold text-base">
                Published: {convertDate(notice.date)}
              </p>
              <div className="py-2">
                <SecondarySmall
                  link={`/notice/${notice?._id}`}
                  text="Read More"
                  icon=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventNews;

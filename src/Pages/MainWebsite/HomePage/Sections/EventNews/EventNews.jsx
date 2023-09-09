import SecondaryButton from "../../../../../Components/Buttons/SecondaryButton";
import SecondarySmall from "../../../../../Components/Buttons/SecondarySmall";
import { convertDate } from "../../../../../utils/ConvertDate";

const EventNews = () => {
  const notices = [
    {
      title: "Important Announcement 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero ac nunc cursus fermentum.",
      date: "2023-09-09T10:00:00Z",
      author: "John Doe",
      targetAudience: "All Employees",
    },
    {
      title: "Team Meeting Reminder",
      content:
        "Don't forget the team meeting at 2 PM tomorrow in the conference room.",
      date: "2023-09-10T14:00:00Z",
      author: "Jane Smith",
      targetAudience: "Team A",
    },
    {
      title: "Holiday Notice",
      content: "Our office will be closed on September 15th for the holiday.",
      date: "2023-09-15T00:00:00Z",
      author: "HR Department",
      targetAudience: "All Employees",
    },
    {
      title: "Product Launch Announcement",
      content:
        "We are excited to announce the launch of our new product on October 1st.",
      date: "2023-10-01T09:00:00Z",
      author: "Marketing Team",
      targetAudience: "Customers",
    },
    {
      title: "Training Session",
      content:
        "Join us for a training session on September 20th to learn about our new software.",
      date: "2023-09-20T15:30:00Z",
      author: "Training Department",
      targetAudience: "Employees",
    },
    {
      title: "Office Closure",
      content:
        "The office will be closed for maintenance on September 12th and 13th.",
      date: "2023-09-12T00:00:00Z",
      author: "Facilities Team",
      targetAudience: "All Employees",
    },
    {
      title: "New HR Policy",
      content:
        "We have updated our HR policy handbook. Please review the changes.",
      date: "2023-09-25T08:00:00Z",
      author: "HR Department",
      targetAudience: "Employees",
    },
    {
      title: "Upcoming Conference",
      content:
        "Save the date for our annual company conference on November 5th.",
      date: "2023-11-05T10:00:00Z",
      author: "Events Team",
      targetAudience: "All Employees",
    },
    {
      title: "Project Deadline Extension",
      content:
        "The deadline for project XYZ has been extended to October 15th.",
      date: "2023-09-07T16:00:00Z",
      author: "Project Manager",
      targetAudience: "Project Team",
    },
    {
      title: "New Employee Welcome",
      content:
        "Please join us in welcoming our new team member, Sarah Johnson.",
      date: "2023-09-14T09:30:00Z",
      author: "HR Department",
      targetAudience: "All Employees",
    },
  ];

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
          {notices?.slice(0, 3).map((notice, index) => (
            <div key={index} className="grid text-left py-5">
              <p className="font-bold text-xl">{notice.title}</p>
              <p className="text-lg py-2 font-serif">
                {notice.content.slice(0, 200)}...
              </p>
              <p className="pb-2 text-secondary-blue font-semibold">
                Published: Published: {convertDate(notice.date)}
              </p>
              <div className="py-5">
                <SecondaryButton link="" text="Read More" icon="" />
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-4">
          <p className="text-2xl font-semibold text-left pt-5">All notice</p>
          {notices?.map((notice, index) => (
            <div key={index} className="grid text-left py-5">
              <p className="font-bold text-lg">{notice.title}</p>
              <p className="pb-2 text-secondary-blue font-semibold text-base">
                Published: {convertDate(notice.date)}
              </p>
              <div className="py-2">
                <SecondarySmall link="" text="Read More" icon="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventNews;

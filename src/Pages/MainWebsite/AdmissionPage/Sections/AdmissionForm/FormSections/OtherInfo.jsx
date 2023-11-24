/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setOthersInfo } from "../../../../../../features/application/applicationSlice";
import { usePostApplicationMutation } from "../../../../../../features/application/applicationApi";
import { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../../../Context/UserContext";
import { usePostUserMutation } from "../../../../../../features/user/userApi";
import { useSendEmailMutation } from "../../../../../../features/sendEmail/sendEmailApi";

const OtherInfo = () => {
  const { createUser } = useContext(AuthContext);
  const [postUser] = usePostUserMutation();
  const [postApplication, { isLoading, isError, error, isSuccess }] =
    usePostApplicationMutation();
  const [sendEmail] = useSendEmailMutation();

  const { general, personal, family, education, others } = useSelector(
    (state) => state.application
  );
  const {
    is_parents_freedom_fighter,
    is_tribal,
    is_physical_disorder,
    is_first_division_player,
    accept_declaration,
    accept_terms,
  } = useSelector((state) => state.application.others);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const is_parents_freedom_fighter = form.is_parents_freedom_fighter.checked;
    const is_tribal = form.is_tribal.checked;
    const is_physical_disorder = form.is_physical_disorder.checked;
    const is_first_division_player = form.is_first_division_player.checked;
    const accept_declaration = form.accept_declaration.checked;
    const accept_terms = form.accept_terms.checked;

    const data = {
      is_parents_freedom_fighter,
      is_tribal,
      is_physical_disorder,
      is_first_division_player,
      accept_declaration,
      accept_terms,
    };

    console.log(data);

    await dispatch(setOthersInfo(data));
    console.log({ general, personal, family, education, others });

    const email = personal.email;
    const password = "applicant123";
    const firstName = personal.firstName;
    const lastName = personal.lastName;
    const role = "applicant";

    const subject = `Hello! ${firstName} ${lastName}. Your application has been submitted.`;
    const html = `
            <head>
              <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
            <header>
              <Link
                to="http://localhost:3000/"
                className="flex items-center cursor-pointer"
              >
                <span className="text-primary-blue cursor-pointer text-4xl font-bold pr-1">
                  UNI
                </span>
                <span className="border-l-2 border-primary-orange pl-1">
                  <span className="text-accent-blue cursor-pointer font-semibold text-lg leading-none">
                    VAST
                  </span>{" "}
                  <br />
                  <span className="text-primary-gray cursor-pointer leading-none text-base">
                    University
                  </span>
                </span>
              </Link>
            </header>

            <main className="mt-8">
              <h2 className="text-gray-700 dark:text-gray-200">
                Hi ${lastName},
              </h2>

              <p>I hope this message finds you well. We wanted to inform you that your application for admission to [University/Program Name] has been successfully submitted.</p>

              <p>Your application details have been received, and our admissions team will now review your application thoroughly. Please rest assured that we will carefully consider your qualifications and achievements during our selection process.</p>

              <p><strong>Next Steps:</strong></p>
              <ol>
                  <li><strong>Application Review:</strong> Our admissions committee will review all applications received, and you will be notified of the outcome via email.</li>
                  <li><strong>Notification:</strong> You will receive an update regarding your application status within [mention a time frame, e.g., "the next 4-6 weeks"]. We will send all correspondence to this email address (<a href="mailto:[Applicant's Email Address]">[Applicant's Email Address]</a>), so please be sure to check your inbox regularly.</li>
                  <li><strong>Contact Information:</strong> If you need to reach out to us or have any questions about your application, you can contact our admissions office at <a href="[Admissions Office Contact Information]">[Admissions Office Contact Information]</a>. Our team is here to assist you.</li>
                  <li><strong>Check Your Spam/Junk Folder:</strong> Occasionally, emails may end up in your spam or junk folder, so be sure to check those folders as well to ensure you don't miss any important updates.</li>
              </ol>

              <p>We appreciate your interest in [University/Program Name], and we thank you for choosing us as the next step in your educational journey. We look forward to considering your application and potentially welcoming you to our community of scholars.</p>

              <p>In the meantime, if you have any immediate questions or concerns, please don't hesitate to reach out. We are here to assist you throughout the application process.</p>

              <p>Thank you for your application and your interest in [University/Program Name]. We wish you the best of luck with your application and hope to provide you with a positive response soon.</p>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Your online portal Login credentials:
                <br />
                Email: ${email}
                <br />
                Password: ${password}
                <br />
              </p>

              <a href="http://localhost:3000/login" className="px-6 py-2 mt-8 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Login
              </a>
            </main>

            <footer className="mt-8">
              <p className="text-gray-500 dark:text-gray-400">
                Best regards, <br/>
                Univast Univarsity 
                Email: univast@gmail.com
                Contact: 0123456798
              </p>
            </footer>
          </section>`;

    const emailData = { email, subject, html };

    createUser(email, password)
      .then((result) => {
        console.log(result);
        const userData = {
          firstName,
          lastName,
          role,
          email,
          firebaseId: result.user.uid,
        };
        console.log(userData);
        postUser(userData);
        postApplication({ general, personal, family, education, others });
        sendEmail(emailData);
      })
      .catch((error) => {
        toast.error(error.message)
      });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully Applied");
    }

    if (isError) {
      console.log(error);
      toast.error(error.data.message._message);
    }
  }, [error, isError, isSuccess]);

  return (
    <form onSubmit={handleSubmit} className="font-sans text-primary-white">
      <p className="text-4xl pb-5 font-semibold">Others Info</p>
      <hr className="pb-5" />

      <div>
        <label className="text-2xl leading-loose">
          Please tick (✔) the following box if applicable:
        </label>
        <br />

        <div className="grid grid-cols-4 gap-10 pb-10 mt-5">
          <div className="flex gap-3 items-center">
            <input
              name="is_parents_freedom_fighter"
              id="is_parents_freedom_fighter"
              defaultValue={is_parents_freedom_fighter}
              type="checkbox"
            />
            <label className="text-xl" htmlFor="is_parents_freedom_fighter">
              If your parents is freedom fighter
            </label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              name="is_tribal"
              id="is_tribal"
              defaultValue={is_tribal}
              type="checkbox"
            />
            <label className="text-xl" htmlFor="is_tribal">
              If You are a tribal
            </label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              name="is_physical_disorder"
              id="is_physical_disorder"
              defaultValue={is_physical_disorder}
              type="checkbox"
            />
            <label className="text-xl" htmlFor="is_physical_disorder">
              If You are a physical disorder
            </label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              name="is_first_division_player"
              id="is_first_division_player"
              defaultValue={is_first_division_player}
              type="checkbox"
            />
            <label className="text-xl" htmlFor="is_first_division_player">
              If you are a first division player
            </label>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3">
            <input
              name="accept_declaration"
              id="accept_declaration"
              required
              defaultValue={accept_declaration}
              type="checkbox"
            />
            <label className="text-xl" htmlFor="accept_declaration">
              I declare that the information provided by me in this system is
              true and correct to the best of my knowledge.
              <span className="text-red-500 pl-2">*</span>
            </label>
          </div>

          {/* {errors.accept_declaration && <p className="text-red-500 mt-2">This field is required</p>} */}
        </div>

        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-3">
            <input
              name="accept_terms"
              id="accept_terms"
              required
              defaultValue={accept_terms}
              type="checkbox"
            />
            <label className="text-xl" htmlFor="accept_terms">
              I have read all the{" "}
              <Link to="#" className="text-primary-300">
                {" "}
                Rules and Regulations
              </Link>{" "}
              of Bangladesh University (DIU),and having understood that if I am
              admitted into DIU, I will abide by the rules and regulations of
              this university.If I do any misconduct that violates the rules of
              DIU, I shall accept any decision taken by DIU authority.
              <span className="text-red-500 pl-2">*</span>
            </label>
          </div>
          {/* 
          errors.accept_terms && <p className="text-red-500 mt-2">This field is required</p>} */}
        </div>

        <br />
      </div>

      <div className="py-10 flex gap-8 items-center">
        <button
          className="bg-tertiary-blue py-3 px-10 rounded-md text-lg text-primary-white border-b-6"
          type="button"
          onClick={() => navigate("/admission/online/educational")}
        >
          Prev
        </button>
        <button
          className="bg-tertiary-blue py-3 px-10 flex items-center gap-3 rounded-md text-lg text-primary-white border-b-6"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg
                aria-hidden="true"
                role="status"
                className="w-5 h-5 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Saving...
            </>
          ) : (
            <>Submit</>
          )}
        </button>
      </div>
    </form>
  );
};

export default OtherInfo;

const ConfirmationModal = () => {
  return (
    <>
      <div className="modal-wrapper w-full min-h-screen bg-white opacity-50 absolute"></div>
      <div className="modal-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-300 p-5">
        <p className="text-center text-xl font-semibold py-10">Are you sure?</p>
        <div className="flex gap-16">
          <button className="text-primary-white font-sans uppercase font-extrabold text-sm bg-secondary-blue px-8 py-2 rounded-sm inline-flex items-center gap-2 tracking-wider hover:bg-transparent border-2 border-secondary-blue hover:border-2 hover:border-primary-gray hover:text-primary-gray">
            Yes
          </button>
          <button className="text-primary-white font-sans uppercase font-extrabold text-sm bg-secondary-blue px-8 py-2 rounded-sm inline-flex items-center gap-2 tracking-wider hover:bg-transparent border-2 border-secondary-blue hover:border-2 hover:border-primary-gray hover:text-primary-gray">
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;

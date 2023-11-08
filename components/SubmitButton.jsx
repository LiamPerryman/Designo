function SubmitButton() {
  return (
    <button
      className={` bg-white text-darkGray hover:bg-lightPeach hover:text-white cursor-pointer font-medium transition-colors ease duration-300 h-14 w-40 rounded-lg px-6 py-4`}
      type="submit"
    >
      SUBMIT
    </button>
  );
}

export default SubmitButton;

const HorizontalCardList = () => {
  return (
    <div className="min-h-[5rem] m-3">
      {/* Repeat this div for each card */}
      <div className="flex-none w-64 bg-gray-200 p-4 mr-4">
        {/* Card content */}
        <h2 className="text-lg font-semibold">Card Title</h2>
        <p className="text-gray-700">Card Description</p>
      </div>
      {/* Repeat this div for each card */}
    </div>
  );
};

export default HorizontalCardList;
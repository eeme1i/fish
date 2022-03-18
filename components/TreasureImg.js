export default function getImgViewer(state) {
  const img = getImgElement(state);
  return (
    <div className="w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl  transition ease-in-out ">
      {img}
    </div>
  );
}

function getImgElement(state) {
  if (state == 0) {
    return <div className="bg-nord-3 rounded-xl" />; //bg-nord-3 rounded-xl
  }
  if (state == 1) {
    return (
      <div className="bg-[url('/textures/boom.png')] bg-cover rounded-xl" />
    );
  }
  if (state == 2) {
    return (
      <div className="bg-[url('/textures/treasure.png')] bg-cover rounded-xl" />
    );
  }
  if (state == 3) {
    return (
      <div className="bg-[url('/textures/fakePng.png')] bg-cover rounded-xl" />
    );
  }
  return <div className="bg-nord-3 rounded-xl" />;
}

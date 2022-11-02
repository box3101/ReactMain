function Vids() {

  return (
    <>
      <main id="vids" className='myScroll'>
        <div className="inner">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/kYRh3hxfD_s?autoplay=1&loop=1&autopause=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="autoplay"></iframe>
        </div>
      </main>

      {/* <Popup ref={pop}>
        {youtube.length !== 0 && (
          <iframe src={`https://www.youtube.com/embed/${youtube[Index].snippet.resourceId.videoId}`} frameBorder='0'></iframe>
        )}
      </Popup> */}
    </>
  );
}
export default Vids;